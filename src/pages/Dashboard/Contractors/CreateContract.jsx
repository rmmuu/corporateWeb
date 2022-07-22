import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Autocomplete from "@mui/material/Autocomplete";
import SaveIcon from "@mui/icons-material/Save";
import ContractorAccessCard from "./ContractorAccessCard";
import { Modal } from "react-bootstrap";
import {
  Checkbox,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
} from "@mui/material";
import DeleteIcon from "../../../assets/images/redTrash.svg";
import emptyList from "../../../assets/images/warning.svg";
import TablePagination from "@mui/material/TablePagination";
import { Box } from "@mui/system";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessRightCard from "../Company/Employees/AccessRightCard";
import { Button } from "react-bootstrap";
import apiInstance from "../../../Apis/Axios";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import {
  CreateContract,
  CreateContractWithCustom,
} from "../../../reduxToolkit/EmployeeContractors/EmployeeContractorsApi";
import { useNavigate } from "react-router-dom";
import {
  GetAllContractors,
  GetAllWorkSchdule,
  GetWorkTimeAccess,
  CreateContractWorkSchdule,
} from "../../../reduxToolkit/EmployeeContractors/EmployeeContractorsApi";
import {
  getAllContractors,
  getAllWorkSchdule,
  getWorkTimeAccess,
  getcreateContract,
  getcustomSchdulTime,
} from "../../../reduxToolkit/EmployeeContractors/EmployeeContractorsSlice";
export const CreateContractor = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const getAllContractor = useSelector(getAllContractors);
  const workShiftSchdule = useSelector(getAllWorkSchdule);
  const workShiftAccessTime = useSelector(getWorkTimeAccess);
  const recentlyCreatedContract = useSelector(getcreateContract);
  const customSchdulTime = useSelector(getcustomSchdulTime);
  const [contractor, setContractor] = useState();
  const [deliveryDate, setdeliveryDate] = useState();
  const [item, setItem] = useState();
  const [serviceType, setServiceType] = useState();
  const [description, setDescription] = useState();
  const [checkboxState, setCheckboxState] = useState(false);
  const [startContract, setstartContract] = useState();
  const [endContract, setendContract] = useState();
  const [WorkShift, setWorkShift] = useState();

  const miliseconds = 1604395966369;
  const date = new Date(miliseconds);
  var startContractSeconds = new Date(startContract); // some mock date
  var startMilliseconds = startContractSeconds.getTime();

  var endContractSeconds = new Date(endContract); // some mock date
  var endMilliseconds = endContractSeconds.getTime();
  const [userRemoveModal, setuserRemoveModal] = useState(false);

  // Pagination
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderby, setOrderby] = useState("id");
  let contractPagination = {
    order: true,
    page: page,
    size: rowsPerPage,
    sortBy: orderby,
  };
  // End Pagination

  const getAllcontractDetail = async () => {
    const data = {
      order: true,
      page: 0,
      size: 10,
      sortBy: "string",
    };
    const result = await apiInstance
      .post("contractor-service/get-all-pageable", {
        order: true,
        page: 0,
        size: 10,
        sortBy: "id",
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error.response;
      });
  };
  const addContractWorkShift = async (val) => {
    const passValue = { WorkShift, val };
    // dispatch(CreateContractWorkSchdule(passValue));
    //  navigate("/dashboard/contractors-outlet" ,{replace:true})

    const result = await apiInstance
      .post(
        `work-shift-service/contract-work/create/by-workshift-id/${WorkShift}/by-contract-id/${val}`
      )
      .then(function (response) {
        navigate("/dashboard/contractors-outlet", { replace: true });
        return response;
      })
      .catch(function (error) {
        return error.response;
      });
  };
  const addContractWithCustomShift = async (val) => {
    let customSchdule = [];
    customSchdulTime?.map((item) => {
      customSchdule.push({
        contract: { id: val },
        zone: { id: item?.zone?.id.split(",",1)[0] },
        day: { id: item?.day?.id },
        from: item?.from,
        to: item?.to,
      });
    });
    if (customSchdulTime?.length !== 0) {
      dispatch(CreateContractWithCustom(customSchdule));
    }
    navigate("/dashboard/contractors-outlet", { replace: true });
  };

  const handleSubmit = async () => {
    const data = {
      contractor: { id: contractor },
      starDate: startMilliseconds,
      endDate: endMilliseconds,
      description: description ? description : "no desc",
    };
    await dispatch(CreateContract(data));
  };

  useEffect(() => {
    dispatch(GetAllContractors());
    getAllcontractDetail();
    dispatch(GetAllWorkSchdule());
    dispatch(GetWorkTimeAccess());
  }, []);

  useEffect(() => {
    if (recentlyCreatedContract.length !== 0 && checkboxState === false) {
      addContractWorkShift(recentlyCreatedContract?.id);
    }
    if (checkboxState) {
      addContractWithCustomShift(recentlyCreatedContract?.id);
    }
  }, [recentlyCreatedContract]);

  return (
    <>
      <form>
        <div className="head">
          <h2>
            <Link to="/dashboard/company">
              <ArrowBackIcon
                style={{
                  color: "#146F62",
                  fontSize: "30px",
                  marginRight: "30px",
                }}
              />
            </Link>
            CREATE Contract
          </h2>
        </div>
        <div className="mt-5 order_data_component">
          <p className="__header">CONTRACT DATA</p>
          <div className="formCard">
            <div className="mt-2 __body">
              <Box
                style={{ width: "390px", marginLeft: "15px" }}
                className="inputField"
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    CHOOSE A CONTRACTOR
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="CHOOSE A PROVIDER"
                    value={contractor}
                    onChange={(e) => setContractor(e.target.value)}
                  >
                    {getAllContractor &&
                      getAllContractor.map((item, index) => {
                        return (
                          <MenuItem value={item?.id} key={index}>
                            <strong className="me-2">{item?.acronym} | </strong>{" "}
                            <span style={{ fontSize: "14px" }}>
                              {item?.user?.name}
                            </span>
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Box>
              <div className="col-md-12 d-flex">
                <Box
                  style={{ width: "100%", marginRight: "68px" }}
                  className="inputField"
                >
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                      <DesktopDatePicker
                        label="START CONTRACT"
                        inputFormat="MM/dd/yyyy"
                        value={startContract}
                        onChange={setstartContract}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </Box>
                <Box style={{ width: "100%" }} className="inputField">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                      <DesktopDatePicker
                        label="END CONTRACT"
                        inputFormat="MM/dd/yyyy"
                        value={endContract}
                        onChange={setendContract}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </Box>
              </div>
              <div className="col-md-12">
                <TextField
                  className="inputField"
                  fullWidth
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={4}
                  placeholder={"Type some description if necessary..."}
                  // defaultValue="Type some description if necessary..."
                  style={{ color: "#707070" }}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 access_right_component">
          <p className="__header">ACCESS RIGHTS</p>
          <div className="mt-2  __body">
            <div className="__upper d-flex">
              <Box
                style={{ width: "459px", marginLeft: "15px" }}
                className="inputField"
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    SCHEDULE ACCESS
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="CHOOSE A PROVIDER"
                    value={WorkShift}
                    disabled={checkboxState ? true : false}
                    onChange={(e) => {
                      setWorkShift(e.target.value);
                      let id = e.target.value;
                      dispatch(GetWorkTimeAccess({ id, contractPagination }));
                    }}
                  >
                    {workShiftSchdule &&
                      workShiftSchdule.map((item) => {
                        return (
                          <MenuItem value={item?.id}>{item?.name}</MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Box>
              <p>
                <Checkbox
                  defaultChecked={false}
                  onChange={() => setCheckboxState(!checkboxState)}
                  style={{ marginLeft: "37px" }}
                />
                OR CUSTOM SCHEDULE
              </p>
            </div>
            {checkboxState && (
              <div className="__accessbody">
                <Divider>
                  <p className="mt-2 separator">
                    Or Choose <br />
                    Custom Schedule
                  </p>
                </Divider>
                <ContractorAccessCard
                  heading1="zones"
                  heading2="days"
                  update
                  isAddemployee={true}
                  data={workShiftAccessTime}
                />
              </div>
            )}
          </div>
          {!checkboxState && WorkShift && workShiftAccessTime?.totalElements !== 0 ? (
            <>
              <div className="">
                <p className="__header">ACCESS</p>
                <Grid container sx={{ mt: 1 }}>
                  <Grid
                    item
                    xs={3}
                    className="contractor-access-table-heading"
                    sx={{ textAlign: "left" }}
                  >
                    NAME
                  </Grid>
                  <Grid item xs={3} className="contractor-access-table-heading">
                    DAY
                  </Grid>
                  <Grid item xs={3} className="contractor-access-table-heading">
                    FROM
                  </Grid>
                  <Grid item xs={3} className="contractor-access-table-heading">
                    TO
                  </Grid>
                </Grid>
                {workShiftAccessTime &&
                  workShiftAccessTime?.content?.map((item) => {
                    return (
                      <Grid container sx={{ mt: 1 }}>
                        <Grid
                          item
                          xs={3}
                          className="contractor-access-table-first"
                        >
                          {item?.zone?.name}
                        </Grid>
                        <Grid
                          item
                          xs={3}
                          className="contractor-access-table-data"
                        >
                          {item?.day?.name}
                        </Grid>
                        <Grid
                          item
                          xs={3}
                          className="contractor-access-table-data"
                        >
                          {item?.from}
                        </Grid>
                        <Grid
                          item
                          xs={3}
                          className="contractor-access-table-data"
                        >
                          {item?.to}
                        </Grid>
                      </Grid>
                    );
                  })}
              </div>
              <div className="d-flex justify-content-center">
                <TablePagination
                  component="div"
                  rowsPerPageOptions={[10, 15, 20]}
                  labelRowsPerPage="Users per page"
                  count={workShiftAccessTime?.totalElements}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </div>
            </>
          ) :  (
            <span className="warning-msg-style">
              NO WorkShift Access
              <img
                src={emptyList}
                style={{
                  width: "100px",
                  height: "100%",
                  display: "flex",
                }}
              />
            </span>
          )}

          <div className="btnDiv">
            <Button className="createContactBtn" onClick={handleSubmit}>
              CREATE CONTRACT
              <SaveIcon style={{ marginLeft: "10px" }} />
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

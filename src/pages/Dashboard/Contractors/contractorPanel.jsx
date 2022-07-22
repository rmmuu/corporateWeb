import { useState } from "react";
import apiInstance from "../../../Apis/Axios";
import { Box, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button, ButtonGroup } from "react-bootstrap";
import { FormControl } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Switch from "@mui/material/Switch";
import TablePagination from "@mui/material/TablePagination";
import search from "../../../assets/images/search.svg";
import filter from "../../../assets/images/filter.svg";
import plus from "../../../assets/images/plus.svg";
import file from "../../../assets/images/file.svg";
import { Link } from "react-router-dom";
import CustomDropDown from "../../../components/CustomDropDown";
import ProviderDropDown from "../Providers/SubComponents/providerDropDown";
import MUIDataTable from "mui-datatables";
import ProvidersFilterModal from "../Providers/ProviderModels/providersFilterModal";
import ContractorOptionMenu from "./SubComponents/ContractorOptionMenu";
import IncomingModel from "../Events/IncomingModel";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import {
  GetAllEmployeeContractors,
  GetAllEmployeeContracts,
} from "../../../reduxToolkit/EmployeeContractors/EmployeeContractorsApi";
import {
  getAllEmployeeContractors,
  getAllEmployeeContracts,
} from "../../../reduxToolkit/EmployeeContractors/EmployeeContractorsSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ContractorTable from "./ContractorTable";

let contractorAlldata;
const ContractorPanel = () => {
  const fetchAllContracts = useSelector(getAllEmployeeContracts);
  const [getWorkSchdule, setWorkSchdule] = useState();

  const [orderby, setOrderby] = useState("id");
  const [sort, setSort] = useState();

  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [show, setShow] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  const [dropDownProps, setDropDownProps] = useState({
    panel: "contractor",
    firstItem: "ALLOW EVENT",
    secondItem: "VIEW DETAILS",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showIncome, setShowIncome] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  let dispatch = useDispatch();
  const [allFilters, setAllFilters] = useState("id");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };
  const handlFilters = (order, sort) => {
    setOrderby(order);
    setSortBy(sort);
  };

  const [sortBy, setSortBy] = useState();

  let contractPagination = {
    order: true,
    page: page,
    size: rowsPerPage,
    sortBy: orderby,
  };

  const fetchFilterApi = async () => {
    const result = await apiInstance
      .get("assets-service/contract/get-filters")
      .then(function (response) {
        setAllFilters(response?.data?.data);
        return response;
      })
      .catch(function (error) {
        return error.response;
      });
  };
  let id = "2fc63ac0-a37c-422a-a058-42fb42296832";
  const workShiftSchdule = async () => {
    await apiInstance
      .post(
        `work-shift-service/schedule/get-all-pageable/by-work-shift-id/${id}`,
        {
          order: true,
          page: 0,
          size: 10,
          sortBy: "id",
        }
      )
      .then(function (response) {
        if (response.status == 200) {
          // console.log("All work", response?.data?.data?.content.length);
          setWorkSchdule(response?.data?.data);
        }
      })
      .catch(function (error) {
        toast(error?.response?.data?.message);
        document.getElementById("overlay").style.display = "none";
      });
  };
  var now = new Date(); //Fri Jul 24 2020 11:41:49 GMT+0530 (India Standard Time)
  var nowIso = now.toISOString(); //"2020-07-24T06:11:49.911Z"
  var nowInMilliseconds = Date.parse(nowIso);

  useEffect(() => {
    dispatch(GetAllEmployeeContractors());
    fetchFilterApi();
  }, []);
  let inCommingActive = checked
    ? `incoming-active/${nowInMilliseconds}`
    : `records/${nowInMilliseconds}`;

  useEffect(() => {
    if (checked) {
      dispatch(
        GetAllEmployeeContracts({ inCommingActive, contractPagination })
      );
    } else {
      dispatch(
        GetAllEmployeeContracts({ inCommingActive, contractPagination })
      );
    }
  }, [checked, orderby, rowsPerPage,page]);

  const options = {
    filterType: "checkbox",
  };

  return (
    <div className="providersPanel contractors">
      <div className="head">
        <div className="headLeft">
          <h2>CONTRACTORS PANEL</h2>
        </div>
      </div>
      {/* portfolio-grid */}
      <div className="container">
        <div className="row steps-row mb-3" id="pills-tab" role="tablist">
          <div className="col-6 tab" role="presentation">
            <a
              className={`steps btn ${
                toggleState === 1 ? "active-border" : "disable-border"
              }`}
              onClick={() => toggleTab(1)}
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <span>CONTRACTS</span>
            </a>
          </div>
          <div className="col-6 tab tab-right" role="presentation">
            <a
              className={`steps btn ${
                toggleState === 2 ? "active-border" : "disable-border"
              }`}
              onClick={() => toggleTab(2)}
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <span>CONTRACTORS</span>
            </a>
          </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className={`${
              toggleState === 1 ? "tab-pane fade show active " : "tab-pane fade"
            }`}
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="orders">
              <div
                className="head d-flex justify-content-space-between"
                style={{ position: "relative" }}
              >
                <div>
                  <span className="d-flex font-weight-bold">OPTIONS</span>
                  <label className={checked ? null : "contract-option-label"}>
                    INCOMING
                  </label>
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                    color="success"
                  />
                  <label className={checked ? "contract-option-label" : null}>
                    RECORDS
                  </label>
                </div>
                <div className="d-flex">
                  <Link to={"create-order"}>
                    <button className="me-2" onClick={() => setShow(true)}>
                      CREATE CONTRACT
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                  </Link>
                  <div className="d-flex">
                    {toggleState === 1 && (
                      <i
                        class="fa fa-filter filterPopup"
                        aria-hidden="true"
                        onClick={() => setShowIncome(true)}
                      ></i>
                    )}
                  </div>
                </div>

                {showIncome && (
                  <div
                    className="col-md-3 filter_parent"
                    style={{
                      right: "50px",
                      top: "0px",
                      zIndex: "101",
                    }}
                  >
                    <p className="filter_header">
                      FILTERS
                      <CloseIcon
                        style={{
                          marginTop: "10px",
                          color: "red",
                          cursor: "pointer",
                        }}
                        onClick={() => setShowIncome(false)}
                      />
                    </p>
                    <div className="filter_body d-flex justify-content-between py-3">
                      <div className="col-md-12">
                        <p>Attributes</p>
                        <Box
                          style={{ marginTop: "20px !important" }}
                          className="mt-2"
                          sx={{
                            width: "100%",
                            maxWidth: "100%",
                            fontSize: "20px",
                            height: "40px",
                          }}
                        >
                          <FormControl fullWidth>
                            <InputLabel>ORDER BY</InputLabel>
                            <Select
                              value={orderby}
                              label="ORDER BY"
                              onChange={(e) => setOrderby(e.target.value)}
                            >
                              {allFilters &&
                                allFilters?.map((item) => {
                                  return (
                                    <MenuItem value={item}>{item}</MenuItem>
                                  );
                                })}
                            </Select>
                          </FormControl>
                        </Box>
                        <Box
                          className="mt-2"
                          sx={{
                            width: "100%",
                            maxWidth: "100%",
                            fontSize: "20px",
                            height: "40px",
                          }}
                        >
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              sort
                            </InputLabel>
                            <Select
                              value={sort}
                              label="SORT"
                              onChange={(e) => setSort(e.target.value)}
                            >
                              <MenuItem value={10}>ASC</MenuItem>
                              <MenuItem value={20}>DES</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="row">
              <Grid container spacing={3}>
                {fetchAllContracts.data?.content.length > 0
                  ? fetchAllContracts.data?.content.map((item) => {
                      const endDate = new Date(item?.endDate);
                      const startDate = new Date(item?.starDate);
                      return (
                          <Grid item xs={4}>
                          <div className="contract-card">
                            <Grid container>
                              <Grid item xs={5}>
                                <spna className="contract-card__heading">
                                  {" "}
                                  Contract
                                </spna>
                                <spna className="contract-card__no">
                                  {" "}
                                  #{item?.status?.id}
                                </spna>
                              </Grid>
                              <Grid item xs={7}>
                                {item?.status?.id == 22 ? (
                                  <span className="viewcard-container__status">
                                    {item?.status?.name.replaceAll("_"," ")}
                                    <FiberManualRecordIcon
                                      sx={{ fontSize: 40 }}
                                    />
                                  </span>
                                ) : null}

                                {item?.status?.id == 21 ? (
                                  <span className="viewcard-container__status employe-status-documents">
                                    {item?.status?.name.replaceAll("_"," ")}
                                    <FiberManualRecordIcon />
                                  </span>
                                ) : null}
                                {item?.status?.id == 23 ? (
                                  <span className="viewcard-container__status employe-status-Vacation">
                                    {item?.status?.name.replaceAll("_"," ")} <FiberManualRecordIcon style={{color:"red"}}/>
                                  </span>
                                ) : null}
                              </Grid>
                              <span className="contract-card__name">
                              <span className="contract-card__contractor">
                                Contractor
                              </span>
                                {item?.contractor?.user?.name}
                              </span>
                              <span className="contract-card__contractor">
                                Contractor Company <br></br>
                                <b style={{fontSize:"14px",fontWeight:900,marginBottom:"3px",display:"inline-block"}}> {item?.contractor?.acronym} | </b>{item?.contractor?.contractorCompanyName}
                              </span>
                              <div className="contract-card__detail">
                                <Grid container>
                                  <Grid item xs={6}>
                                    <span className="contract-card__title">
                                      Start contract
                                    </span>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <span className="contract-card__desc">
                                      {startDate.toLocaleDateString("en-US")}
                                    </span>
                                  </Grid>
                                </Grid>
                                <Grid container>
                                  <Grid item xs={6}>
                                    <span className="contract-card__title">
                                      End contract
                                    </span>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <span className="contract-card__desc">
                                      {endDate.toLocaleDateString("en-US")}
                                    </span>
                                  </Grid>
                                </Grid>
                                <Grid container>
                                  <Grid item xs={6}>
                                    <span className="contract-card__title">
                                      No employees
                                    </span>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <span className="contract-card__desc">
                                      {item?.noEmployees}
                                    </span>
                                  </Grid>
                                </Grid>
                                <Grid container>
                                  <Grid item xs={6}>
                                    <span className="contract-card__title">
                                      Vehicles
                                    </span>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <span className="contract-card__desc">
                                      {item?.noVehicles}
                                    </span>
                                  </Grid>
                                </Grid>
                              </div>
                            </Grid>
                            <span
                              className="viewcard-container__link mt-2 d-flex"
                            >
                              <Link
                              to={"contractor-details"}
                              state={{ state: item }}
                            >
                              VIEW DETAILS <KeyboardArrowRightIcon />
                            </Link>
                            </span>
                          </div>
                          </Grid>
                      );
                    })
                  : "no"}
                        </Grid>  
                
              </div>
            </div>
            <TablePagination
              component="div"
              rowsPerPageOptions={[8, 16, 24]}
              labelRowsPerPage="Users per page"
              count={fetchAllContracts?.data?.totalElements}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
          <div
            className={`${
              toggleState === 2 ? "tab-pane fade show active " : "tab-pane fade"
            }`}
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="providers">
              <div className="row top-buttons">
                <div className="col-3 upload-document">
                  <span>UPLOAD DOCUMENT</span>
                  <Link to={"upload-contractor"}>
                    <img src={file} alt="file" />
                  </Link>
                </div>
                <div className="col-3 add-provider">
                  <span>ADD NEW CONTRACTOR</span>
                  <Link to="add-contractor">
                    <img src={file} alt="file" />
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <ContractorTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact-form */}
    </div>
  );
};
export default ContractorPanel;

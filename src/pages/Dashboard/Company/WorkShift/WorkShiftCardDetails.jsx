import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import CloseIcon from "@mui/icons-material/Close";
import WorkShiftAccessCard from "./Modals/WorkShiftAccessCard";
import ShiftManagementModal from "./Modals/ShiftManagementModal";
import TablePagination from "@mui/material/TablePagination";
import { GetWorkTimeAccess } from "../../../../reduxToolkit/EmployeeContractors/EmployeeContractorsApi";
import { getWorkTimeAccess } from "../../../../reduxToolkit/EmployeeContractors/EmployeeContractorsSlice";
import { UserWorkSchedule, GetAllByWorkShiftId,
  DeleteUserFromWorkShift,DeleteWorkSHiftTime } from "../../../../reduxToolkit/CompanyWorkShift/CompanyWorkShiftApi";
import { getAllUserWithThisWorkAccess } from "../../../../reduxToolkit/CompanyWorkShift/CompanyWorkShiftSlice";
import {Modal } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "../../../../assets/images/redTrash.svg";
import { Grid } from "@mui/material";
import emptyList from "../../../../assets/images/warning.svg";
import apiInstance from "../../../../Apis/Axios";
import { toast } from "react-toastify";

const WorkShiftCardDetails = ({ setRemoveUserModal,id }) => {
const dispatch=useDispatch()
 
  const [addUserModal, setaddUserModal] = useState(false);
 const WorkTimeAccess = useSelector(getWorkTimeAccess);
 const AllUserWithThisWorkAccess=useSelector(getAllUserWithThisWorkAccess);
  // Pagination
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderby, setOrderby] = useState("id");
  let contractPagination = {
    order: true,
    page: page,
    size: rowsPerPage,
    sortBy: orderby,
  };
  // End Pagination

  // users Pagination
  const [userPage, setUserPage] = useState(0);

  const handleChangeUserPage = (event, newPage) => {
    setUserPage(newPage);
  };
  const handleChangeUserRowsPerPage = (event) => {
    setUserRowsPerPage(parseInt(event.target.value));
    setUserPage(0);
  };
  const [rowsUserPerPage, setUserRowsPerPage] = useState(5);
  const [userOrderby, setUserOrderby] = useState("id");
  let UsercontractPagination = {
    order: true,
    page: page,
    size: rowsPerPage,
    sortBy: userOrderby,
  };
  // End Pagination
  const [selIndex, setSelIndex]=useState(null)

  useEffect(()=>{
    dispatch(GetWorkTimeAccess({id,contractPagination}))
    dispatch(UserWorkSchedule({id,UsercontractPagination}))
  },[])

  const [userRemoveModal, setuserRemoveModal] = useState(false);
  const [timeRemoveModal, setTimeRemoveModal] = useState(false);


  const [delId, setDelId] = useState(null);
  const [deletedUser, setDelatedUser]=useState();

  function UserRemove(props) {

    return (
      <div className="primary-modal">
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <button onClick={props.onHide} className="modal-close-btn">
            X
          </button>
          <span className="main-modal-heading">REMOVE USER</span>
          <div className="unlink-modal-body">
            <span
              className="modal-desc-text"
              style={{ color: "#000", fontSize: "14px", fontWeight: 400 }}
            >
              Are you sure that would you like to remove to the user <b style={{letterSpacing:"1px"}}>{deletedUser}</b>?
            </span>

            <div className="btn-div">
              <button
                className="button-sec btn-cancel"
                style={{ color: "red" }}
                onClick={props.onHide}
              >
                CANCEL
              </button>
              <button
                className="button-sec btn-confirm"
                onClick={() => {
                  removeShift();
                  setuserRemoveModal(false);
                }}
              >
                CONFIRM
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
  function RemoveTimeShift(props) {

    return (
      <div className="primary-modal">
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <button onClick={props.onHide} className="modal-close-btn">
            X
          </button>
          <span className="main-modal-heading">REMOVE ACCESS</span>
          <div className="unlink-modal-body">
            <span
              className="modal-desc-text"
              style={{ color: "#000", fontSize: "14px", fontWeight: 400 }}
            >
             Are you sure that would you like to remove to the access {deletedUser?.from} to {deletedUser?.to} in the work shift <b style={{letterSpacing:"1px",color:"rgba(0,0,0,0.7)"}}>{deletedUser?.day?.name}</b>?
            </span>

            <div className="btn-div">
              <button
                className="button-sec btn-cancel"
                style={{ color: "red" }}
                onClick={props.onHide}
              >
                CANCEL
              </button>
              <button
                className="button-sec btn-confirm"
                onClick={() => {
                  removeCurrentShift();
                  setTimeRemoveModal(false);
                }}
              >
                CONFIRM
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
  
  const removeShift = () => {
    dispatch(DeleteUserFromWorkShift({id,delId}));
  };
  const removeCurrentShift=async()=>{
    let result = await apiInstance.delete(`work-shift-service/schedule/delete-by-id/${selIndex}`).then(function (response) {
      if(response.status == 201 || response.status == 200){
      dispatch(GetWorkTimeAccess({id,contractPagination}))
      }
       return response}).
       catch(function (error) {
            return error.response
        }) 
      toast.success("User Work Schedule SuccessFully");
      }
  useEffect(()=>{
    dispatch(GetWorkTimeAccess({id,contractPagination}))
  },[page,rowsPerPage])

  return (
    <>
      <div>
        <WorkShiftAccessCard id={id}/>
        <div>
          {WorkTimeAccess.totalElements !== 0 ? (
            <>
              <div className="">
                {WorkTimeAccess &&
                  WorkTimeAccess?.content?.map((item) => {
                    return (
                      <Grid container sx={{ mt: 1 }}>
                        <Grid
                          item
                          xs={4}
                          className="contractor-access-table-first"
                        >
                          {item?.zone?.name}
                        </Grid>
                        <Grid
                          item
                          xs={2}
                          className="contractor-access-table-data"
                        >
                          {item?.day?.name}
                        </Grid>
                        <Grid
                          item
                          xs={2}
                          className="contractor-access-table-data"
                        >
                          {item?.from}
                        </Grid>
                        <Grid
                          item
                          xs={2}
                          className="contractor-access-table-data"
                        >
                          {item?.to}
                        </Grid>
                        <Grid
                          item
                          xs={1}
                          className="contractor-access-table-data"
                        >
                           <img
                    src={DeleteIcon}
                    onClick={() => {
                      setTimeRemoveModal(true);
                      setSelIndex(item?.id)
                      setDelatedUser(item)
                    }}
                  />{" "}
                  <RemoveTimeShift
                    show={timeRemoveModal}
                    onHide={() => setTimeRemoveModal(false)}
                  />
                        </Grid>
                      </Grid>
                    );
                  })}
              </div>
              <div className="d-flex justify-content-center">
                <TablePagination
                  component="div"
                  rowsPerPageOptions={[5, 10, 15]}
                  labelRowsPerPage="Accces per page"
                  count={WorkTimeAccess?.totalElements}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </div>
            </>
          ) : (
            <span className="warning-msg-style">
              NO Access
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
          <div
            className="work_text d-flex align-items-center"
            
          >
            <p>Registered Users</p>
            <button
              className="btn btn-lg"
              style={{ fontSize: "14px" }}
              onClick={() => setaddUserModal(true)}
            >
              <u>manage users</u>
            </button>
          </div>
          <div className="row">
            <div className="row work_text">
              {AllUserWithThisWorkAccess && <p>NAME</p>}
            </div>
            <div className="row userstable">
            {AllUserWithThisWorkAccess.totalElements !== 0 ? <>
              {AllUserWithThisWorkAccess && AllUserWithThisWorkAccess?.content?.map((item) => {
                return(
                <div className="col-md-3">
                    <p>
                    <img
                    src={DeleteIcon}
                    onClick={() => {
                      setuserRemoveModal(true);
                      setDelId(item?.id)
                      setDelatedUser(item?.name)
                    }}/>
                      {item?.name}
                    </p>
          
                </div>
              )})} <UserRemove
                show={userRemoveModal}
                onHide={() => setuserRemoveModal(false)}
              />
               <div className="d-flex justify-content-center">
                <TablePagination
                  component="div"
                  rowsPerPageOptions={[5, 10, 15]}
                  labelRowsPerPage="User per page"
                  count={AllUserWithThisWorkAccess?.totalElements}
                  page={userPage}
                  onPageChange={handleChangeUserPage}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleChangeUserRowsPerPage}
                />
              </div>
              </> : (
            <span className="warning-msg-style">
              NO User
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
            </div>
          </div>
        </div>
      </div>
      <ShiftManagementModal
        setRemoveUserModal={setRemoveUserModal}
        setaddUserModal={setaddUserModal}
        title="Shift Management "
        check="false"
        id={id}
        show={addUserModal}
        onHide={() => setaddUserModal(false)}
      />
    </>
  );
};

export default WorkShiftCardDetails;

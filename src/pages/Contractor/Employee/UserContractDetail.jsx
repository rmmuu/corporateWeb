import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmployeCard from "./EmployeCard";
import ViewCard from "../Vehicle/ViewCard";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import VisibilityIcon from "@mui/icons-material/Visibility";
import photo from "../../../assets/images/as.jpg";
import SaveIcon from "@mui/icons-material/Save";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";

const UserContractDetail = () => {
  const [name, setName] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [vehicleModal, setvehicleModal] = useState(false);
  const [userRemoveModal, setuserRemoveModal] = useState(false);
  const [allVehicle, setAllVehicle] = useState(false);
  const [allUser, setAllUser] = useState(false);

  function AllUser(props) {
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
          <span className="main-modal-heading">Employee</span>
          <div className="unlink-modal-body">
            <span className="all-vehical-modal">REMOVE Employee</span>
            <div className="all-vehical-modal--body">
              <span className="all-vehical-modal--body__item">
                Kia Rio 2021 | ULK-123-56{" "}
                <DeleteForeverIcon
                  onClick={() => {
                    setAllUser(false);
                    setuserRemoveModal(true);
                  }}
                />
              </span>
              <span className="all-vehical-modal--body__item">
                Kia Rio 2021 | ULK-123-56 <DeleteForeverIcon  onClick={() => {
                    setAllUser(false);
                    setuserRemoveModal(true);
                  }}/>
              </span>
              <span className="all-vehical-modal--body__item">
                Kia Rio 2021 | ULK-123-56 <DeleteForeverIcon  onClick={() => {
                    setAllUser(false);
                    setuserRemoveModal(true);
                  }}/>
              </span>
              <span className="all-vehical-modal--body__item">
                Kia Rio 2021 | ULK-123-56 <DeleteForeverIcon  onClick={() => {
                    setAllUser(false);
                    setuserRemoveModal(true);
                  }}/>
              </span>
              <span className="all-vehical-modal--body__item">
                Kia Rio 2021 | ULK-123-56 <DeleteForeverIcon onClick={() => {
                    setAllUser(false);
                    setuserRemoveModal(true);
                  }}/>
              </span>
            </div>

            <span className="all-vehical-modal">ADD Employee</span>
            <span className="all-vehical-modal__search">
              <input className="all-vehical-modal__search--input"></input>
              <SearchIcon />
            </span>
            <div className="all-vehical-modal--body">
              <span className="all-vehical-modal--body__add">
                Kia Rio 2021 | ULK-123-56 <CancelIcon />
              </span>
              <span className="all-vehical-modal--body__add">
                Kia Rio 2021 | ULK-123-56 <CancelIcon />
              </span>
              <span className="all-vehical-modal--body__add">
                Kia Rio 2021 | ULK-123-56 <CancelIcon />
              </span>
              <span className="all-vehical-modal--body__add">
                Kia Rio 2021 | ULK-123-56 <CancelIcon />
              </span>
              <span className="all-vehical-modal--body__add">
                Kia Rio 2021 | ULK-123-56 <CancelIcon />
              </span>
            </div>
            <div className="btn-div">
              <button
                className="button-sec btn-cancel"
                style={{ color: "red" }}
                onClick={props.onHide}
              >
                CANCEL
              </button>
              <button className="button-sec btn-confirm">
                <b>APPLY CHANGES</b>
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
  function AllVehicle(props) {
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
          <span className="main-modal-heading">VEHICLE</span>
          <div className="unlink-modal-body">
            <span className="all-vehical-modal">REMOVE VEHICLE</span>
            <div className="all-vehical-modal--body">
              <span className="all-vehical-modal--body__item">
                Kia Rio 2021 | ULK-123-56 <DeleteForeverIcon onClick={() => {setvehicleModal(true);setAllVehicle(false)}}/>
              </span>
              <span className="all-vehical-modal--body__item">
                Kia Rio 2021 | ULK-123-56 <DeleteForeverIcon onClick={() =>  {setvehicleModal(true);setAllVehicle(false)}}/>
              </span>
              <span className="all-vehical-modal--body__item">
                Kia Rio 2021 | ULK-123-56 <DeleteForeverIcon onClick={() =>  {setvehicleModal(true);setAllVehicle(false)}}/>
              </span>
              <span className="all-vehical-modal--body__item">
                Kia Rio 2021 | ULK-123-56 <DeleteForeverIcon onClick={() =>  {setvehicleModal(true);setAllVehicle(false)}}/>
              </span>
              <span className="all-vehical-modal--body__item">
                Kia Rio 2021 | ULK-123-56 <DeleteForeverIcon onClick={() =>  {setvehicleModal(true);setAllVehicle(false)}}/>
              </span>
            </div>
            <span className="all-vehical-modal">ADD VEHICLE</span>
            <span className="all-vehical-modal__search">
              <input className="all-vehical-modal__search--input"></input>
              <SearchIcon />
            </span>
            <div className="all-vehical-modal--body">
              <span className="all-vehical-modal--body__add">
                Kia Rio 2021 | ULK-123-56 <CancelIcon />
              </span>
              <span className="all-vehical-modal--body__add">
                Kia Rio 2021 | ULK-123-56 <CancelIcon />
              </span>
              <span className="all-vehical-modal--body__add">
                Kia Rio 2021 | ULK-123-56 <CancelIcon />
              </span>
              <span className="all-vehical-modal--body__add">
                Kia Rio 2021 | ULK-123-56 <CancelIcon />
              </span>
              <span className="all-vehical-modal--body__add">
                Kia Rio 2021 | ULK-123-56 <CancelIcon />
              </span>
            </div>
            <div className="btn-div">
              <button
                className="button-sec btn-cancel"
                style={{ color: "red" }}
                onClick={props.onHide}
              >
                CANCEL
              </button>
              <button className="button-sec btn-confirm">
                <b>APPLY CHANGES</b>
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
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
              style={{ color: "#000", fontSize: "12px", fontWeight: 400 }}
            >
              Please. confirm the action the remove the role <b>CEO</b> for the
              employee <b>Luis Cornejo</b>. The employee must have a role so we
              will assign <b>NONE</b> meanwhile you assign his new role.
            </span>
            <div className="btn-div">
              <button
                className="button-sec btn-cancel"
                style={{ color: "red" }}
                onClick={props.onHide}
              >
                CANCEL
              </button>
              <button className="button-sec btn-confirm">CONFIRM</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
  function VehicleRemove(props) {
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
          <span className="main-modal-heading">REMOVE VEHICLE</span>
          <div className="unlink-modal-body">
            <span
              className="modal-desc-text"
              style={{ color: "#000", fontSize: "14px" }}
            >
              Are you sure that would you like to remove to the vehicle Kia | RIO
              - ULK-232-2C?
            </span>
            <div className="btn-div">
              <button
                className="button-sec btn-cancel"
                style={{ color: "red" }}
                onClick={props.onHide}
              >
                CANCEL
              </button>
              <button className="button-sec btn-confirm">CONFIRM</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }

  return (
    <>
      <Grid container sx={{ my: "30px" }}>
        <Grid item xs={12}>
          <span className="add-new-employe__heading">
            <ArrowBackIcon />
            VEHICLE CONTRACT DETAIL
          </span>
        </Grid>
      </Grid>
      <div className="emloyee-contract-detail-sec">
        <Grid container>
          <Grid item xs={12}>
            <span className="viewcard-container__status">
              Active <FiberManualRecordIcon />
            </span>
            {/* <span className="viewcard-container__status employe-status-documents">VALIDATING DOCUMENTS <FiberManualRecordIcon/></span>
            <span className="viewcard-container__status employe-status-Vacation">VACATIONS <FiberManualRecordIcon/></span> */}
          </Grid>
        </Grid>
        <div className="emloyee-contract-detail">
          <div className="emloyee-contract-detail-first">
            <span>
              <spna className="contract-card__heading">Contracts</spna>
              <spna className="contract-card__no"> #102</spna>
            </span>
            <span>
              <span className="contract-card__name">
                Luis Enrique Cornejo Arreola
              </span>
              <span className="contract-card__contractor">Contractor</span>
            </span>
          </div>
          <div
            className="emloyee-contract-detail-second"
            style={{
              borderRight: "2px solid green",
              borderLeft: "2px solid green",
            }}
          >
            <span className="contract-card__title">Start contract</span>
            <span className="contract-card__title">End contract</span>
            <span className="contract-card__title">Corporate</span>
            <span className="contract-card__title">No Employee</span>
            <span className="contract-card__title">Vehicles</span>
          </div>
          <div className="emloyee-contract-detail-third">
            <span className="contract-card__desc">25/05/2021</span>
            <span className="contract-card__desc">05/02/2022</span>
            <span className="contract-card__desc">IBL Corporate</span>
            <span className="contract-card__desc">12/43</span>
            <span className="contract-card__desc">4</span>
          </div>
        </div>
      </div>
      <div className="all-emloyee-contract">
        <span className="user-contract-detail">EMPLOYEE</span>
        <span
          className="ms-5"
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => setAllUser(true)}
        >
          {" "}
          add / remove employee +
        </span>
        <AllUser show={allUser} onHide={() => setAllUser(false)} />

        <Grid container spacing={3}>
          <Grid item xs={3}>
            <EmployeCard />
          </Grid>
          <Grid item xs={3}>
            <EmployeCard />
          </Grid>
        </Grid>
      </div>
      <div className="all-vehicle-contract">
        <span className="user-contract-detail">VEHICLES</span>
        <span
          className="ms-5"
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => setAllVehicle(true)}
        >
          {" "}
          add / remove vehicle +
        </span>

        <Grid container spacing={3}>
          <Grid item xs={3}>
            <ViewCard />
          </Grid>
        </Grid>
      </div>
      <AllVehicle show={allVehicle} onHide={() => setAllVehicle(false)} />
      <VehicleRemove
        show={vehicleModal}
        onHide={() => setvehicleModal(false)}
      />
      <UserRemove
        show={userRemoveModal}
        onHide={() => setuserRemoveModal(false)}
      />
    </>
  );
};

export default UserContractDetail;

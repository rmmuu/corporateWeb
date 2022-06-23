import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import photo from "../../../assets/images/as.jpg";
import SaveIcon from "@mui/icons-material/Save";
import GetAppIcon from "@mui/icons-material/GetApp";
import { Modal } from "react-bootstrap";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

import cloudsvg from "../../../assets/images/cloud.svg";
import userImage from "../../../assets/images/employee-4.png";
const EmployeContractDetail = () => {
  let navigate = useNavigate();
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
          <Modal.Header>
    
          <Modal.Title class="mt-2 text-center add_workshiftmodal_title d-flex justify-content-center flex-grow-1">
            <h4 className="text-center"><b>UPLOAD FILE</b></h4>
          </Modal.Title>
      
      </Modal.Header>
      <Modal.Body>
        <div className="row " style={{ width: "100%" }}>
          <div style={{ width: "100%", margin: "15px" }}>
            <div className="updata_img_m">
              <label htmlFor="file-input" className="dottedborderbox">
                <img
                  src={cloudsvg}
                  alt="submitupload"
                  className="submitupload"
                />
                <input type="file" id="file-input" accept="image/*, video/*" />
                <p>
                  drag {"&"} drop <br /> your image <br /> size 20 mb max
                </p>
              </label>
            </div>
            <div className="col" style={{ width: "100%" }}>
              <img src={userImage} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </Modal.Body>
          <div>
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
  return (
    <>
      <Grid container sx={{ my: "30px" }}>
        <Grid item xs={12}>
          <span className="add-new-employe__heading">
            <ArrowBackIcon /> EMPLOYEE CONTRACT DETAIL
          </span>
        </Grid>
      </Grid>
      <div className="employe-contract-detail">
        <div className="employe-contract-detail__employe">
          <img src="" className="ecd__img" alt="user pic" />
          <span className="viewcard-container__status">
            Active <FiberManualRecordIcon />
          </span>
          <div className="ecd" style={{ marginTop: "70px" }}>
            <span className="ecd__title">NAME</span>
            <span className="ecd__desc">Luis Enrique Cornejo Arreola</span>
          </div>
          <div className="ecd">
            <span className="ecd__title">EMAIL</span>
            <span className="ecd__desc">lcornejo@ibl.mx</span>
          </div>
          <div className="ecd">
            <span className="ecd__title">PHONE NUMBER</span>
            <span className="ecd__desc">4427065906</span>
          </div>
          <div className="ecd">
            <span className="ecd__title">GENDR</span>
            <span className="ecd__desc">MALE</span>
          </div>
        </div>
        <div className="employe-contract-detail__docs">
          <div className="add-new-employe__document">
          <div className="add-new-employe">
        <button className="edit-profile-save-btn"  onClick={()=>( navigate(`/dashboard/edit-profile`))} >
          UPDATE INFORMATION{" "} 
          <span>
            <SaveIcon />
          </span>
        </button>
        </div>
            <span className="add-new-employe__document__heading">
              DOCUMENTS
            </span>
            <Grid container sx={{ my: "10px" }}>
              <Grid item xs={8}>
                <span className="add-new-employe__title">FILE NAME</span>
              </Grid>
              <Grid item xs={2}>
                <span className="add-new-employe__type">FILE</span>
              </Grid>
              <Grid item xs={2}>
                <span className="add-new-employe__type">Approve</span>
              </Grid>
            </Grid>
            <div className="add-new-employe__document--detail">
              <Grid container spacing={3}>
                <Grid item xs={5}>
                  <div className="name">
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="COAL970408HMCRRS00"
                      label="CURP"
                      id="NAME"
                      //   value={}
                      //   onChange={(e) => setName(e.target.value)}
                      InputLabelProps={{
                        style: {
                          fontSize: "12px",
                          fontWeight: 600,
                          background: "#ffffff",
                          padding: "0px 8px 0px 8px",
                          letterSpacing: "1px",
                        },
                      }} // font size of input label
                      inputProps={{
                        sx: {
                          border: "none",
                          outline: "none",
                          fontSize: "12px",
                          letterSpacing: "0px",
                          color: "#707070",
                          "&::placeholder": {
                            color: "#707070",
                            fontSize: "8px",
                          },
                        },
                      }}
                    />
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <button className="add-new-employe__attach" onClick={() => setAllUser(true)}>
                    ATTACH FILE
                    <AttachFileIcon />
                  </button>
                </Grid>
                <Grid item xs={2}>
                  <button className="add-new-employe__filename">
                    NO FILE
                    <GetAppIcon />
                  </button>
                </Grid>
                <Grid item xs={2}>
                  <span
                    style={{
                      display: "block",
                      textAlign: "end",
                      color: "red",
                      paddingRight: "13px",
                    }}
                  >
                    <ClearIcon />
                  </span>
                </Grid>
              </Grid>
            </div>
            <div className="add-new-employe__document--detail">
              <Grid container spacing={3}>
                <Grid item xs={5}>
                  <div className="name">
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="COAL970408HMCRRS00"
                      label="CURP"
                      id="NAME"
                      //   value={}
                      //   onChange={(e) => setName(e.target.value)}
                      InputLabelProps={{
                        style: {
                          fontSize: "12px",
                          fontWeight: 600,
                          background: "#ffffff",
                          padding: "0px 8px 0px 8px",
                          letterSpacing: "1px",
                        },
                      }} // font size of input label
                      inputProps={{
                        sx: {
                          border: "none",
                          outline: "none",
                          fontSize: "12px",
                          letterSpacing: "0px",
                          color: "#707070",
                          "&::placeholder": {
                            color: "#707070",
                            fontSize: "8px",
                          },
                        },
                      }}
                    />
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <button className="add-new-employe__attach" onClick={() => setAllUser(true)}>
                    ATTACH FILE
                    <AttachFileIcon />
                  </button>
                </Grid>
                <Grid item xs={2}>
                  <button className="add-new-employe__filename">
                    NO FILE
                    <GetAppIcon />
                  </button>
                </Grid>
                <Grid item xs={2}>
                  <span
                    style={{
                      display: "block",
                      textAlign: "end",
                      color: "green",
                      paddingRight: "13px",
                    }}
                  >
                    <CheckIcon fontSize="medium" />
                  </span>
                </Grid>
              </Grid>
            </div>
            <div className="add-new-employe__document--detail">
              <Grid container spacing={3}>
                <Grid item xs={5}>
                  <span className="add-new-employe__filelabel">
                    <b>CONSTANCIA DC3 - A</b>
                  </span>
                  <span
                    className="add-new-employe__filelabel"
                    style={{
                      fontSize: "10px",
                      fontWeight: "400",
                      letterSpacing: "1px",
                      marginTop: "-4px",
                      textDecoration: "underline",
                    }}
                  >
                    DOWNLOAD FORM TO FILL IN IT
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <button className="add-new-employe__attach" onClick={() => setAllUser(true)}>
                    ATTACH FILE
                    <AttachFileIcon />
                  </button>
                </Grid>
                <Grid item xs={2}>
                  <button className="add-new-employe__filename">
                    NO FILE
                    <GetAppIcon />
                  </button>
                </Grid>
                <Grid item xs={2}>
                  <span
                    style={{
                      display: "block",
                      textAlign: "end",
                      color: "red",
                      paddingRight: "13px",
                    }}
                  >
                    <ClearIcon />
                  </span>
                </Grid>
              </Grid>
            </div>
            <div className="add-new-employe__document--detail">
              <Grid container spacing={3}>
                <Grid item xs={5}>
                  <span className="add-new-employe__filelabel">
                    <b>CONSTANCIA DC3 - A</b>
                  </span>
                  <span
                    className="add-new-employe__filelabel"
                    style={{
                      fontSize: "10px",
                      fontWeight: "400",
                      letterSpacing: "1px",
                      marginTop: "-4px",
                      textDecoration: "underline",
                    }}
                  >
                    DOWNLOAD FORM TO FILL IN IT
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <button className="add-new-employe__attach" onClick={() => setAllUser(true)}>
                    ATTACH FILE
                    <AttachFileIcon />
                  </button>
                </Grid>
                <Grid item xs={2}>
                  <button className="add-new-employe__filename">
                    NO FILE
                    <GetAppIcon />
                  </button>
                </Grid>
                <Grid item xs={2}>
                  <span
                    style={{
                      display: "block",
                      textAlign: "end",
                      color: "green",
                      paddingRight: "13px",
                    }}
                  >
                    <CheckIcon fontSize="medium" />
                  </span>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      <AllUser show={allUser} onHide={() => setAllUser(false)} />

      </div>
    </>
  );
};

export default EmployeContractDetail;

import React, { useState } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import photo from "../../../assets/images/as.jpg";
import SaveIcon from "@mui/icons-material/Save";
import GetAppIcon from "@mui/icons-material/GetApp";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Box } from "@mui/system";
import cloudsvg from "../../../assets/images/cloud.svg";
import userImage from "../../../assets/images/employee-4.png";

const AddNewEmploye = () => {
  const [name, setName] = useState("");
  const [employee, setEmployee] = useState();
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
    <div className="add-new-employe">
      <Grid container sx={{ my: "30px" }}>
        <Grid item xs={5}>
          <span className="add-new-employe__heading">
            <ArrowBackIcon /> CREATE EMPLOYEES
          </span>
        </Grid>
      </Grid>
      <div className="add-new-employe__detail">
        <div className="add-new-employe__user">
          <div className="edit-profile">
            {/* <button className="edit-profile-save-btn">
              SAVE CHANGES{" "}
              <span>
                <SaveIcon />
              </span>
            </button> */}
            <div className="edit-profile--img-container" onClick={() => setAllUser(true)}>
              <img src={photo} alt="user image" />
              <span className="modal-file-upload"></span>
            </div>
            <div className="name">
              <Grid container spacing={2}>
                <Grid item xs={12} sx={{ position: "relative" }}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Luis Enrique Cornejo Arreola"
                    label="NAME"
                    id="NAME"
                    //   value={}
                    //   onChange={(e) => setName(e.target.value)}
                    InputLabelProps={{
                      style: {
                        fontSize: "10px",
                        fontWeight: 600,
                        background: "#ffffff",
                        padding: "0px 8px 0px 8px",
                      },
                    }} // font size of input label
                    inputProps={{
                      sx: {
                        border: "none",
                        outline: "none",
                        fontSize: "10px",
                        letterSpacing: "0px",
                        color: "#707070",
                        "&::placeholder": {
                          color: "#707070",
                          fontSize: "8px",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ position: "relative" }}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="lcornejo@ibl.mx"
                    label="USERNAME"
                    id="NAME"
                    //   value={}
                    //   onChange={(e) => setName(e.target.value)}
                    InputLabelProps={{
                      style: {
                        fontSize: "10px",
                        fontWeight: 600,
                        background: "#ffffff",
                        padding: "0px 8px 0px 8px",
                      },
                    }} // font size of input label
                    inputProps={{
                      sx: {
                        border: "none",
                        outline: "none",
                        fontSize: "10px",
                        letterSpacing: "0px",
                        color: "#707070",
                        "&::placeholder": {
                          color: "#707070",
                          fontSize: "8px",
                        },
                      },
                    }}
                  />
                  <span className="input-icons">
                    <MailOutlineIcon />
                  </span>
                </Grid>
                <Grid item xs={12} sx={{ position: "relative" }}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="4427065906"
                    label="PHONE NUMBER"
                    id="NAME"
                    //   value={}
                    //   onChange={(e) => setName(e.target.value)}
                    InputLabelProps={{
                      style: {
                        fontSize: "10px",
                        fontWeight: 600,
                        background: "#ffffff",
                        padding: "0px 8px 0px 8px",
                      },
                    }} // font size of input label
                    inputProps={{
                      sx: {
                        border: "none",
                        outline: "none",
                        fontSize: "10px",
                        letterSpacing: "0px",
                        color: "#707070",
                        "&::placeholder": {
                          color: "#707070",
                          fontSize: "8px",
                        },
                      },
                    }}
                  />
                  <span className="input-icons">
                    <PhoneIphoneIcon />
                  </span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="MAle"
                    label="GENDER"
                    id="NAME"
                    //   value={}
                    //   onChange={(e) => setName(e.target.value)}
                    InputLabelProps={{
                      style: {
                        fontSize: "10px",
                        fontWeight: 600,
                        background: "#ffffff",
                        padding: "0px 8px 0px 8px",
                      },
                    }} // font size of input label
                    inputProps={{
                      sx: {
                        border: "none",
                        outline: "none",
                        fontSize: "10px",
                        letterSpacing: "0px",
                        color: "#707070",
                        "&::placeholder": {
                          color: "#707070",
                          fontSize: "8px",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ mt: "6px" }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        STATUS
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue="employe"
                        value={employee}
                        label="EMPLOYEE"
                        onChange={(e) => setEmployee(e.target.value)}
                        sx={{
                          fontSize: "10px",
                          padding: "3px 3px 3px 10px",
                        }}
                      >
                        <MenuItem
                          value={10}
                          sx={{
                            fontSize: "10px",
                          }}
                        >
                          Active
                        </MenuItem>
                        <MenuItem
                          value={20}
                          sx={{
                            fontSize: "10px",
                          }}
                        >
                          In-active
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className="add-new-employe__document">
        <button className="edit-profile-save-btn"   onClick={()=>( navigate(`/dashboard/search-employe`))}>
          CREATE EMPLOYEE{" "}
          <span>
            <SaveIcon />
          </span>
        </button>
          <span className="add-new-employe__document__heading">DOCUMENTS</span>
          <Grid container sx={{ my: "10px" }}>
            <Grid item xs={6}>
              <span className="add-new-employe__title">FILE NAME</span>
            </Grid>
            <Grid item xs={6}>
              <span className="add-new-employe__type">FILE</span>
            </Grid>
          </Grid>
          <div className="add-new-employe__document--detail">
            <Grid container spacing={3}>
              <Grid item xs={6}>
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
              <Grid item xs={3}>
                <button className="add-new-employe__filename">
                  NO FILE
                  <GetAppIcon />
                </button>
              </Grid>
            </Grid>
          </div>
          <div className="add-new-employe__document--detail">
            <Grid container spacing={3}>
              <Grid item xs={6}>
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
              <Grid item xs={3}>
                <button className="add-new-employe__filename">
                  NO FILE
                  <GetAppIcon />
                </button>
              </Grid>
            </Grid>
          </div>
          <div className="add-new-employe__document--detail">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <span className="add-new-employe__filelabel">
                  <b>CONSTANCIA DC3 - A</b>
                </span>
                <span className="add-new-employe__filelabel" style={{fontSize:"10px",fontWeight:"400",letterSpacing:"1px",marginTop:"-4px",textDecoration:"underline"}}>
                  DOWNLOAD FORM TO FILL IN IT
                </span>
              </Grid>
              <Grid item xs={3}>
                <button className="add-new-employe__attach" onClick={() => setAllUser(true)}>
                  ATTACH FILE
                  <AttachFileIcon />
                </button>
              </Grid>
              <Grid item xs={3}>
                <button className="add-new-employe__filename">
                  NO FILE
                  <GetAppIcon />
                </button>
              </Grid>
            </Grid>
          </div>
          <div className="add-new-employe__document--detail">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <span className="add-new-employe__filelabel">
                  <b>CONSTANCIA DC3 - B</b>
                </span>
                <span className="add-new-employe__filelabel" style={{fontSize:"10px",fontWeight:"400",letterSpacing:"1px",marginTop:"-4px",textDecoration:"underline"}}>
                  DOWNLOAD FORM TO FILL IN IT
                </span>
              </Grid>
              <Grid item xs={3}>
                <button className="add-new-employe__attach" onClick={() => setAllUser(true)}>
                  ATTACH FILE
                  <AttachFileIcon />
                </button>
              </Grid>
              <Grid item xs={3}>
                <button className="add-new-employe__filename">
                  NO FILE
                  <GetAppIcon />
                </button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <AllUser show={allUser} onHide={() => setAllUser(false)} />
    </div>
  );
};

export default AddNewEmploye;

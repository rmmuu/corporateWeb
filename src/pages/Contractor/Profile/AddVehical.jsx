import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Modal } from "react-bootstrap";

import photo from "../../../assets/images/as.jpg";
import SaveIcon from "@mui/icons-material/Save";
import { useNavigate } from "react-router-dom";
import cloudsvg from "../../../assets/images/cloud.svg";
import userImage from "../../../assets/images/employee-4.png";

const AddVehical = () => {
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const [employee, setEmployee] = useState();
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
      <div className="edit-profile">
        <button
          className="edit-profile-save-btn"
          onClick={() => navigate(`/dashboard/search-vehicle`)}
        >
          CREATE VEHICLE{" "}
          <span>
            <SaveIcon />
          </span>
        </button>
        <div className="edit-profile--img-container" onClick={() => setAllUser(true)}>
          <img src={photo} alt="user image" />
          <span className="modal-file-upload"></span>
        </div>
        <div className="name">
          <Grid container spacing={2}>
            <Grid item xs={6} sx={{ position: "relative" }}>
              <TextField
                fullWidth
                size="small"
                placeholder="KIA"
                label="BRAND"
                id="brand"
                //   value={}
                //   onChange={(e) => setName(e.target.value)}
                InputLabelProps={{
                  style: {
                    fontSize: "12px",
                    fontWeight: 600,
                    background: "#ffffff",
                    padding: "0px 8px 0px 8px",
                  },
                }} // font size of input label
                inputProps={{
                  sx: {
                    border: "none",
                    outline: "none",
                    fontSize: "14px",
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
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                placeholder="RIO"
                label="SUB-BRAND"
                id="subbrand"
                //   value={}
                //   onChange={(e) => setName(e.target.value)}
                InputLabelProps={{
                  style: {
                    fontSize: "12px",
                    fontWeight: 600,
                    background: "#ffffff",
                    padding: "0px 8px 0px 8px",
                  },
                }} // font size of input label
                inputProps={{
                  sx: {
                    border: "none",
                    outline: "none",
                    fontSize: "14px",
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
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                placeholder="Electic Blue"
                label="COLOR"
                id="color"
                //   value={}
                //   onChange={(e) => setName(e.target.value)}
                InputLabelProps={{
                  style: {
                    fontSize: "12px",
                    fontWeight: 600,
                    background: "#ffffff",
                    padding: "0px 8px 0px 8px",
                  },
                }} // font size of input label
                inputProps={{
                  sx: {
                    border: "none",
                    outline: "none",
                    fontSize: "14px",
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
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                placeholder="2018"
                label="MODEL"
                id="model"
                //   value={}
                //   onChange={(e) => setName(e.target.value)}
                InputLabelProps={{
                  style: {
                    fontSize: "12px",
                    fontWeight: 600,
                    background: "#ffffff",
                    padding: "0px 8px 0px 8px",
                  },
                }} // font size of input label
                inputProps={{
                  sx: {
                    border: "none",
                    outline: "none",
                    fontSize: "14px",
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
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                placeholder="SS-568-45D"
                label="PLATES"
                id="plates"
                //   value={}
                //   onChange={(e) => setName(e.target.value)}
                InputLabelProps={{
                  style: {
                    fontSize: "12px",
                    fontWeight: 600,
                    background: "#ffffff",
                    padding: "0px 8px 0px 8px",
                  },
                }} // font size of input label
                inputProps={{
                  sx: {
                    border: "none",
                    outline: "none",
                    fontSize: "14px",
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
            <Grid item xs={6}>
              <Box sx={{ mt: "6px" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">STATUS</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue="employe"
                    value={employee}
                    label="VEHICLE TYPE"
                    onChange={(e) => setEmployee(e.target.value)}
                    sx={{
                      fontSize: "12px",
                      padding: "3px 3px 3px 10px",
                    }}
                  >
                    <MenuItem
                      value={10}
                      sx={{
                        fontSize: "12px",
                      }}
                    >
                      Sedan
                    </MenuItem>
                    <MenuItem
                      value={20}
                      sx={{
                        fontSize: "12px",
                      }}
                    >
                      In-active
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">STATUS</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue="STATUS"
                    value={employee}
                    label="EMPLOYEE"
                    onChange={(e) => setEmployee(e.target.value)}
                    sx={{
                      fontSize: "12px",
                      padding: "3px 3px 3px 10px",
                    }}
                  >
                    <MenuItem
                      value={10}
                      sx={{
                        fontSize: "12px",
                      }}
                    >
                      Active
                    </MenuItem>
                    <MenuItem
                      value={20}
                      sx={{
                        fontSize: "12px",
                      }}
                    >
                      In-active
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
      <AllUser show={allUser} onHide={() => setAllUser(false)} />

        </div>
      </div>
    </>
  );
};





export default AddVehical;

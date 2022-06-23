import { Grid, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { setDate } from "date-fns";
import { Modal } from "react-bootstrap";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import photo from "../../../assets/images/as.jpg"

import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
const Profile = () => {
  const [date, setdate] = useState("");
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    let todaydate = new Date();
    setdate(todaydate.getDate());
  });

  function MyVerticallyCenteredModal(props) {
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
          <span className="main-modal-heading">UNLINK DEVICE</span>
          <div className="unlink-modal-body">
            <span className="modal-desc-text">
              Do you want to unpair the device? In order to be able to log in
              other.
            </span>
            <span className="modal-desc-text">
              confirm your password and then confirm the operation.
            </span>
  
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ marginTop: "20px" }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="UKLNNSL4575SLSKA"
                  label="LINK DEVICE"
                  id="linkDevice"
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
              <Grid
                item
                xs={12}
                sx={{ position: "relative", marginBottom: "10px" }}
              >
                <TextField
                  fullWidth
                  type="password"
                  size="small"
                  placeholder="Password"
                  label="PASSWORD"
                  id="password"
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
                  <VisibilityIcon />
                </span>
              </Grid>
            </Grid>
            <div className="btn-div">
              <button className="button-sec btn-cancel" onClick={props.onHide}>
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
    <div className="profile-sec">
      <img src={photo} className="profile-sec__photo" />
      <span className="profile-sec__heading" style={{margin:"70px 0 20px 0"}}>PERSONAL DATA</span>

      <div className="name">
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ position: "relative" }}>
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
          <Grid item xs={6} sx={{ position: "relative" }}>
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
            <span className="input-icons"><MailOutlineIcon/></span>
          </Grid>
          <Grid item xs={6} sx={{ position: "relative" }}>
            <TextField
              fullWidth
              type="password"
              size="small"
              placeholder="Password"
              label="PASSWORD"
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
            <span className="input-icons"><VisibilityIcon/></span>
          </Grid>
          <Grid item xs={6} sx={{ position: "relative" }}>
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
            <span className="input-icons"><PhoneIphoneIcon/></span>
          </Grid>
          <Grid item xs={6} sx={{ position: "relative" }}>
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
          <Grid item xs={6} sx={{ position: "relative" }}>
          <div className="dateTimeInput">
                <div className="dateTimeInput-container">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack>
                          <DesktopDatePicker
                            label="FECHA"
                            inputFormat="dd/MM/yyyy"
                            // value={date}
                            textFieldStyle={{ width: "100%" }}
                            onChange={setDate}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </Stack>
                      </LocalizationProvider>
                </div>
              </div>
          </Grid> 
          <Grid item xs={6} sx={{ position: "relative" }}>
            <TextField
              fullWidth
              size="small"
              placeholder="UKLNNSL4575SLSKA"
              label="LINKED DEVICE"
              id="NAME"
              onClick={() => setModalShow(true)}
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
            <span className="input-icons"><DeleteIcon/></span>
          </Grid>
        </Grid>
      </div>
      <span className="profile-sec__heading" style={{margin:"20px 0 20px 0"}}>EXTRA DATA </span>
      <div className="name">
        <Grid container spacing={2}>
        <Grid item xs={6} sx={{ position: "relative"}}>
            <TextField
              fullWidth
              size="small"
              placeholder="ADDRESS 1"
              label="ADDRESS 1"
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
          <Grid item xs={6} sx={{ position: "relative" }}>
            <TextField
              fullWidth
              size="small"
              placeholder="ADDRESS 2"
              label="ADDRESS 2"
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
          <Grid item xs={6} sx={{ position: "relative" }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Querétaro"
              label="STATE"
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
          </Grid>{" "}
          <Grid item xs={6} sx={{ position: "relative" }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Querétaro"
              label="COUNTRY"
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
          </Grid>{" "}
          <Grid item xs={6} sx={{ position: "relative" }}>
            <TextField
              fullWidth
              size="small"
              placeholder="76118"
              label="POST CODE"
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
          </Grid>{" "}
          <Grid item xs={6} sx={{ position: "relative" }}>
            <TextField
              fullWidth
              size="small"
              placeholder="4425625658"
              label="HOME NUMBER"
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
          </Grid>{" "}
          <Grid item xs={6} sx={{ position: "relative" }}>
            <TextField
              fullWidth
              size="small"
              placeholder="لويس إنريكي كورنيجو أريولا"
              label="ARABIC NAME "
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
          <Grid item xs={6} sx={{ position: "relative" }}>
            <TextField
              fullWidth
              size="small"
              placeholder="PHONE NUMBER"
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
          </Grid>
          <Grid item xs={6} sx={{ position: "relative" }}>
            <TextField
              fullWidth
              size="small"
              placeholder="A+"
              label="Blood Type"
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
        </Grid>
        <div className="btn-container">
        <button className="submit-primary-btn">SAVE CHANGES <span><SaveIcon/></span></button>
        </div>
      </div>
       <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Profile;

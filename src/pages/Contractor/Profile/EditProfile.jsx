import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import photo from "../../../assets/images/as.jpg";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Box } from "@mui/system";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [employee, setEmployee] = useState();
  let navigate = useNavigate();

  return (
    <>
     <Grid container sx={{ my: "30px" }}>
        <Grid item xs={12}>
          <span className="add-new-employe__heading">
            <ArrowBackIcon /> EMPLOYEE CONTRACT DETAIL
          </span>
        </Grid>
      </Grid>
      <div className="edit-profile">
        <button className="edit-profile-save-btn" onClick={()=>( navigate(`/dashboard/employee-contract-detail`))} >
          SAVE CHANGES{" "}
          <span>
            <SaveIcon />
          </span>
        </button>
        <div className="edit-profile--img-container">
          <img src={photo} alt="user image" />
          <div class="avatar-edit">
            <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
            <label for="imageUpload"></label>
          </div>
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
                  <InputLabel id="demo-simple-select-label">STATUS</InputLabel>
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
    </>
  );
};

export default EditProfile;

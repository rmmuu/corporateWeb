import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";
import personPng from "../../assets/images/person.png";
import file from "../../assets/images/file.png";
import DownloadIcon from "@mui/icons-material/Download";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { useLocation } from "react-router-dom";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";

const CreateEmployeeProvider = ({ employeeDetailsFlag, approveDocumentFlag }) => {
  const [filePresent, setfilePresent] = useState(true);
  const [fileIdPresent, setfileIdPresent] = useState(true);
  const [employeeDetails, setEmployeeDetails] = useState(false);
  const [approveDocument, setapproveDocument] = useState(false);
  console.log({ employeeDetailsFlag }, { approveDocumentFlag });
  useEffect(() => {
    setEmployeeDetails(employeeDetailsFlag);
    setapproveDocument(approveDocumentFlag);
  }, []);

  return (
    <>
      <div className="head">
        <div className="headLeft">
          <h2>
            <Link to="/dashboard/provider/providers-outlet">
              <ArrowBackIcon
                style={{
                  color: "#146F62",
                  fontSize: "30px",
                  marginRight: "30px",
                }}
              />
            </Link>
            CREATE EMPLOYEE
            {/* {employeeDetails && "Employee PROVIDER Detail"} */}
            {/* {approveDocument && "APPROVE DOCUMENTS"} */}
          </h2>


        </div>
      </div>
      <div className="row employee_provider_detail">

        <div className="update_btn">
          <button>CREATE EMPLOYEE   icon</button>
        </div>
        <div className="col-md-4 __userData">
          <img src={personPng} className="__userImage" />
          <div className="__form_create_employee">
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ position: "relative" }}>
                <TextField
                  focused
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
              <Grid item xs={12} sx={{ position: "relative", marginTop: '1rem' }}>
                <TextField
                  focused
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
              <Grid item xs={12} sx={{ position: "relative", marginTop: '1rem' }}>
                <TextField
                  focused
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

              <Grid item xs={12} sx={{ marginTop: '1rem' }}>
                <Box sx={{ mt: "6px" }} >
                  <FormControl fullWidth>

                    <InputLabel id="demo-simple-select-label" >GENDER</InputLabel >
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      defaultValue="employe"
                      // value={employee}
                      label="GENDER"

                      // onChange={(e) => setEmployee(e.target.value)}
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
                        Male
                      </MenuItem>
                      <MenuItem
                        value={20}
                        sx={{
                          fontSize: "10px",
                        }}
                      >
                        Female
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="col-md-7 employee_files_details">
          <div
            className="__header"
            style={{ paddingRight: approveDocument === false && "40px" }}
          >
            <p style={{ width: approveDocument && "40%" }}>FileName</p>
            <p>File</p>
            {approveDocument && <p>Options</p>}
          </div>
          {[1, 2, 3, 4, 5].map((item) => (
            <div className="__body">
              <div className="__file">
                <div className="__name">
                  <p>CURP</p>
                  {fileIdPresent && <span>COAL970408HMCRRS00</span>}
                </div>
                {filePresent ? (
                  <div className="__file_icon">
                    <img src={file} />
                    <div style={{ paddingLeft: "10px" }}>
                      <p>nss_leca-pdf</p>
                      <span>14-05-2021 15:33</span>
                    </div>
                    <DownloadIcon className="download_icon" />
                  </div>
                ) : (
                  <p className="noFile">NO FILE</p>
                )}
                {approveDocument && <MoreHorizIcon />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CreateEmployeeProvider;

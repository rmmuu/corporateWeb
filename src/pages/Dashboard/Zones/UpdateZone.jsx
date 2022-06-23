import React, { useState } from "react";

import saveregular from "../../../assets/images/save-regular.svg";

// Material ui
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Switch from '@mui/material/Switch';

import TimePicker from "@mui/lab/TimePicker";
import { MenuItem } from "@mui/material";
const AddRoomUpdateData = (props) => {
  // Material Ui Inputs Js
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));

  const handleChangee = (newValue) => {
    setValue(newValue);
  };

  const accessType = [
    {
      value: '1',
      label: 'Arman'
    },
    {
      value: '2',
      label: 'ALI'
    }
  ]

  const [checked, setChecked] = React.useState(true);

  const handleChangeSwitch = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <div className=" ">
        {/* update Zone Section header  Start*/}
        <div className="update_zone_header">
          <div className="update_zone_header_Left">
            <a href="/buildingdetails">
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </a>
            <h2>UPDATE ZONE </h2>
          </div>
          <div className="update_zone_header_right">
            <a href="/zones" >
              <button
                className="btn btn-primary"
              >
                UPDATE ZONE
                <img
                  src={saveregular}
                  // className="img-fluid"
                  style={{ marginLeft: "1.5rem" }}
                  alt=""
                />
              </button>
            </a>
          </div>
        </div>
        {/* update Zone Section header End */}

        {/* Add Room And Update Data Main Section Start */}
        <div className="container-fluid">
          <div className="zone_Data_info">
            <h1>DATA</h1>

            <div className="form_data_zone_info">
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  fontSize: "20px",
                  height: "50px",
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Coffe Shop"
                  label="ZONE NAME"
                  id="ZONE NAME"
                />
              </Box>
            </div>

            <div className="form_data_zone_select">
              <select class="form-select" aria-label="Default select example">
                <option selected>status</option>
                <option value="1">active</option>
                <option value="2">vications</option>
                <option value="3">non active</option>
              </select>
            </div>
            <div className="bottom_line"></div>
          </div>
        </div>

        {/* Aceess Device Section Start */}
        {/* <div className="container-fluid">
          <div className="addzone_accessdevice">
            <h2>
              ACCESS DEVICE
            </h2>
            <div>

              <input type="checkbox" />
              <span>(Has access device)</span>
            </div>
          </div>

          <div className="zone_update_access_device">
            <h4>DATA</h4>
            <div className="zone_update_access_device_form" >
              <div className="row">
                <div className="col-md-4">
                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { mt: 3, width: '31.8ch' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="ACCESS TYPE"
                      focused
                    // value={currency}
                    // onChange={handleChange}
                    >
                      {accessType.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}

                    </TextField>
                  </Box>
                </div>
                <div className="col-md-4">
                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { mt: 3, width: '31.8ch' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="ACCESS TYPE"
                      focused
                    // value={currency}
                    // onChange={handleChange}
                    >
                      {accessType.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}

                    </TextField>
                  </Box>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <TextField
                    id="fullWidth"
                    focused
                    fullWidth
                    label="ID"
                    defaultValue="zonedjfio"
                  // helperText="Some important text"
                  />
                </div>
                <div className="col-md-4">
                  <TextField
                    id="fullWidth"
                    focused
                    fullWidth
                    label="NAME"
                    defaultValue="zonedjfio"
                  // helperText="Some important text"
                  />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-8">
                  <TextField
                    id="fullWidth"
                    // size="large"
                    inputProps={{
                      style: {
                        height: "80px",
                        padding: '0 14px',
                      },
                    }}
                    focused
                    fullWidth
                    label="DESCRIPTION"
                    defaultValue=""
                  // helperText="Some important text"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { mt: 3, width: '31.8ch' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="STATUS"
                      focused
                    // value={currency}
                    // onChange={handleChange}
                    >
                      {accessType.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}

                    </TextField>
                  </Box>
                </div>
                <div className="col-md-4 mt-4">
                  <TextField
                    id="fullWidth"
                    focused
                    fullWidth
                    label="ACCESS TPYE"
                    defaultValue="zonedjfio"
                  // helperText="Some important text"
                  />
                </div>

              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <TextField
                    id="fullWidth"
                    focused
                    fullWidth
                    label="IP"
                    defaultValue="zonedjfio"
                  // helperText="Some important text"
                  />
                </div>
                <div className="col-md-4">
                  <TextField
                    id="fullWidth"
                    focused
                    fullWidth
                    label="MAC"
                    defaultValue="zonedjfio"
                  // helperText="Some important text"
                  />
                </div>
              </div>


              <div className="row mt-4">
                <div className="col-md-4">
                  <TextField
                    id="fullWidth"
                    type="password"
                    focused
                    fullWidth
                    label="PASSWORD"
                    defaultValue="zonedjfio"
                  // helperText="Some important text"
                  />
                </div>

              </div>



            </div>

          </div>

        </div> */}
        {/* reader section start */}
        {/* <div
          className="container-fluid"
          style={{ borderBottom: "3px dashed #146F62" }}
        >
          <div className="zone_update_reader">
            <h1>READERS</h1>
            <div className="row mt-3">
              <div className="col-md-4 ml-5 ">
                <input type="checkbox" />
                <label htmlFor="">SMART CARD</label>
              </div>
              <div className="col-md-4 ">
                <input type="checkbox" />
                <label htmlFor="">FACIAL RECOGNITION</label>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 ml-5">
                <input type="checkbox" />
                <label htmlFor="">QR</label>
              </div>
              <div className="col-md-4 ">
                <input type="checkbox" />
                <label htmlFor="">PIN</label>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 ml-5">
                <input type="checkbox" />
                <label htmlFor="">FINGERPRINT</label>
              </div>
              <div className="col-md-4 ">
                <input type="checkbox" />
                <label htmlFor="">BLUETOOTH</label>
              </div>
            </div>

          </div>
          
          <div className="zone_update_options">
            <h1>OPTIONS</h1>
            <div className="row mt-3">
              <div className="col-md-4 ml-5">
                <input type="checkbox" />
                <label htmlFor="">SHOW LOGOS</label>
              </div>

            </div>

            <div className="row">
              <div className="col-md-4 ml-5">
                <input type="checkbox" />
                <label htmlFor="">SHOW USER LIST</label>
              </div>

            </div>

            <div className="row">
              <div className="col-md-4 ml-5">
                <input type="checkbox" />
                <label htmlFor="">SYNCHORONIZE SELFIES</label>
              </div>

            </div>

          </div>
 
          <div className="zone_update_lock">
            <h1>LOCK</h1>
            <div className="row mt-3 mb-3">
              <div className="col-md-4 ml-5">
                <label htmlFor="" className="label_unlink">UNLINK</label>
                <Switch
                  checked={checked}
                  onChange={handleChangeSwitch}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                <label htmlFor="" className="label_link">LINK</label>
              </div>

            </div>
          </div>
        </div> */}
        {/* common area section start */}
        <div className="mt-4">
          <div className="common_area_zone_update">
            <h2>
              COMMON AREA
            </h2>
            <div>
              <input type="checkbox" />
              <span>(Is common area)</span>
            </div>
          </div>
          <div className="common_area_zone_upadate_sub_section">
            <h4>SERVICE HOURS</h4>
            <div className="row mt-3">
              <div className="col-md-4">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    renderInput={(props) => <TextField {...props} />}
                    ampm={false}
                    openTo="hours"
                    views={["hours", "minutes", "seconds"]}
                    inputFormat="HH:mm:ss"
                    mask="__:__:__"
                    label="FROM"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </LocalizationProvider>
              </div>
              <div className="col-md-4">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    renderInput={(props) => <TextField {...props} />}
                    ampmInClock
                    openTo="hours"
                    views={["hours", "minutes", "seconds"]}
                    inputFormat="mm:ss"
                    mask="__:__"
                    label="TO"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </LocalizationProvider>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoomUpdateData;

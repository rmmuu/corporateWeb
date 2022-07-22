import React, { useEffect, useState } from "react";

import saveregular from "../../../assets/images/save-regular.svg";

// Material ui
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';
import TimePicker from "@mui/lab/TimePicker";

import { useSelector } from "react-redux";
import { CreateCommonAreaZone, GetListStatusZone, GetListZoneMap, UpdateCommonAreaZone, UpdateZone } from "../../../reduxToolkit/EmployeeZones/EmployeeZonesApi";
import { useDispatch } from "react-redux";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
} from "@mui/material";
import { Link } from "react-router-dom";
const AddRoomUpdateData = (props) => {
  // Material Ui Inputs Js

  const [name, setName] = useState("");
  const [isStatus, setIsStatus] = useState("");
  const [formDate, setFormDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [isCommonArea, setIsCommonArea] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const { zoneDetailFatherAndChild } = useSelector(state => state.EmployeeZonesSlice)
  console.log(zoneDetailFatherAndChild)

  const { getListStatusZone } = useSelector(state => state.EmployeeZonesSlice)
  console.log(getListStatusZone)





  console.log(zoneDetailFatherAndChild?.commonArea?.fromTime)
  console.log(toDate)



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



  const updateZoneHandler = () => {
    const updateZoneFormData = {
      name,
      id: zoneDetailFatherAndChild?.id,
      status: {
        id: isStatus
      },
    }
    const commonAreaZoneFormData = {
      id: zoneDetailFatherAndChild?.commonArea?.id,
      zone: {
        id: zoneDetailFatherAndChild?.id
      },
      fromTime: formDate && formDate?.getHours() + ':' + formDate?.getMinutes() + ':' + formDate?.getSeconds(),
      toTime: toDate && toDate?.getHours() + ':' + toDate?.getMinutes() + ':' + toDate?.getSeconds(),
    }

    if (zoneDetailFatherAndChild?.commonArea == null) {
      dispatch(CreateCommonAreaZone(commonAreaZoneFormData))
    }
    else {
      dispatch(UpdateCommonAreaZone(commonAreaZoneFormData))
    }

    console.log(commonAreaZoneFormData)
    console.log(updateZoneFormData)
    dispatch(UpdateZone({ updateZoneFormData, navigate }))

  }


  useEffect(() => {
    dispatch(GetListStatusZone())

  }, [])



  useEffect(() => {

    setName(zoneDetailFatherAndChild?.name || "")
    setIsStatus(zoneDetailFatherAndChild?.status?.id || "")
    // setFormDate(zoneDetailFatherAndChild?.commonArea?.fromTime || "")
    // setToDate(zoneDetailFatherAndChild?.commonArea?.toTime || "")
    // setIsCommonArea(true)
  }, [])

  return (
    <div>
      <div className=" ">
        {/* update Zone Section header  Start*/}
        <div className="update_zone_header">
          <div className="update_zone_header_Left">
            <Link to="/dashboard/singlezonedetails">
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </Link>
            <h2>UPDATE ZONE </h2>
          </div>
          <div className="update_zone_header_right">
            <Link to={""}
            //  to="/dashboard/zones"
            >
              <button
                className="btn btn-primary"
                onClick={() => { updateZoneHandler() }}
              >
                UPDATE ZONE
                <img
                  src={saveregular}
                  // className="img-fluid"
                  style={{ marginLeft: "1.5rem" }}
                  alt=""
                />
              </button>
            </Link>
          </div>
        </div>
        {/* update Zone Section header End */}

        {/* Add Room And Update Data Main Section Start */}
        <div className="container-fluid" style={{ marginLeft: '7rem' }}>
          <div className="zone_Data_info" >
            <div className="heading_zone">
              <h1>DATA</h1>
              <div className="line"></div>
            </div>

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
                  focused
                  placeholder="Coffe Shop"
                  label="ZONE NAME"
                  id="ZONE NAME"
                  value={name}
                  onChange={(e) => setName(e.target.value)}

                />
              </Box>
            </div>

            <div className="form_data_zone_select">
              {/* <select class="form-select" aria-label="Default select example">
                <option selected>status</option>
                <option value="1">active</option>
                <option value="2">vications</option>
                <option value="3">non active</option>
              </select> */}
              <Box sx={{
                width: "100%",
                maxWidth: "100%",
                fontSize: "20px",
                height: "50px",

              }} >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Status"
                    value={isStatus}

                    onChange={(e) => setIsStatus(e.target.value)}
                  >
                    {
                      getListStatusZone?.map((item, index) => {
                        return (
                          <MenuItem value={item.id}>{item.name}</MenuItem>
                        )
                      })

                    }

                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="bottom_line"></div>
          </div>
        </div>


        {/* common area section start */}
        <div className="mt-4" style={{ marginLeft: '8rem' }}>
          <div className="common_area_zone_update">
            <h2>
              COMMON AREA
            </h2>
            <div>
              <input type="checkbox"
                checked={zoneDetailFatherAndChild?.commonArea == null ? true : false}
                value={isCommonArea}
                onChange={() => setIsCommonArea(!isCommonArea)}
              />
              <span>(Is common area)</span>

            </div>
            <div className="line"></div>
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
                    defaultValue={zoneDetailFatherAndChild?.commonArea?.fromTime}
                    value={formDate}
                    onChange={(date) => setFormDate(date)}
                  />
                </LocalizationProvider>
              </div>
              <div className="col-md-4">
                <LocalizationProvider dateAdapter={AdapterDateFns} >
                  <TimePicker
                    renderInput={(props) => <TextField {...props} />}
                    ampm={false}
                    openTo="hours"
                    views={["hours", "minutes", "seconds"]}
                    inputFormat="HH:mm:ss"
                    mask="__:__:__"
                    label="To"
                    value={toDate}
                    onChange={(date) => setToDate(date)}
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

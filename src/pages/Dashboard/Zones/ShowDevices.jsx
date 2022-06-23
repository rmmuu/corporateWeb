import React, { useState } from "react";
import { Link } from "react-router-dom";
import house_plane from "../../../assets/images/house_plane@2x.png";
import map_solid from "../../../assets/images/map-solid.svg";

import globe_asia_solid from "../../../assets/images/globe-asia-solid.svg";

import ic_info from "../../../assets/images/ic-info.svg";

import ShowDeviceModal from "./Modal/ShowDeviceModal";
import ShowDeviceMapModal from "./Modal/showDeviceMapModal";
import ShowDeviceListModal from "./Modal/ShowDeviceListModal";
import AuthorizedEmployees from "./Modal/AuthorizedEmployees";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ShowDevices = () => {
  const [ProfileImage, setProfileImage] = useState("");
  const [viewPlane, setViewPlane] = React.useState('');

  const handleChange = (event) => {
    setViewPlane(event.target.value);
  };

  return (

    <>
      <div className="container_fluid show_device">
        <div className="row">
          <div className="col-md-12">
            <div className="show_device_navigation">
              <div className="show_device_navigation_item">
                <a href="/dashboard/singlezonedetails">
                  <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </a>
                <h4>ZONE INFORMATION</h4>

              </div>
              <div>
                <h6>corporate</h6>
                <p><span>IBL |</span> Intelligence Bereau Laboratory</p>
                <h6>ZONE</h6>
                <p>Queretaro</p>
              </div>
              <div>
                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                  <InputLabel id="demo-select-small">View</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={viewPlane}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>option 1</MenuItem>
                    <MenuItem value={20}>option 2</MenuItem>
                    <MenuItem value={30}>option 3</MenuItem>
                  </Select>
                </FormControl>
                <Link to="#">REMOVE PLANE</Link>
              </div>


            </div>

          </div>
        </div>
        <div className="showdevice_addbtn"
          data-toggle="modal"
          data-target="#showdeviceModal">
          <button className="btn btn-primary">
            <span>ADD PLANE</span>
            <img src={map_solid} alt="" />
          </button>
        </div>
        {/* <div className="showdevice_addmap"
          data-toggle="modal"
          data-target="#showdevicemapModal">
          <button className="btn btn-primary">
            <span>ADD MAP</span>
            <img src={globe_asia_solid} alt="" />
          </button>
        </div> */}
        <div
          className="showdevice_list"
          data-toggle="modal"
          data-target="#showdevice_listModal">
          <button className="btn btn-primary">
            <img src={ic_info} alt="" />
          </button>
        </div>
        {/* image show  */}
        <div>
          <img
            src={
              ProfileImage === "" ||
                ProfileImage === null ||
                ProfileImage === undefined
                ? house_plane
                : ProfileImage
            }
            className="img-fluid"
            style={{
              width: "100%",
              height: "100%",
            }}
            alt="employeedetail-person4"
          />
        </div>

        <ShowDeviceModal setProfileImage={setProfileImage} />

        <ShowDeviceMapModal />

        <ShowDeviceListModal />

      </div>


    </>

  );
};

export default ShowDevices;

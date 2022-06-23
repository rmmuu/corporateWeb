import React, { useState } from "react";
import iccancel from "../../../../assets/images/ic-cancel.svg";
import ZonesMap from "../Map/ZoneMap";
import { Box, TextField } from '@mui/material';
const ShowDeviceMapModal = () => {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  return (
    <div class="modal" id="showdevicemapModal">
      <div class="modal-dialog">
        <div class="modal-content">
          {/* <!-- Modal Header --> */}

          <div>
            <img
              src={iccancel}
              className="close profile_ancel_img"
              data-dismiss="modal"
              alt=""
            />
          </div>

          {/* <!-- Modal body --> */}
          <div class="modal-body">
            <div className="container add_new_model_map">
              <div className="text-center mb-3">
                <h1>ADD NEW MAP</h1>
              </div>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  fontSize: "20px",
                  height: "40px",
                }}
              >
                <TextField
                  focused
                  // value={address}
                  fullWidth
                  placeholder="LATITUDE"
                  label="LATITUDE"
                  id="Address"
                  name="LATITUDE"
                // value={companyData.address}
                // onChange={(e) => handleChange(e)}
                />
              </Box>
              <Box

                className="mt-3"
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  fontSize: "20px",
                  height: "40px",
                }}
              >
                <TextField
                  focused
                  // value={address}
                  fullWidth
                  placeholder="LONGITUDE"
                  label="LONGITUDE"
                  id="Address"
                  name="LONGITUDE"
                // value={companyData.address}
                // onChange={(e) => handleChange(e)}
                />
              </Box>


              <div className="mt-3  zones_map">
                <ZonesMap LatLng={(e) => [setLat(e.lat), setLng(e.lng)]} />
              </div>
              <div className="text-center">
                <p>TOUCH TO ADD A POINT</p>
              </div>

              <div className="add_plane_footer_button" >
                <button
                  className=" btncancel"
                  // style={{ height: "35px" }}
                  data-dismiss="modal"

                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary btnUpload "
                  // style={{ height: "35px" }}
                  data-dismiss="modal"

                >
                  UPLOAD
                </button>

              </div>
              {/* <button className="mb-4 btn btn-lg w-100">UPLOAD map</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDeviceMapModal;

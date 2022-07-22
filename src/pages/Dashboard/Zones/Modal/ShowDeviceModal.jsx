import React, { useState } from "react";
import UploadImage from "../UploadImage";
import iccancel from "../../../../assets/images/ic-cancel.svg";
import { Box, TextField } from "@mui/material";
import { CreateZonePlane, UploadImgZonePlane } from "../../../../reduxToolkit/EmployeeZones/EmployeeZonesApi";
import { useDispatch } from "react-redux";

const ShowDeviceModal = ({ setProfileImage }) => {
  const [imagePreviewUrl, setimagePreviewUrl] = useState([]);
  const [dropzone1, setdropzone1] = useState([]);
  const [name, setName] = useState("");

  // console.log(imagePreviewUrl);
  // console.log(dropzone1);

  const dispatch = useDispatch();

  const resetForm = () => {
    setimagePreviewUrl([]);
    setdropzone1([]);
    setName("");
  }

  const addFilesToDropzone = (files, dropzone) => {
    let files_with_preview = [];
    files.map((file) => {
      file["preview"] = URL.createObjectURL(file);
      files_with_preview.push(file);
    });

    console.log("test url check", files_with_preview);
    setimagePreviewUrl(files_with_preview["preview"]);
    setdropzone1([...files_with_preview]);
  };

  const createZoneplaneHandler = () => {
    const createData = {
      name,
      zone: {

        id: localStorage.getItem('singlezoneId'),
      },
      file: dropzone1[0],
      option: "zone+"
    }


    dispatch(CreateZonePlane(createData))
    resetForm()


  }
  return (
    <div class="modal " id="showdeviceModal" >
      <div class="modal-dialog">
        <div class="modal-content">

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
            <div className="container add_new_model_plane">
              <div className="text-center mb-4">
                <h1>ADD NEW PLANE</h1>
              </div>
              <div>
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
                    placeholder="Plane 1"
                    label="NAME"
                    id="NAME"
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                  />
                </Box>
              </div>

              <div>
                <UploadImage
                  className="upload_image_plane"
                  onPress={(files) => {
                    addFilesToDropzone(files, "dropzone1");
                  }}
                  dropzone1={dropzone1}
                  imagePreviewUrl={dropzone1[0]?.preview}
                />
              </div>

              {/* <ShowImgUpload /> */}

              {/* <button className="btn btn-lg w-100">UPLOAD PLANE</button> */}
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
                  onClick={() => {
                    if (dropzone1.length !== 0) {
                      setProfileImage(dropzone1[0]?.preview);
                    } else {
                      setProfileImage("");
                    }
                    createZoneplaneHandler()
                  }}
                >
                  UPLOAD
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDeviceModal;

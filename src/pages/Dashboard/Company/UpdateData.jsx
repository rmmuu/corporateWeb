import React, { useState } from 'react'
import { Box, TextField } from '@mui/material';
import submitupload from '../../../assets/images/upload.PNG'
import LefletMap from '../../../components/LefletMap';
import { Link } from 'react-router-dom';


const UpdateData = () => {
  const [showMap, setShowMap] = useState(false);
  return (
    <div>
      <div className='head'>
        <div className='headLeft'>
          <Link to="/dashboard/company">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </Link>
          <h2>Corporate data</h2>
        </div>
        <button>
          <span>Update data</span>
          <i className="fa fa-file" aria-hidden="true"></i>
        </button>
      </div>
      <div className='mt-5 row dragdrop_row'>
        <div className="col-lg-6 col-md-6">
          <h4>data</h4>
          <div className="mt-1 gy-4 row">
            <div className="col-lg-6">
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  fontSize: "20px",
                  height: "40px",
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Inteligence Bereau Laboratory"
                  label="company name"
                  id="company name"
                />
              </Box>
            </div>
            <div className="col-lg-6">
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  fontSize: "20px",
                  height: "40px",
                }}
              >
                <TextField
                  fullWidth
                  placeholder="IBL"
                  label="ACRONYM"
                  id="ACRONYM"
                />
              </Box>
            </div>
            <div className="col-lg-12">
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  fontSize: "20px",
                  height: "40px",
                }}
              >
                <TextField
                  // value={address}
                  fullWidth
                  placeholder="Paseos de san miguel"
                  label="Address"
                  id="Address"
                />
              </Box>
            </div>
          </div>
          <h4
            className="pull-right"
            onClick={() => setShowMap(!showMap)}
          >
            OR CLICK TO SHOW IN THE MAP
          </h4>
          {
            showMap ? <div className='my-5'>
              <LefletMap />
            </div> : null
          }
          <div className="restrictions_text">
            <h4>RESTRICTIONS</h4>
            <div className="my-3 checkBoxWithText">
              <h6 id="updatedata">Aditional information employee </h6>
              <input
                type="checkbox"
                name="check"
              />
            </div>
            <div className="my-3 checkBoxWithText">
              <h6 id="updatedata">Aditional information employee </h6>
              <input
                type="checkbox"
                name="check"
              />
            </div>
            <div className="my-3 checkBoxWithText">
              <h6 id="updatedata">Aditional information employee </h6>
              <input
                type="checkbox"
                name="check"
              />
            </div>
          </div>

        </div>
        <div className="col-lg-6 col-md-6">
          <div className="updata_img_m">
            <h5>images</h5>
            <label htmlFor="file-input" className="dottedborderbox">
              <img
                src={submitupload}
                alt="submitupload"
                className="submitupload"
              />
              <input
                type="file"
                id="file-input"
                accept="image/*, video/*"
              // onChange={(e) => {
              //   this.setState({ uploadedPath: e.target.files[0] })
              //   uploadToS3(e.target.files[0])
              // }}
              />
              <p>
                drag {"&"} drop <br /> your image <br /> size 20 mb max
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateData
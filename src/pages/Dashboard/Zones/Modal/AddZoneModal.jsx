import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { Modal } from "react-bootstrap";
import LefletMap from "../../../../components/LefletMap";
import { Link } from "react-router-dom";
import cancel from '../../../../assets/images/ic-cancel.svg'
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateChildZone, CreateFatherZone, GetListStatusZone } from "../../../../reduxToolkit/EmployeeZones/EmployeeZonesApi";

const AddZoneModal = (props) => {

  const dispatch = useDispatch()
  const { title, check, isFatherZone } = props;


  const [name, setName] = useState("");
  const [isStatus, setIsStatus] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");


  const { getListStatusZone } = useSelector(state => state.EmployeeZonesSlice)
  console.log(getListStatusZone)

  console.log(isFatherZone)

  const handelCreateZone = () => {
    const createFatherZoneFormData = {
      name,
      status: {
        id: isStatus
      },
      latitud: Number(latitude),
      longitud: Number(longitude),
    }

    const createChildZoneFormData = {
      father: {
        id: isFatherZone?.id
      },
      name,
      status: {
        id: isStatus
      },
      latitud: Number(latitude),
      longitud: Number(longitude),
    }

    if (check === 'true') {

      dispatch(CreateChildZone(createChildZoneFormData))
    } else {

      dispatch(CreateFatherZone(createFatherZoneFormData))
    }
  }

  useEffect(() => {
    dispatch(GetListStatusZone())
  }, [])


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="add_zone_modal"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" style={{ fontSize: '1.1rem', fontWeight: '600', marginTop: '0.5rem', letterSpacing: '0.3rem' }}>
          {title}
        </Modal.Title>
        <img onClick={() => props.onHide()} src={cancel} alt="cancel" style={{ paddingTop: "12px", cursor: "pointer" }} />
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6">
            {
              check === "true" ?
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
                    placeholder="Querétaro"
                    label="FATHER ZONE*"
                    id="FATHER ZONE*"
                    focused
                    value={isFatherZone?.name}
                    // onChange={(e) => setFatherZone(e.target.value)}
                    disabled
                  />
                </Box> : ""
            }
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
                placeholder="ZonaUNITAD2"
                label="NAME"
                id="NAME"
                focused
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            {/* <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
                fontSize: "20px",
                height: "50px",
              }}
            >
              <TextField
                fullWidth
                placeholder="ACTIVE"
                label="STATUS"
                id="STATUS"
                focused
                value={isStatus}
                onChange={(e) => setIsStatus(e.target.value)}
              />
            </Box> */}
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
            <div className="row">
              <div className="col-md-6">
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
                    placeholder="1.5234234"
                    label="LATITUDE"
                    id="LATITUDE"
                    focused
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                  />
                </Box>
              </div>
              <div className="col-md-6">
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
                    placeholder="44.33231213656"
                    label="LONGTITID"
                    id="LONGTITID"
                    focused
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                  />
                </Box>
              </div>
            </div>
            <button className="cancelBtn">Cancel</button>
            <button className="addBtn" onClick={() => { handelCreateZone() }}>CREATE</button>
          </div>
          <div className="col-md-6 text-center">
            <LefletMap latlng={[1.5234234, 3.45345345]} />
            <Link to='/' className="seeLocation">CILCK DE LOCATION IN THE MAP</Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddZoneModal;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Grid } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider, TimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { useEffect } from "react";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { setDate } from "date-fns";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Visitors from "./Visitors";
import Vehicles from "./Vehicles";

const CreateOnuEvent = () => {
  const [toggleState, setToggleState] = useState(0);
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [date, setdate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [zone, setZone] = useState("");
  const [access, setAccess] = useState("");
  const [accompanied, setaccompanied] = useState("");
  const [unitSection, setUnitSection] = useState("");
  const [employee, setEmployee] = useState();
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  useEffect(() => {
    let todaydate = new Date();
    let h = new Date().getHours();
    setTime(h);
    setdate(todaydate.getDate());
  });
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="providersPanel CreateOnuEventPanel">
      <div className="head">
        <div className='headLeft'>
          <Link to="/dashboard/events-panel/events">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </Link>
          <h2>Create Event</h2>
        </div>
      </div>
      <div className="row steps-row mb-3" id="pills-tab" role="tablist">
        <div className="col tab" role="presentation">
          <a
            className={`steps btn ${toggleState === 0 ? "active-border" : "disable-border"
              }`}
            onClick={() => toggleTab(0)}
            style={{ width: "100%" }}
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            <span>DETAILS</span>
          </a>
        </div>
        <div className="col tab" role="presentation">
          <a
            className={`steps btn ${toggleState === 1 ? "active-border" : "disable-border"
              }`}
            onClick={() => toggleTab(1)}
            style={{ width: "100%" }}
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            <span>HOST</span>
          </a>
        </div>
        <div className="col tab" role="presentation">
          <a
            className={`steps btn ${toggleState === 2 ? "active-border" : "disable-border"
              }`}
            onClick={() => toggleTab(2)}
            style={{ width: "100%" }}
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            <span>VISITORS</span>
          </a>
        </div>
        <div className="col tab" role="presentation">
          <a
            className={`steps btn ${toggleState === 3 ? "active-border" : "disable-border"
              }`}
            onClick={() => toggleTab(3)}
            style={{ width: "100%" }}
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            <span>VEHICLES</span>
          </a>
        </div>
        <div className="col tab" role="presentation">
          <a
            className={`steps btn ${toggleState === 4 ? "active-border" : "disable-border"
              }`}
            onClick={() => toggleTab(4)}
            style={{ width: "100%" }}
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            <span>VALIDATION</span>
          </a>
        </div>
      </div>
      {toggleState === 0 && (
        <div className="CreateEventPanel">
          <div className="content">
            <div className="name">
              <Grid container spacing={4}>
                <Grid item xs={12} md={5} sx={{ position: "relative" }}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Diego´s Birthday"
                    label="NAME"
                    id="NAME"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputLabelProps={{
                      style: {
                        fontSize: "10px",
                        fontWeight: 600,
                        background: "#ffffff",
                        padding: "0px 0px 0px 4px",
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
                          fontSize: "12px",
                        },
                      },
                    }}
                  />
                  <span className="duration-min">
                    <ima src="../../../../public/icn.svg" />
                  </span>
                </Grid>
                <Grid item xs={12} md={5} sx={{ position: "relative" }}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Meet people"
                    label="PURPOSE OF VISIT"
                    id="NAME"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputLabelProps={{
                      style: {
                        fontSize: "10px",
                        fontWeight: 600,
                        background: "#ffffff",
                        padding: "0px 0px 0px 4px",
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
                          fontSize: "12px",
                        },
                      },
                    }}
                  />
                  <span className="duration-min">
                    <ima src="../../../../public/icn.svg" />
                  </span>
                </Grid>
              </Grid>
            </div>

            <div className="dateTimeInput">
              <div className="dateTimeInput-container">
                <Grid container spacing={4}>
                  <Grid item xs={12} md={5}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Stack>
                        <DesktopDatePicker
                          label="FECHA"
                          inputFormat="dd/MM/yyyy"
                          value={date}
                          textFieldStyle={{ width: "100%" }}
                          onChange={setDate}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Stack>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <TimePicker
                        renderInput={(props) => <TextField {...props} />}
                        ampm={false}
                        openTo="hours"
                        views={["hours", "minutes", "seconds"]}
                        inputFormat="HH:mm:ss"
                        mask="__:__:__"
                        className="timeInput"
                        label="FROM"
                        value={time}
                        onChange={setTime}
                        sx={{ width: "100%" }}
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
              </div>
            </div>
            <div className="name">
              <Grid container spacing={4}>
                <Grid item xs={12} md={5} sx={{ position: "relative" }}>
                  <TextField
                    sx={{ mt: "2px" }}
                    fullWidth
                    size="small"
                    placeholder="180"
                    label="DURATION (MIN)"
                    id="NAME"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputLabelProps={{
                      style: {
                        fontSize: "10px",
                        fontWeight: 600,
                        background: "#ffffff",
                        padding: "0px 0px 0px 4px",
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
                          fontSize: "12px",
                        },
                      },
                    }}
                  />
                  <span className="duration-min" style={{ top: "41px" }}>
                    MIN
                  </span>
                </Grid>
                <Grid item xs={12} md={5} sx={{ position: "relative" }}>
                  <TextField
                    sx={{ mt: "2px" }}
                    fullWidth
                    size="small"
                    placeholder="GYM"
                    label="ZONE"
                    id="NAME"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputLabelProps={{
                      style: {
                        fontSize: "10px",
                        fontWeight: 600,
                        background: "#ffffff",
                        padding: "0px 0px 0px 4px",
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
                          fontSize: "12px",
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </div>
            <div className="name">
              <Grid container spacing={4}>
                <Grid item xs={12} md={5} sx={{ position: "relative" }}>
                  <TextField
                    sx={{ mt: "2px" }}
                    fullWidth
                    size="small"
                    placeholder="AccessUnami"
                    label="ACCESS"
                    id="NAME"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputLabelProps={{
                      style: {
                        fontSize: "10px",
                        fontWeight: 600,
                        background: "#ffffff",
                        padding: "0px 0px 0px 4px",
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
                          fontSize: "12px",
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      )}
      {toggleState === 1 && (
        <div
          className="content2"
          style={{
            width: "350px",
            margin: "auto",
          }}
        >
          <div className="HostSection">
            <p className="checkboxOther" style={{ textAlign: "right" }}>
              <input type="checkbox" />
              OTHER IS THE HOST
            </p>
            <div className="CreateEventPanel hostContainer">
              <div className="content">
                <div className="name">
                  <Grid
                    container
                    spacing={2}
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="NA"
                        label="ACCOMPANIED"
                        id="NAME"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        InputLabelProps={{
                          style: {
                            fontSize: "10px",
                            fontWeight: 600,
                            background: "#ffffff",
                            padding: "0px 0px 0px 4px",
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
                              fontSize: "12px",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ position: "relative" }}>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="UNITAD2"
                        label="UNIT/SECTION"
                        id="NAME"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        InputLabelProps={{
                          style: {
                            fontSize: "10px",
                            fontWeight: 600,
                            background: "#ffffff",
                            padding: "0px 0px 0px 4px",
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
                              fontSize: "12px",
                            },
                          },
                        }}
                      />
                      <span className="duration-min">
                        <ima src="../../../../public/icn.svg" />
                      </span>
                    </Grid>
                    <hr style={{ margin: "1.2rem 0rem 0rem 1rem", color: "green", opacity: "1" }}></hr>
                    <Grid item xs={12}>
                      <Box sx={{ mt: "6px" }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            EMPLOYEE
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue="employe"
                            value={employee}
                            label="EMPLOYEE"
                            onChange={(e) => setEmployee(e.target.value)}
                            sx={{
                              fontSize: "14px",
                            }}
                          >
                            <MenuItem
                              value={10}
                              sx={{
                                fontSize: "14px",
                              }}
                            >
                              IBL-1 | Luis Enrique Cornejo Arreola
                            </MenuItem>
                            <MenuItem
                              value={20}
                              sx={{
                                fontSize: "14px",
                              }}
                            >
                              IBL-1 | Luis Enrique Cornejo Arreola
                            </MenuItem>
                            <MenuItem
                              value={20}
                              sx={{
                                fontSize: "14px",
                              }}
                            >
                              IBL-1 | Luis Enrique Cornejo Arreola
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>
                  </Grid>
                </div>
                <div className="name">
                  <Grid
                    container
                    spacing={2}
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Grid item xs={12} sx={{ position: "relative" }}>
                      <TextField
                        sx={{ mt: "2px" }}
                        fullWidth
                        size="small"
                        placeholder="NAME"
                        label="NAME"
                        id="NAME"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        InputLabelProps={{
                          style: {
                            fontSize: "10px",
                            fontWeight: 600,
                            background: "#ffffff",
                            padding: "0px 0px 0px 4px",
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
                              fontSize: "12px",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ position: "relative" }}>
                      <TextField
                        sx={{ mt: "2px" }}
                        fullWidth
                        size="small"
                        placeholder="EMAIL"
                        label="EMAIL"
                        id="NAME"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        InputLabelProps={{
                          style: {
                            fontSize: "10px",
                            fontWeight: 600,
                            background: "#ffffff",
                            padding: "0px 0px 0px 4px",
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
                              fontSize: "12px",
                            },
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                </div>
                <div className="name">
                  <Grid container spacing={4}>
                    <Grid item xs={12} sx={{ position: "relative" }}>
                      <TextField
                        sx={{ mt: "2px" }}
                        fullWidth
                        size="small"
                        placeholder="PHONE NUMBER"
                        label="PHONE NUMBER"
                        id="NAME"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        InputLabelProps={{
                          style: {
                            fontSize: "10px",
                            fontWeight: 600,
                            background: "#ffffff",
                            padding: "0px 0px 0px 4px",
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
                              fontSize: "12px",
                            },
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {toggleState === 2 && (
        <>
          <Visitors />
        </>
      )}
      {toggleState === 3 && (
        <>
          <Vehicles />
        </>
      )}
      {toggleState === 4 && (
        <>
          <Box className="content4">
            <TextField
              fullWidth
              placeholder="(Specific instructions to the guards for access or search procedures to be aplied.)"
              label="COMMENTS"
              id="COMMENTS"
              multiline
              rows={5}
              value={access}
              onChange={(e) => setAccess(e.target.value)}
            />
            <p className="headingText">REQUIRED TRANSPORATION</p>
            <FormGroup>
              <div className="yesNoCheckbox">
                Yes
                <div style={{ margin: "0px 28px" }}>
                  <Switch defaultChecked size="small" color="success" />
                </div>
                NO
              </div>
            </FormGroup>
          </Box>
        </>
      )}
      <div className="nxtprevbtn">
        <div className="EventBtns">
          {
            toggleState !== 0 ?
              <Button
                className="EventPreviousBtn"
                onClick={(e) =>
                  toggleState - 1 > -1 &&
                  setToggleState((prevState) => prevState - 1)
                }
              >
                Previous
              </Button> : ""
          }
          <Button
            className="EventNextBtn"
            onClick={(e) =>
              toggleState + 1 < 5 &&
              setToggleState((prevState) => prevState + 1)
            }
          >
            {toggleState === 4 ? "Create" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateOnuEvent;

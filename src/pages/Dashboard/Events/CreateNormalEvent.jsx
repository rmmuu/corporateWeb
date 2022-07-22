import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Grid, TextField, Box } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider, TimePicker } from "@mui/lab";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Visitors from "./CreateOnuEvents/Visitors"
import companyImage from "../../../assets/images/companyImg.png";
import flower from "../../../assets/images/plant.png";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { saveNormalEventDetail, updateSelectedEmployees, updateZonesList } from "../../../reduxToolkit/EmployeeEvents/EmployeeEventsSlice";
import { allZonesList, createNormalEvent, createUserInvitation } from "../../../reduxToolkit/EmployeeEvents/EmployeeEventsApi";
import { useEffect } from "react";


const CreateNormalEvent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const detailData = useSelector(state => state?.EmployeeEventsSlice?.normalEventDetails);
  const userData = useSelector(state => state?.authenticatioauthennSlice?.user.data);
  const allZones = useSelector(state => state?.EmployeeEventsSlice?.zonesList);
  const guestData = useSelector(state => state?.EmployeeEventsSlice?.emailPhoneSearchList);
  const selectedEmployees = useSelector(state => state?.EmployeeEventsSlice?.selectedEmployees);
  const allEmployees = useSelector(state => state?.EmployeeEventsSlice?.allEmployees);


  const [toggleState, setToggleState] = useState(0);
  const [hostChecked, setHostChecked] = useState(false);
  const [eventDetail, setEventDetail] = useState({
    name: detailData.name,
    date: detailData.date,
    time: detailData.time,
    duration: detailData.duration,
  });
  const [endDate, setEndDate] = useState();
  const [selectedZones, setSelectedZones] = useState();
  const [selectedHostEmp, setSelectedHostEmp] = useState();
  const [hostObject, setHostObject] = useState({
    name: selectedHostEmp?.name,
    email: selectedHostEmp?.email,
    phoneNo: selectedHostEmp?.phoneNo,
  });
  console.log(selectedHostEmp)

  useEffect(() => {
    setSelectedHostEmp({})
  }, [hostChecked])

  const toggleTab = (index) => {
    // setToggleState(index);
  };

  const handleReserve = (value) => {
    setSelectedZones(value)
  }

  const handleSubmit = (moveState) => {
    const { name, date, time, duration } = eventDetail;
    if (moveState === 0) {
      if (name !== "" && date !== "" && time !== "" && duration !== "") {
        dispatch(saveNormalEventDetail(eventDetail))
        dispatch(allZonesList({
          startDate: Math.round(date.getTime()),
          endDate: Math.round(endDate.getTime()),
          userId: userData?.id
        }))
        moveState + 1 < 3 && setToggleState((prevState) => prevState + 1);
      } else {
        toast.error("please fill all fields..!")
      }
    } else if (moveState === 1) {
      if (selectedZones.length !== 0) {

        moveState + 1 < 3 && setToggleState((prevState) => prevState + 1);
      } else {
        toast.error("Must select zone..!")
      }
    } else if (moveState === 2) {
      const body = {
        user: {
          id: userData?.id
        },
        host: {
          id: selectedHostEmp?.id ? selectedHostEmp?.id : userData?.id
        },
        reservation: {
          zone: {
            id: selectedZones?.zoneId
          }
        },
        name: detailData?.name,
        visitPurpose: "No comments.",
        duration: detailData?.duration,
        startDate: detailData?.date.getTime()
      }
      dispatch(createNormalEvent(body))
        .then(({ payload: { data: { data } } }) => {
          let employeeOtherGuests = [];
          guestData.map(item => {
            employeeOtherGuests.push({
              guest: {
                id: item.id
              },
              guestNumber: 4
            })
          })
          selectedEmployees.map(item => {
            employeeOtherGuests.push({
              guest: {
                id: item.id
              },
              guestNumber: 4
            })
          })
          // console.log(employeeOtherGuests)
          const invitBody = {
            eventId: data?.id,
            userInvitations: employeeOtherGuests
          }
          dispatch(createUserInvitation(invitBody))
            .then(({ payload: { data: { data } } }) => {
              console.log(data)
              if (data !== null) {
                dispatch(saveNormalEventDetail({
                  name: "",
                  date: "",
                  time: "",
                  duration: "",
                }))
                dispatch(updateSelectedEmployees([]));
                navigate('/dashboard/events-panel/events');
              }
            });
        });
    }
  }

  return (
    <div className="providersPanel CreateEventPanel">
      <div className="head">
        <div className='headLeft'>
          <Link to="/dashboard/events-panel/events">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </Link>
          <h2>Create Event</h2>
        </div>
      </div>
      <div className="row steps-row mb-3 mt-5" id="pills-tab" role="tablist">
        <div className="col-4 tab" role="presentation">
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
        <div className="col-4 tab tab-right" role="presentation">
          <a
            className={`steps btn ${toggleState === 1 ? "active-border" : "disable-border"
              }`}
            onClick={() => toggleTab(1)}
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            style={{ width: "100%" }}
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            <span>RESERVATION</span>
          </a>
        </div>
        <div className="col-4 tab tab-right" role="presentation">
          <a
            className={`steps btn ${toggleState === 2 ? "active-border" : "disable-border"
              }`}
            onClick={() => toggleTab(2)}
            id="pills-home-tab"
            data-bs-toggle="pill"
            style={{ width: "100%" }}
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            <span>INVITATION</span>
          </a>
        </div>
      </div>
      {toggleState === 0 && (
        <div className="content">
          <div className="name">
            <p>EVENT NAME</p>
            <Grid container spacing={4} >
              <Grid item xs={12} md={5} sx={{ position: "relative" }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Diego´s Birthday"
                  label="NAME"
                  id="NAME"
                  value={eventDetail.name}
                  onChange={(e) => setEventDetail({ ...eventDetail, "name": e.target.value })}
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
                {/* <span className="duration-min"><ima src="../../../../public/icn.svg" /></span> */}
              </Grid>
            </Grid>
          </div>

          <div className="dateTimeInput">
            <div className="dateTimeInput-container">
              <Grid container spacing={4}>
                <Grid item xs={12} md={5}>
                  <p>Choose a date</p>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack>
                      <DesktopDatePicker
                        label="FECHA"
                        inputFormat="dd/MM/yyyy"
                        value={eventDetail.date}
                        textFieldStyle={{ width: '100%' }}
                        disablePast
                        onChange={(e) => setEventDetail({ ...eventDetail, "date": e })}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} md={5}>
                  <p>Choose a Time</p>
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
                      value={eventDetail.time}
                      onChange={(e) => setEventDetail({ ...eventDetail, "time": e })}
                      sx={{ width: '100%' }}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="name">
            <Grid container spacing={4} >
              <Grid item xs={12} md={5} sx={{ position: "relative" }}>
                <TextField
                  sx={{ mt: "12px" }}
                  fullWidth
                  size="small"
                  placeholder="30"
                  label="DURATION"
                  id="NAME"
                  value={eventDetail.duration}
                  onChange={(e) => {
                    const d = new Date();
                    d.setUTCDate(eventDetail.date.getUTCDate() + Number(e.target.value));
                    setEndDate(d)
                    setEventDetail({ ...eventDetail, "duration": Number(e.target.value) })
                  }}
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
                    inputMode: 'numeric',
                    pattern: '[0-9]*'
                  }}
                />
                <span className="duration-min">MIN</span>
              </Grid>
            </Grid>
          </div>
          <div
            className="content2"
            style={{
              marginLeft: "150px",
            }}
          >
            <div
              className="HostSection"
              style={{
                width: "350px",
                marginTop: "2rem"
              }}
            >
              <p>CHOOSE THE HOST</p>
              <p className="checkboxOther" style={{ textAlign: "right" }}>
                <input
                  type="checkbox"
                  checked={hostChecked}
                  onChange={() => setHostChecked(!hostChecked)}
                  style={{ marginRight: "10px" }}
                />
                OTHER IS THE HOST
              </p>
              {
                hostChecked ?
                  <div className="CreateEventPanel hostContainer">
                    <div className="content">
                      <div className="name">
                        <Grid
                          container
                          spacing={2}
                          sx={{ display: "flex", flexDirection: "column" }}
                        >
                          <Grid item xs={12}>
                            <Box sx={{ mt: "6px" }}>
                              <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                  EMPLOYEE
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  defaultValue="employee"
                                  value={hostObject.employee}
                                  label="EMPLOYEE"
                                  onChange={(e) => setSelectedHostEmp(e.target.value)}
                                  sx={{
                                    fontSize: "14px",
                                  }}
                                >
                                  {
                                    allEmployees?.map(item => (
                                      <MenuItem
                                        value={item}
                                        sx={{
                                          fontSize: "14px",
                                        }}
                                      >
                                        {item.name}
                                      </MenuItem>
                                    ))
                                  }
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
                              defaultValue=" "
                              value={selectedHostEmp?.name}
                              onChange={(e) => setHostObject({ ...hostObject, ["name"]: e.target.value })}
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
                              defaultValue=" "
                              value={selectedHostEmp?.email}
                              onChange={(e) => setHostObject({ ...hostObject, ["email"]: e.target.value })}
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
                              defaultValue=" "
                              value={selectedHostEmp?.phoneNumber}
                              onChange={(e) => setHostObject({ ...hostObject, ["phoneNo"]: e.target.value })}
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
                  </div> : null
              }
            </div>
          </div>
        </div>
      )}
      {toggleState === 1 && (
        <div className="content2">
          <div className="row">
            <p className="headline">CHOOSE A COMMON AREA TO RESERVATE:</p>
            {
              allZones?.length !== 0 ?
                allZones?.map((value) => (
                  <div
                    className="col-12 col-md-6"
                    key={value.zoneId}
                  >
                    <div
                      className="reservationCard"
                      style={{
                        backgroundColor: value?.zoneId === selectedZones?.zoneId ? "#E1E1E1" : ""
                      }}
                      onClick={() => handleReserve(value)}
                    >
                      {value.isCommonArea && <img className="flowerImg" src={flower} alt="flower" />}
                      <div className="d-flex justify-content-between w-100">
                        <div className="data">
                          <p className="heading">{value.name}</p>
                          {/* <span className="description">
                      Alberca principal, 3 m.
                    </span> */}
                          <p className="status">{value.status.name.split("_")[0]}</p>
                        </div>
                        <img className="companyImage" src={companyImage} alt="companyImage" />
                      </div>
                    </div>
                  </div>
                )) :
                <div className="row unavailableEventParent">
                  <p className="unavailableEvent">
                    Unavailable
                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                  </p>
                </div>
            }
          </div>
          <div className="row mt-3">
            <p className="headline2">RESERVATION</p>
            {
              selectedZones ?
                // selectedZones?.map((value) => (
                <div className="col-12 col-md-6" key={selectedZones?.zoneId}>
                  <div
                    className="reservationCard"
                  >
                    {selectedZones?.isCommonArea && <img className="flowerImg" src={flower} alt="flower" />}
                    <div className="d-flex justify-content-between w-100">
                      <div className="data">
                        <p className="heading">{selectedZones?.name}</p>
                        {/* <span className="description">
                      Alberca principal, 3 m.
                    </span> */}
                        <p className="status">{selectedZones?.status.name.split("_")[0]}</p>
                      </div>
                      <img className="companyImage" src={companyImage} alt="companyImage" />
                    </div>
                  </div>
                </div> :
                // )) :
                <div className="row unavailableEventParent">
                  <p className="unavailableEvent">
                    Unavailable
                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                  </p>
                </div>
            }
          </div>
        </div>
      )}
      {toggleState === 2 && (
        <div style={{ width: "75%", margin: "auto" }}>
          <Visitors />
        </div>
      )}
      <div className="EventBtns">
        {
          toggleState !== 0 ?
            <Button
              className="EventPreviousBtn"
              onClick={() =>
                toggleState - 1 > -1 &&
                setToggleState((prevState) => prevState - 1)
              }
            >
              Previous
            </Button> : ""
        }
        <Button
          className="EventNextBtn"
          onClick={() => handleSubmit(toggleState)}
        >
          {toggleState === 2 ? "Create" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default CreateNormalEvent;

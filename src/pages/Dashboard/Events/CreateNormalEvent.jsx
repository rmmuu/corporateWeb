import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider, TimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Stack from "@mui/material/Stack";
import Visitors from "./CreateOnuEvents/Visitors"
import companyImage from "../../../assets/images/companyImg.png";
import flower from "../../../assets/images/plant.png";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { saveNormalEventDetail, updateZonesList } from "../../../reduxToolkit/EmployeeEvents/EmployeeEventsSlice";
import { allZonesList, createNormalEvent, createUserInvitation } from "../../../reduxToolkit/EmployeeEvents/EmployeeEventsApi";


const CreateNormalEvent = () => {
  const dispatch = useDispatch();
  const detailData = useSelector(state => state?.EmployeeEventsSlice?.normalEventDetails);
  const userData = useSelector(state => state?.authenticatioauthennSlice?.user.data);
  const allZones = useSelector(state => state?.EmployeeEventsSlice?.zonesList);
  const normalEventData = useSelector(state => state?.EmployeeEventsSlice?.normalEventCreatedData);
  const guestData = useSelector(state => state?.EmployeeEventsSlice?.emailPhoneSearchList);
  const normalEventDetail = useSelector(state => state?.EmployeeEventsSlice?.normalEventDetails);

  const [toggleState, setToggleState] = useState(0);
  const [eventDetail, setEventDetail] = useState({
    name: detailData.name,
    date: detailData.date,
    time: detailData.time,
    duration: detailData.duration,
  });
  const [endDate, setEndDate] = useState();
  const [selectedZones, setSelectedZones] = useState([]);
  // console.log(selectedZones)

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleReserve = (value) => {
    // setSelectedZones([...selectedZones, value]);
    dispatch(updateZonesList(allZones.filter(zone => zone.zoneId !== value.zoneId)))
    let arr = allZones.filter(zone => zone.zoneId === value.zoneId);
    setSelectedZones([...selectedZones, arr[0]])
  }

  const handleSubmit = (moveState) => {
    const { name, date, time, duration } = eventDetail;
    if (moveState === 0) {
      if (name !== "" && date !== "" && time !== "" && duration !== "") {
        dispatch(saveNormalEventDetail(eventDetail))
        dispatch(allZonesList({
          endDate: Math.round(endDate),
          startDate: Math.round(eventDetail?.date),
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
          id: userData?.id
        },
        reservation: {
          zone: {
            id: selectedZones[0]?.zoneId
          }
        },
        name: detailData?.name,
        visitPurpose: "No comments.",
        duration: detailData?.duration,
        startDate: Math.round(detailData?.date)
      }
      dispatch(createNormalEvent(body));
      if (normalEventData) {
        console.log(normalEventData?.id)
        const invitBody = {
          eventId: normalEventData?.id,
          userInvitations: [{
            guest: {
              id: guestData[0]?.id
            },
            guestNumber: 1 //One by default in general event
          }]
        }
        console.log(invitBody)
        // const invitBody = {
        //   eventId: normalEventData?.id,
        //   userInvitations: [
        //     {
        //       userInvitation: {
        //         guest: {
        //           id: guestData[0]?.id
        //         },
        //         host: {
        //           id: "de7d05f1-1e6f-4ef1-a2e4-7bf73cf64bb8"
        //         },
        //         startDate: Math.round(normalEventDetail?.date),
        //         endDate: Math.round(normalEventDetail?.date)
        //       }
        //     }
        //   ]
        // }

        dispatch(createUserInvitation(invitBody));
      }
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
            <p>EVENTNAME</p>
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
                <span className="duration-min"><ima src="../../../../public/icn.svg" /></span>
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
                  placeholder="Diego´s Birthday"
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
                  }}
                />
                <span className="duration-min">MIN</span>
              </Grid>
            </Grid>
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
                  <div className="col-12 col-md-6" key={value.zoneId}>
                    <div
                      className="reservationCard"
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
              selectedZones?.length !== 0 ?
                selectedZones?.map((value) => (
                  <div className="col-12 col-md-6" key={value.zoneId}>
                    <div
                      className="reservationCard"
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
        </div>
      )}
      {toggleState === 2 && (
        <div style={{ width: "75%", margin: "auto" }}>
          {/* <p className="headline"> */}
          <Visitors />
          {/* </p> */}
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

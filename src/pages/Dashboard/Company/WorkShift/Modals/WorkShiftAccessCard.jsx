import { LocalizationProvider, TimePicker } from "@mui/lab";
import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Button } from "react-bootstrap";
import DeleteIcon from "../../../../../assets/images/redTrash.svg";
import { useDispatch, useSelector } from "react-redux";
import { customScduleTime,getZonetree } from "../../../../../reduxToolkit/EmployeeContractors/EmployeeContractorsSlice";
import { GetZoneTree } from "../../../../../reduxToolkit/EmployeeContractors/EmployeeContractorsApi";
import { CreateWorkShiftAccess } from "../../../../../reduxToolkit/CompanyWorkShift/CompanyWorkShiftApi";
import { useEffect } from "react";
import moment from "moment";
import apiInstance from "../../../../../Apis/Axios";

let day_arr = [];
let latestArray=[];
const WorkShiftAccessCard = ({
  heading1,
  heading2,
  update,
  isAddemployee,
  id
}) => {
const navigate=useNavigate()
  const [fromValue, setfromValue] = useState(new Date("2014-08-18T21:11:54"));
  const [toValue, setToValue] = useState(new Date("2014-08-18T21:11:54"));

  const [userRemoveModal, setuserRemoveModal] = useState(false);

  const [selIndex, setSelIndex]=useState(null)
 
  let dispatch = useDispatch();
  const [data, setData] = useState();
  const zoneData = useSelector(getZonetree);


  const [allDays, setAllDays] = useState(false);
  const [allTime, setAllTime] = useState(false);
  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  useEffect(() => {
    // dispatch(GetZoneTree());
  }, []);

  const [array, setArray] = useState([]);
  const handleCLick = async () => {
    const updateArray = [...array];
    for (let i = 0; i < checked.length; i++) {
      for (let j = 0; j < day_arr.length; j++) {
        let x = {
          zone: { id: checked[i]},
          day: { id: day_arr[j] },
          from: moment(fromValue).format("HH:mm:ss"),
          to: moment(toValue).format("HH:mm:ss"),
        };
        updateArray.push(x);
      }
    }
    latestArray=updateArray;
    setArray(updateArray);
    let customSchdule = [];
    updateArray?.map((item) => {
      customSchdule.push({
        workShift:{id: id},
        zone: { id: item?.zone?.id.split(",",1)[0] },
        day: { id: item?.day?.id },
        from: item?.from,
        to: item?.to,
      });
    });
    console.log("data",customSchdule)
      dispatch(CreateWorkShiftAccess(customSchdule))
    
    navigate("/dashboard/company/workshift-panel", { replace: true });

  };

  const selectAllDays = (event) => {
    if (event.target.checked) {
      day_arr = [1, 2, 3, 4, 5, 6, 0];
    } else {
      day_arr = [];
    }
    setAllDays(!allDays);
  };

  const handleAllTime = (event) => {
    if (event.target.checked) {
      setfromValue(new Date(-2211769692000));
      setToValue(new Date(-2211683293000));
    } else {
      setfromValue();
      setToValue();
    }
    setAllTime(!allTime);
  }
 
  const handleMon = (event) => {
    if (event.target.checked) {
      day_arr.push(event.target.value);
    } else {
      day_arr.pop(event.target.value);
    }
  };const handleTue = (event) => {
    if (event.target.checked) {
      day_arr.push(event.target.value);
    } else {
      day_arr.pop(event.target.value);
    }
  };const handleWed = (event) => {
    if (event.target.checked) {
      day_arr.push(event.target.value);
    } else {
      day_arr.pop(event.target.value);
    }
  };const handleThur = (event) => {
    if (event.target.checked) {
      day_arr.push(event.target.value);
    } else {
      day_arr.pop(event.target.value);
    }
  };const handleFri = (event) => {
    if (event.target.checked) {
      day_arr.push(event.target.value);
    } else {
      day_arr.pop(event.target.value);
    }
  };const handleSat = (event) => {
    if (event.target.checked) {
      day_arr.push(event.target.value);
    } else {
      day_arr.pop(event.target.value);
    }
  };const handleSun = (event) => {
    if (event.target.checked) {
      day_arr.push(event.target.value);
    } else {
      day_arr.pop(event.target.value);
    }
  };
  

  const removeShift=()=>{
    array.splice(selIndex,1);
    let arrayForSort = [...array]
    dispatch(customScduleTime(arrayForSort))
  }
 
  function UserRemove(props) {
    const { from, to,deleteindex } = props;
    
    return (
      <div className="primary-modal">
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <button onClick={props.onHide} className="modal-close-btn">
            X
          </button>
          <span className="main-modal-heading">REMOVE ACCESS</span>
          <div className="unlink-modal-body">
            <span
              className="modal-desc-text"
              style={{ color: "#000", fontSize: "12px", fontWeight: 400 }}
            >
              Are you sure that would you like to remove to the access {from} to 
              {to} in the work shift Morning? {deleteindex}
            </span>

            <div className="btn-div">
              <button
                className="button-sec btn-cancel"
                style={{ color: "red" }}
                onClick={props.onHide}
              >
                CANCEL
              </button>
              <button className="button-sec btn-confirm" onClick={()=>{removeShift()
               setuserRemoveModal(false)  
            }
            }>CONFIRM</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }


  return (
    <div className="pt-3 row">
      <div className="col-lg-6">
        <div className={heading1 === "zones" ? "access_text" : "work_text"}>
          <p>{heading1}</p>
        </div>

        <div className="checkboxes_m">
          {zoneData && 
            zoneData.map((item) => {
              return (
                <ol>
                  <li>
                    <i
                      className="fa fa-angle-right angeL_rights"
                      aria-hidden="true"
                    ></i>
                    <input
                      type="checkbox"
                      value={`${item?.id},${item?.name}`}
                      onChange={handleCheck}
                    />
                    <span className="sm_res">{item?.name}</span>
                  </li>
                  {item?.children &&
                    item?.children.map((childItem) => {
                      return (
                        <ul>
                          <li>
                            <i
                              className="fa fa-angle-right angeL_rights"
                              aria-hidden="true"
                            ></i>
                            <input
                              type="checkbox"
                              value={`${childItem?.id},${childItem?.name}`}
                              onChange={handleCheck}
                            />
                            <span className="sm_res">{childItem?.name}</span>

                            <ul className="nested_checkbox">
                              {childItem &&
                                childItem?.children.map((grandChild) => {
                                  return (
                                    <li>
                                      <input
                                        type="checkbox"
                                        value={`${grandChild?.id},${grandChild?.name}`}
                                        onChange={handleCheck}
                                      />
                                      <span className="sm_ress">
                                        {grandChild?.name}
                                      </span>
                                    </li>
                                  );
                                })}
                            </ul>
                          </li>
                        </ul>
                      );
                    })}
                </ol>
              );
            })}
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className="main_content days_card"
          style={{
            background: "#e1e1e1",
            paddingRight: "15px",
            paddingLeft: "15px",
          }}
        >
          <div className="d-flex justify-content-between contract-custom-checkbox">
            <article>
              <input
                type="checkbox"
                value={1}
                onChange={handleMon}
                checked={allDays ? allDays : null}
              />
              <div>
                <span className="days-text-style">
                  M
                  <br />
                </span>
              </div>
            </article>
            <article>
              <input
                type="checkbox"
                value={2}
                onChange={handleTue}
                checked={allDays ? allDays : null}
              />
              <div>
                <span className="days-text-style">
                  T
                  <br />
                </span>
              </div>
            </article>
            <article>
              <input
                type="checkbox"
                value={3}
                onChange={handleWed}
                checked={allDays ? allDays : null}
              />
              <div>
                <span className="days-text-style">
                  W
                  <br />
                </span>
              </div>
            </article>
            <article>
              <input
                type="checkbox"
                value={4}
                onChange={handleThur}
                checked={allDays ? allDays : null}
              />
              <div>
                <span className="days-text-style">
                  T
                  <br />
                </span>
              </div>
            </article>
            <article>
              <input
                type="checkbox"
                value={5}
                onChange={handleFri}
                checked={allDays ? allDays : null}
              />
              <div>
                <span className="days-text-style">
                  F
                  <br />
                </span>
              </div>
            </article>
            <article>
              <input
                type="checkbox"
                value={6}
                onChange={handleSat}
                checked={allDays ? allDays : null}
              />
              <div>
                <span className="days-text-style">
                  S
                  <br />
                </span>
              </div>
            </article>
            <article>
              <input
                type="checkbox"
                value={0}
                onChange={handleSun}
                checked={allDays ? allDays : null}
              />
              <div>
                <span className="days-text-style">
                  S
                  <br />
                </span>
              </div>
            </article>
          </div>

          <div className="all_checkbox">
            <input type="checkbox" checked={allDays} onChange={selectAllDays} />{" "}
            ALL Days
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <div className="mt-5 access_text">
            <p>hours</p>
            <div className="mt-3">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  renderInput={(props) => (
                    <TextField style={{ width: "100%" }} {...props} />
                  )}
                  ampm={false}
                  openTo="hours"
                  views={["hours", "minutes", "seconds"]}
                  inputFormat="HH:mm:ss"
                  mask="__:__:__"
                  label="FROM"
                  value={fromValue}
                  onChange={(newValue) => {
                    setfromValue(newValue);
                    // console.log({ newValue });
                  }}
                />
              </LocalizationProvider>
            </div>
            <div className="mt-3">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  renderInput={(props) => (
                    <TextField style={{ width: "100%" }} {...props} />
                  )}
                  ampm={false}
                  openTo="hours"
                  views={["hours", "minutes", "seconds"]}
                  inputFormat="HH:mm:ss"
                  mask="__:__:__"
                  label="TO"
                  value={toValue}
                  onChange={(newValue) => {
                    setToValue(newValue);
                  }}
                />
              </LocalizationProvider>
            </div>
            <div className="all_checkbox">
              <input
                type="checkbox"
                checked={allTime}
                onChange={handleAllTime}
              />{" "}
              ALL Time
            </div>
          </div>
          <div className="btnDiv">
            <Button
              className="add-access-btn"
              onClick={(e) => {
                handleCLick(e);
              }}
            >
              ADD ACCESS
              <AddIcon style={{ marginLeft: "10px" }} />
            </Button>
          </div>
        </div>
      </div>

      <div className="access-sec mt-3" >
        <span className="contractor-access-heading">ACCESS</span>
        <Grid container sx={{ mt: 1 }}>
          <Grid
            item
            xs={4}
            className="contractor-access-table-heading"
            sx={{ textAlign: "left" }}
          >
            NAME
          </Grid>
          <Grid item xs={2} className="contractor-access-table-heading">
            DAY
          </Grid>
          <Grid item xs={2} className="contractor-access-table-heading">
            FROM
          </Grid>
          <Grid item xs={2} className="contractor-access-table-heading">
            TO
          </Grid>
          <Grid item xs={1} className="contractor-access-table-heading">
            REMOVE
          </Grid>
        </Grid>
        {array &&
          array?.map((item,index) => {
            return (
              <Grid container sx={{ mt: 1 }}>
                <Grid item xs={4} className="contractor-access-table-first" sx={{ textAlign: "left" }}>
                  {item?.zone?.id?.split(",",2)[1]}
                </Grid>
                <Grid item xs={2} className="contractor-access-table-data">
                  {(item?.day?.id == 3 && "Wednesday") ||
                    (item?.day?.id == 1 && "Monday") ||
                    (item?.day?.id == 2 && "Tuesday") ||
                    (item?.day?.id == 4 && "Thursday") ||
                    (item?.day?.id == 5 && "Friday") ||
                    (item?.day?.id == 6 && "Saturday") ||
                    (item?.day?.id == 0 && "Sunday")}
                </Grid>
                <Grid item xs={2} className="contractor-access-table-data">
                  {item?.from}
                </Grid>
                <Grid item xs={2} className="contractor-access-table-data">
                  {item?.to}
                </Grid>
                <Grid item xs={1} className="contractor-access-table-data">
                  <img
                    src={DeleteIcon}
                    onClick={() => {
                      setuserRemoveModal(true);
                      setSelIndex(index)
                    }}
                  />{" "}
                  <UserRemove
                    show={userRemoveModal}
                    onHide={() => setuserRemoveModal(false)}
                    from={item?.from}
                    to={item?.to}
                    deleteindex={index}
                  />
                </Grid>
              </Grid>
            );
          })}
      </div>
    </div>
  );
};

export default WorkShiftAccessCard;

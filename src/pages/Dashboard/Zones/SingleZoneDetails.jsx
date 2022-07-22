import React, { useEffect, useRef, useState } from "react";
import icwifi from "../../../assets/images/ic-wifi.svg";



import ic_check from "../../../assets/images/ic-check.svg";
import iccancel from "../../../assets/images/ic-cancel.svg";
import ic_map from "../../../assets/images/ic-map.svg";
import warningImg from "../../../assets/images/warning.svg";
import phoneBuilding from "../../../assets/images/Group 162818.svg";
import { Link } from "react-router-dom";



// Materail ui
import { Table } from "react-bootstrap";
import AddBuildingModel from "./Modal/AddBuildingModal";
import AddChildZoneModal from "./Modal/AddChildZoneModal";
import RemovePlanModal from "./Modal/RemovePlanModal";
import TotalAccessService from "./TotalAccessService";
import TablePagination from '@mui/material/TablePagination';
import MUIDataTable from "mui-datatables";
import { useDispatch, useSelector } from "react-redux";
import { DeleteZoneUser, ZoneDetailAuthorizedEmployee, ZoneDetailFatherAndChild } from "../../../reduxToolkit/EmployeeZones/EmployeeZonesApi";
import AuthorizedEmployeesModal from "./Modal/AuthorizedEmployeesModal";
import { getAllEmployees } from "../../../reduxToolkit/EmployeeEvents/EmployeeEventsApi";
import AccessDeviceTable from "./AccessDeviceTable";


const SingleZoneDetails = (props) => {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [otherShow, setOtherShow] = useState(false);


  const [pageAuthorizedEmployee, setPageAuthorizedEmployee] = useState(0);
  const [rowsPerPageAuthorizedEmployee, setRowsPerPageAuthorizedEmployee] = useState(4);
  const [orderBy, setOrderBy] = useState();
  const [sortBy, setSortBy] = useState();


  const { createUserZoneList, createZonePlane, uploadImgZonePlane, deleteImgZonePlane,
    zoneDetailFatherAndChild, zoneDetailAuthorizedEmployee, zoneDetailListDevice, createCommonAreaZone,
    updateZone, updateCommonAreaZone, deleteZoneUser, setZoneImageCoordinate

  } = useSelector(state => state.EmployeeZonesSlice)

  console.log(zoneDetailFatherAndChild)
  console.log(zoneDetailAuthorizedEmployee)
  console.log(zoneDetailListDevice)
  console.log(createCommonAreaZone)
  console.log(updateZone)
  console.log(updateCommonAreaZone)
  console.log(deleteZoneUser)
  console.log(createUserZoneList)

  const handlFilters = (order, sort) => {
    setOrderBy(order);
    setSortBy(sort);
  }


  const handleChangePageAuthorizedEmployee = (event, newPage) => {
    setPageAuthorizedEmployee(newPage);
  };

  const handleChangeRowsPerPageAuthorizedEmployee = event => {
    setRowsPerPageAuthorizedEmployee(parseInt(event.target.value));
    setPageAuthorizedEmployee(0);
  };

  useEffect(() => {
    const body = {

      pagination: {
        "order": sortBy === 'asc' ? true : false,
        "page": pageAuthorizedEmployee,
        "size": rowsPerPageAuthorizedEmployee,
        "sortBy": orderBy ? orderBy : "id"
      },
      zoneId: localStorage.getItem("singlezoneId")
    }
    dispatch(ZoneDetailAuthorizedEmployee(body))

  }, [pageAuthorizedEmployee, rowsPerPageAuthorizedEmployee, orderBy, sortBy, deleteZoneUser, createUserZoneList])

  useEffect(() => {
    dispatch(ZoneDetailFatherAndChild({ zoneId: localStorage?.getItem("singlezoneId") }))
  }, [updateCommonAreaZone, updateZone, createCommonAreaZone, createZonePlane, uploadImgZonePlane, deleteImgZonePlane, setZoneImageCoordinate])


  const employees = [
    "Luis Enrique Cornejo Arrela",
    "Henry Clinton",
    "Brack Obbama",
    "Sherlock Homes",
    "Muhammad Umair",
    "Luis Enrique Cornejo Arrela",
    "Henry Clinton",
    "Brack Obbama",
    "Sherlock Homes",
    "Muhammad Umair",
    "Luis Enrique Cornejo Arrela",
    "Henry Clinton",
    "Brack Obbama",
    "Sherlock Homes",
    "Muhammad Umair",
  ];

  const columns = [
    {
      name: "NAME",
      label: "NAME",
      options: {
        filter: true,
      },
    },
    {
      name: "SN",
      label: "S/N",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "IP",
      label: "IP",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "MAC",
      label: "MAC",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "STATUS",
      label: "STATUS",
      options: {
        filter: true,
        sort: false,
      },
    }
    ,
    {
      name: "ACCESSTYPE",
      label: "ACCESS TYPE",
      options: {
        filter: true,
        sort: false,
      },
    }
    ,
    {
      name: "DEVICETYPE",
      label: "DEVICE TYPE",
      options: {
        filter: true,
        sort: false,
      },
    }
    ,
    {
      name: "UPDATE",
      label: "UPDATE",
      options: {
        filter: true,
        sort: false,
      },
    }
    ,
    {
      name: "UPDATE",
      label: "UPDATE",
      options: {
        filter: true,
        sort: false,
      },
    }
  ];

  const data = [
    {
      NAME: "pda 2",
      SN: "djfdjfkl",
      IP: "192.168.1",
      MAC: "12:34:56:78:90:12",
      STATUS: "Active",
      ACCESSTYPE: "1",
      DEVICETYPE: "1",
      UPDATE: "1",
      UPDATE: "1",
    },

  ];
  return (
    <>
      <div className="building_detauils_res" style={{ marginTop: "1rem" }}>
        <div className="container-fluid">
          <div className="building_logo ">
            <div>
              <Link to="/dashboard/zones">
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </Link>
              <span>ZONE DETAILS</span>
              <div className="pull-right">
                <Link to="/dashboard/showdevices">
                  <button className="btn btn-primary buildingetails_btn_device">
                    SHOW DEVICES <img src={ic_map} alt="" />
                  </button>
                </Link>
              </div>
              <Link to="/dashboard/updatezone" className="pull-right" onClick={
                () => {

                  localStorage.getItem("singlezoneId")
                  dispatch(ZoneDetailFatherAndChild({ zoneId: localStorage.getItem("singlezoneId") }))
                }}>
                <button className=" btn btn-primary buildingetails_btn_update">
                  update data
                  <i
                    className="fa fa-pencil plus_building_details"
                    aria-hidden="true"
                    style={{ paddingRight: "10px", }}
                  ></i>
                </button>
              </Link>
            </div>
          </div>

          {/* Building Details Main Section Start */}

          <div className="zonesinactive_res">
            <div className="row">
              <div className="col-lg-6">
                <div className=" building_details_text">
                  <div className=" text-center">
                    <h1 >details</h1>
                    <div className="building_details_text_border">
                      <p>NAME</p>
                      <h2>{zoneDetailFatherAndChild?.name}</h2>
                      <div className="mt-4">
                        <p>status</p>
                        <h3>
                          <span>
                            {zoneDetailFatherAndChild?.status?.name} <i class="fa fa-circle" aria-hidden="true"></i>
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="mt-4 col-lg-4">
                <div className="text-center buildingdetail_access_txt">
                  <h1 className="">ACCESS DEVICE</h1>
                </div>
                <div className="zones_d_access mt-3">
                  <div className=" d-flex container-fluid">
                    <div>
                      <img
                        src={icwifi}
                        className=""
                        alt="buildind_details_wifi"
                      />
                    </div>
                    <div>
                      <img
                        className="ic_phone_building"
                        src={phoneBuilding}
                        alt="buildind_details_phone"
                      />
                    </div>
                    <div>
                      <i class="fa fa-circle" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="text-center ">Mantra Externo</div>
                  <p className="mb-2">
                    IP
                    <span>192.168.1.45</span>
                  </p>
                  <p className="mb-2">
                    Model
                    <span>SAMSUNG</span>
                  </p>

                  <p className="mb-2">
                    MAC
                    <span>B0-7D-64-08-46-2E</span>
                  </p>

                  <p className="mb-2">
                    Password
                    <span>**************</span>
                  </p>
                </div>
              </div> */}
              <div className="col-lg-5" >
                <div className="text-center buildingdetail_access_txt">
                  <h1 className="mt-4">COMMON AREA</h1>
                </div>
                <div className="text-center mt-4 schedule_zoneb">
                  {
                    zoneDetailFatherAndChild?.commonArea == null &&
                    <div>
                      <img src={warningImg} alt="" style={{ marginTop: '3rem' }} />
                      <p style={{ color: '#BC0000', font: "normal normal 600 24px/29px Montserrat", paddingTop: '1rem' }}>NO COMMON AREA</p>
                    </div>
                  }
                  {
                    zoneDetailFatherAndChild?.commonArea != null &&
                    <>
                      <h2>SCHEDULE USE</h2>
                      <h3>FROM</h3>
                      <p>{zoneDetailFatherAndChild?.commonArea?.fromTime}</p>
                      <h3>TO</h3>
                      <p>{zoneDetailFatherAndChild?.commonArea?.toTime}</p>
                    </>
                  }

                </div>
              </div>
            </div>
          </div>
          <div className="div">
            <div className=" buildingdetail_access_txt">
              <h1 className="mt-5">
                SUB - Z O N ES
                <span
                  style={{ cursor: "pointer" }}
                  data-toggle="modal"
                  data-target="#addchildzones_modal"
                >
                  ADD SUB ZONE +
                </span>
              </h1>
            </div>

            <div className="zonescollaps_building">
              <div className="mt-4 row room_access_text">
                <div className="">
                  <Table
                  // style={{
                  //   border: "hidden",
                  // }}
                  >
                    <thead  >
                      <tr>
                        <th style={{ border: 'none' }}>
                          <h5>Name</h5>
                        </th>
                        <th style={{ border: 'none' }}>
                          <h5>ACCESS DEVICE</h5>
                        </th>
                        <th style={{ border: 'none' }}>
                          <h5>COMMON AREA</h5>
                        </th>
                        <th style={{ border: 'none' }}>
                          <h5>STATUS</h5>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        zoneDetailFatherAndChild?.children?.map((item, index) => {
                          return (
                            <tr>
                              <td>
                                <h4>
                                  {item?.name}
                                  <a href="#">MORE DETAILS</a>
                                </h4>
                              </td>
                              <td>
                                <div>
                                  {
                                    item?.devices.length == 0 &&
                                    <i class="fa fa-times" aria-hidden="true" style={{ color: "red", fontSize: "1.2rem" }}></i>
                                  }
                                  {
                                    item?.devices.length > 0 &&
                                    <i class="fa fa-check" aria-hidden="true" style={{ color: 'green', fontSize: "1.2rem" }}></i>
                                  }
                                </div>
                              </td>
                              <td>
                                <div>
                                  {
                                    item?.commonArea == null &&
                                    <i class="fa fa-times" aria-hidden="true" style={{ color: "red", fontSize: "1.2rem" }}></i>
                                  }
                                  {
                                    item?.commonArea != null &&
                                    <i class="fa fa-check" aria-hidden="true" style={{ color: 'green', fontSize: "1.2rem" }}></i>
                                  }
                                </div>
                              </td>
                              <td>
                                <h6>
                                  {item?.status?.name}
                                  <>
                                    <i style={{ marginLeft: "0.4rem", fontSize: '0.6rem' }} class="fa fa-circle" aria-hidden="true"></i>
                                  </>
                                </h6>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>

            {/* Total Access Sevice Section Start */}
            <TotalAccessService item={zoneDetailFatherAndChild} />

            {/*table  */}

            <AccessDeviceTable />
            {/* <div className="hide_filter">
              <MUIDataTable
                title={"type the name to filter"}
                data={data}
                columns={columns}
                options={{
                  selectableRows: false, // <===== will turn off checkboxes in rows
                }}
              />
            </div> */}


            <div className="buildingdetail_access_d">
              <Table className="table">
                <thead>
                  <tr >
                    <th style={{ border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h1>AUTHORIZED EMPLOYEES</h1>
                      <div style={{ fontSize: "12px", cursor: 'pointer', border: 'none' }} onClick={() => {
                        setShow(true);
                        dispatch(getAllEmployees());
                        // const data = {
                        //   zoneId: localStorage.getItem('singlezoneId'),
                        // }
                        // dispatch(ZoneDetailAuthorizedEmployee(data))

                      }}>
                        Manage Employees {" "}
                        <i class="fa fa-plus" aria-hidden="true" />

                      </div>
                      <AuthorizedEmployeesModal show={show}
                        onHide={() => setShow(false)} />


                    </th>

                  </tr>
                </thead>
                <tbody>
                  {zoneDetailAuthorizedEmployee?.content?.map((employee) => (
                    <>
                      <div
                        className="column"
                        style={{ float: "left", width: "25%", color: "gray" }}

                      >
                        <tr style={{ border: "hidden " }}>
                          <td
                            style={{
                              display: "flex",
                              justifyContent: "spacebetween",
                              border: "hidden",
                              alignItems: 'center',
                              width: '100%'

                            }}
                          >
                            {/* <img
                              src={iccancel}
                              className="close profile_ancel_img"
                              data-dismiss="modal"
                              data-toggle="modal"
                              data-target="#removePLan"
                              alt=""
                            /> */}
                            <i class="fa fa-trash profile_ancel_img" aria-hidden="true"
                              onClick={() => {
                                const data = {
                                  userId: employee.id,
                                  zoneId: localStorage.getItem("singlezoneId")
                                }
                                dispatch(DeleteZoneUser(data))
                              }}
                            ></i>
                            <span style={{ fontSize: '0.8rem', opacity: "0.5" }}>{employee?.name}</span>
                          </td>
                        </tr>
                      </div>
                    </>
                  ))}
                </tbody>
              </Table>

              <div className="d-flex justify-content-center">
                <TablePagination
                  component="div"
                  rowsPerPageOptions={[2, 4, 6, 8, 12]}
                  count={zoneDetailAuthorizedEmployee?.totalElements}
                  page={pageAuthorizedEmployee}
                  onPageChange={handleChangePageAuthorizedEmployee}
                  labelRowsPerPage="Authorized Employee per page"
                  rowsPerPage={rowsPerPageAuthorizedEmployee}
                  onRowsPerPageChange={handleChangeRowsPerPageAuthorizedEmployee}
                />
              </div>
            </div>

            {/* Total Access Sevice Section End */}
          </div>
          {/* Building Details Main Section End */}
        </div>
      </div>

      {/* Add Building Modal Start */}
      {/* <!-- The Modal --> */}
      <AddBuildingModel />
      {/* Add Building Modal End */}
      {/* Add Child Zones Modal Start */}
      {/* <!-- The Modal --> */}
      <AddChildZoneModal />
      {/* Add Child Zones Modal End */}
      <RemovePlanModal />
    </>
  );
};

export default SingleZoneDetails;

import React, { useState } from "react";
// Material ui
import AddBuildingModel from "./Modal/AddBuildingModal";
import ZoneCardDetail from "./ZoneCardDetail";
import { Accordion } from 'react-bootstrap';
import AddZoneModal from "./Modal/AddZoneModal";
import { Link } from 'react-router-dom';
import { ZoneDetailAuthorizedEmployee, ZoneDetailFatherAndChild, ZoneDetailListDevice } from "../../../reduxToolkit/EmployeeZones/EmployeeZonesApi";
import { useDispatch } from "react-redux";

const ZonesCard = ({ item, index }) => {
  const dispatch = useDispatch()
  const [modalShow, setModalShow] = useState(false);
  const [isFatherZone, setIsFatherZone] = useState({});


  const [pageZoneEmployee, setPageZoneEmployee] = useState(0);
  const [rowsPerPageZoneEmployee, setRowsPerPageZoneEmployee] = useState(4);
  const [orderBy, setOrderBy] = useState();
  const [sortBy, setSortBy] = useState();

  const handlFilters = (order, sort) => {
    setOrderBy(order);
    setSortBy(sort);
  }


  const handleChangePageZoneEmployee = (event, newPage) => {
    setPageZoneEmployee(newPage);
  };

  const handleChangeRowsPerPageZoneEmployee = event => {
    setRowsPerPageZoneEmployee(parseInt(event.target.value));
    setPageZoneEmployee(0);
  };

  // const Zones = ["Querétaro", "México", "Querétaro"];
  return (
    <>
      <Accordion defaultActiveKey="0">
        {/* { */}
        {/* // Zones.map((item, index) => ( */}
        <Accordion.Item eventKey={index} key={index}>
          <Accordion.Header className="accordionHeader">
            <div className="main">
              <div className="leftText">
                {item?.name}
                <sub onClick={() => { setModalShow(true); setIsFatherZone({ id: item?.id, name: item?.name }) }}>add sub zone </sub>
              </div>
              <div>

                <Link style={{ fontSize: '10px', cursor: 'pointer', marginLeft: '10rem' }}
                  to={"/dashboard/singlezonedetails"}
                  onClick={() => {
                    const body = {

                      pagination: {
                        "order": sortBy === 'asc' ? true : false,
                        "page": pageZoneEmployee,
                        "size": rowsPerPageZoneEmployee,
                        "sortBy": orderBy ? orderBy : "id"
                      },
                      zoneId: item?.id
                    }
                    localStorage.setItem('singlezoneId', item?.id)
                    dispatch(ZoneDetailFatherAndChild(body))
                    dispatch(ZoneDetailAuthorizedEmployee(body))
                    dispatch(ZoneDetailListDevice(body))
                  }}
                >Manage Zone</Link>
              </div>
              <div className="rightText">
                status <span>{item?.status?.name} </span>
                <div className="circle_status">

                </div>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <ZoneCardDetail item={item} />
          </Accordion.Body>
        </Accordion.Item>
        {/* )) */}
        {/* } */}

      </Accordion>
      <AddZoneModal

        title="sub-Zone"
        check="true"
        show={modalShow}
        onHide={() => setModalShow(false)}
        isFatherZone={isFatherZone}
      />
      <AddBuildingModel />
    </>
  );
};

export default ZonesCard;

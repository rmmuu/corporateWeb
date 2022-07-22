import React, { useEffect, useState } from "react";
import { GetListFatherZones } from "../../../reduxToolkit/EmployeeZones/EmployeeZonesApi";
import AddZoneModal from "./Modal/AddZoneModal";
import ZonesCard from "./ZonesCard";
import { useDispatch, useSelector } from "react-redux";
import TablePagination from '@mui/material/TablePagination';
const Zones = () => {
  const dispatch = useDispatch()

  const { getListFatherZones } = useSelector(state => state.EmployeeZonesSlice)
  console.log(getListFatherZones)
  const { createFatherZone } = useSelector(state => state.EmployeeZonesSlice)
  console.log(createFatherZone)
  const { createChildZone } = useSelector(state => state.EmployeeZonesSlice)
  console.log(createChildZone)


  const [modalShow, setModalShow] = useState(false);
  const [pageZone, setPageZone] = useState(0);
  const [rowsPerPageZone, setRowsPerPageZone] = useState(4);
  const [orderBy, setOrderBy] = useState();
  const [sortBy, setSortBy] = useState();

  const handlFilters = (order, sort) => {
    setOrderBy(order);
    setSortBy(sort);
  }


  const handleChangePageZone = (event, newPage) => {
    setPageZone(newPage);
  };

  const handleChangeRowsPerPageZone = event => {
    setRowsPerPageZone(parseInt(event.target.value));
    setPageZone(0);
  };




  // useEffect for api call incoming with pagination
  useEffect(() => {

    const body = {

      pagination: {
        "order": sortBy === 'asc' ? true : false,
        "page": pageZone,
        "size": rowsPerPageZone,
        "sortBy": orderBy ? orderBy : "id"
      }
    }
    dispatch(GetListFatherZones(body));
  }, [pageZone, rowsPerPageZone, orderBy, sortBy, createFatherZone, createChildZone])
  return (
    <>
      <div className='head'>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>PANEL DEVICE</h2>
        <button
          style={{ width: '15%', height: '30px', cursor: 'pointer' }}
          className="btn btn-sm"
          onClick={() => setModalShow(true)}
        >
          ADD ZONE
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
      <div className="subhead">
        <h5>Zones</h5>
        <p>Total {getListFatherZones?.numberOfElements}</p>
      </div>
      {
        getListFatherZones?.content?.length > 0 ?

          <>
            {
              getListFatherZones?.content.map((item, index) => {
                return <ZonesCard key={index} item={item} />
              })
            }
          </>
          :
          <div className="no-data">
            <h5>No Data</h5>
          </div>

      }

      <div className="d-flex justify-content-center">
        <TablePagination
          component="div"
          rowsPerPageOptions={[2, 4, 6, 8, 12]}
          count={getListFatherZones?.totalElements}
          page={pageZone}
          onPageChange={handleChangePageZone}
          labelRowsPerPage="Zone per page"
          rowsPerPage={rowsPerPageZone}
          onRowsPerPageChange={handleChangeRowsPerPageZone}
        />
      </div>


      {/* Add Building Modal Start */}
      <AddZoneModal
        title="Zone"
        check="false"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {/* Add Building Modal End */}


    </>
  );
};
export default Zones;

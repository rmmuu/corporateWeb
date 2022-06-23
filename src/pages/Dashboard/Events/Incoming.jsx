import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TablePagination from '@mui/material/TablePagination';
import { GetIncomingEventsPageable } from '../../../reduxToolkit/EmployeeEvents/EmployeeEventsApi';
import NoEvent from './NoEvent';
import EventDropDown from './subComponents/EventsDropDown';
import { handlePagination } from '../../../reduxToolkit/EmployeeEvents/EmployeeEventsSlice';

const Incoming = () => {
  const dispatch = useDispatch();
  const incomingsData = useSelector(state => state?.EmployeeEventsSlice?.incomingEvents);
  const pageableObj = useSelector(state => state?.EmployeeEventsSlice?.pageableObj);
  let body;
  const d = new Date();
  let time_in_miliseconds = Math.round(d.getTime());

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const dropDownProps = {
    panel: 'incoming',
    firstItem: 'DOWNLOAD FILE',
    secondItem: 'VIEW DETAILS '
  }
  // var arr = [1, 2, 3, 4, 5, 6]

  useEffect(() => {
    body = {
      date: time_in_miliseconds,
      pagination: pageableObj
    }
    dispatch(GetIncomingEventsPageable(body));
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    dispatch(handlePagination({
      name: "page",
      value: newPage
    }));
    body = {
      date: time_in_miliseconds,
      pagination: pageableObj
    }
    dispatch(GetIncomingEventsPageable(body));
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
    dispatch(handlePagination({
      name: "size",
      value: parseInt(event.target.value)
    }));
    body = {
      date: time_in_miliseconds,
      pagination: pageableObj
    }
    dispatch(GetIncomingEventsPageable(body));
  };

  return (
    <>
      {
        incomingsData?.content?.length !== 0 ?
          <div className="eventTables" style={{ height: "25rem" }}>
            <table style={{ width: "100%" }}>
              <thead>
                <th className='first'>name</th>
                <th>zone</th>
                <th>host</th>
                <th>date</th>
                <th className='last'>options</th>
              </thead>
              {
                incomingsData?.content?.map((item, index) => (
                  <tr key={item.id}>
                    <td className='first'>{item?.name}</td>
                    <td>{item?.unitSection}</td>
                    <td>{item?.host?.name}</td>
                    <td>
                      {new Date(item?.createdAt).toJSON().split("T")[0]}<br />
                      {new Date(item?.createdAt).toJSON().split("T")[1].split(".")[0]}
                    </td>
                    <td className='last'>
                      <EventDropDown dropDownProps={dropDownProps} eventid={item.id} />
                    </td>
                  </tr>
                ))
              }
            </table>
          </div> :
          <NoEvent title="incoming Events" />
      }
      <div className='d-flex justify-content-between align-items-center px-3'>
        <p>{`Total ${incomingsData?.totalElements} of ${incomingsData?.numberOfElements}`}</p>
        <TablePagination
          component="div"
          rowsPerPageOptions={[2, 4, 6, 8]}
          count={incomingsData?.totalElements}
          page={page}
          onPageChange={handleChangePage}
          labelRowsPerPage="Events per page"
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </>
  )
}

export default Incoming
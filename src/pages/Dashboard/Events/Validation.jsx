import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetValidationEventsPageable } from '../../../reduxToolkit/EmployeeEvents/EmployeeEventsApi';
import NoEvent from './NoEvent';
import EventDropDown from './subComponents/EventsDropDown';

const Validation = () => {
  const dispatch = useDispatch();
  const validationData = useSelector(state => state?.EmployeeEventsSlice?.validationEvents);
  console.log(validationData)

  const dropDownProps = {
    panel: 'valication',
    firstItem: 'ALLOW EVENT',
    secondItem: 'VIEW DETAILS'
  }

  useEffect(() => {
    const d = new Date();
    let time_in_miliseconds = Math.round(d.getTime());

    const body = {
      date: 1653004800000,
      pagination: {
        "order": true,
        "page": 0,
        "size": 6,
        "sortBy": "id"
      }
    }
    dispatch(GetValidationEventsPageable(body));
  }, [])

  return (
    <>
      {
        validationData?.content?.length !== 0 ?
          <div className="eventTables" style={{ height: "28rem" }}>
            <table style={{ width: "100%" }}>
              <thead>
                <th className='first'>name</th>
                <th>zone</th>
                <th>host</th>
                <th>date</th>
                <th className='last'>options</th>
              </thead>
              {
                validationData?.content?.map(item => (
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
          <NoEvent title="validation Events" />
      }
    </>
  )
}

export default Validation
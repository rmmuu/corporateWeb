import React, { useState } from 'react'
import remove from '../../../../assets/images/ic-delete-red.svg'
import { FaRegTrashAlt } from 'react-icons/fa';
import NoEvent from '../NoEvent';
import ManageEmployeesModal from '../subComponents/ManageEmployeesModal';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEmployees } from '../../../../reduxToolkit/EmployeeEvents/EmployeeEventsApi';
import ManageOthersModal from '../subComponents/ManageOthersModal';
import { updateEmailPhoneSearchList } from '../../../../reduxToolkit/EmployeeEvents/EmployeeEventsSlice';

const Visitors = () => {
  const dispatch = useDispatch();
  const selectedEmployees = useSelector(state => state?.EmployeeEventsSlice?.selectedEmployees);
  const emailPhoneSearchList = useSelector(state => state?.EmployeeEventsSlice?.emailPhoneSearchList);
  const [show, setShow] = useState(false);
  const [otherShow, setOtherShow] = useState(false);
  console.log(emailPhoneSearchList)

  const handleRemove = (user) => {
    // dispatch(updateEmailPhoneSearchList(emailPhoneSearchList.filter(item => item.id !== user.id)))
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <h4 style={{
          color: "#38857A",
          fontWeight: "600"
        }}>Employees</h4>
        <span
          style={{
            fontSize: "12px",
            textDecoration: "underline",
            marginLeft: "1rem",
            cursor: "pointer",
          }}
          onClick={() => {
            dispatch(getAllEmployees())
            setShow(true);
          }}
        >
          add/remove employess
        </span>
        <ManageEmployeesModal
          show={show}
          onHide={() => setShow(false)}
        />
      </div>
      {
        selectedEmployees.length !== 0 ?
          <div className="eventTables" style={{ height: "13rem" }}>
            <table style={{ width: "100%" }}>
              <thead>
                <th className='first'>name</th>
                <th>phone number</th>
                <th>role</th>
                <th className='last'>reomve</th>
              </thead>
              <tbody>
                {
                  selectedEmployees?.map(item => (
                    <tr key={item.id}>
                      <td className='first'>{item.name}</td>
                      <td>{item.phoneNumber}</td>
                      <td>{item.userType.name}</td>
                      <td className='last'>
                        <img src={remove} alt="remove" />
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div> :
          <NoEvent title="Employees" />
      }

      <div className="d-flex align-items-center mt-5">
        <h4
          style={{
            color: "#38857A",
            fontWeight: "600"
          }}
        >
          others
        </h4>
        <span style={{
          fontSize: "12px",
          textDecoration: "underline",
          marginLeft: "1rem",
          cursor: "pointer",
        }}
          onClick={() => {
            dispatch(getAllEmployees())
            setOtherShow(true);
          }}
        >
          add others
        </span>
        <ManageOthersModal
          show={otherShow}
          onHide={() => setOtherShow(false)}
        />
      </div>
      {
        emailPhoneSearchList.length !== 0 ?
          <div className="eventTables" style={{ height: "13rem" }}>
            <table style={{ width: "100%" }}>
              <thead>
                <th className='first'>name</th>
                <th>phone number</th>
                <th className='last'>reomve</th>
              </thead>
              <tbody>
                {
                  emailPhoneSearchList?.map(item => (
                    <tr key={item.id}>
                      <td className='first'>{item.name}</td>
                      <td>{item.phoneNumber}</td>
                      <td className='last'>
                        <img
                          src={remove}
                          alt="remove"
                          onClick={() => handleRemove(item)}
                        />
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div> :
          <NoEvent title="Employees" />
      }
    </>
  )
}

export default Visitors
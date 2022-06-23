import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const Logs=()=> {
  let state = true;

  return (
    <div>
        <div className="notification-sec">
      <div className="notification-sec__header">
        {state ? (
          <span>
            <AccountCircleIcon className='logs_svg'/>
            <span className="notification-sec__svg">
              User
            </span>
          </span>
        ) : (
          <span>
            <DirectionsCarFilledIcon className='logs_svg'/>
            <span className="notification-sec__svg">
              Exit
             
            </span>
          </span>
        )}
        <span className="notification-sec__date">12/07/1995</span>
      </div>
      <span className="notification-sec__status">USER: Luis Enrique Cornejo Arreola</span>
      {state ? (
        <span className="notification-sec__success-message">
          Update a user
        </span>
      ) : (
        <span className="notification-sec__failed-message">
         Delete a Car
        </span>
      )}
    </div>
    <MailOutlineIcon className='logs_svg'/>
    <CalendarMonthIcon className='logs_svg'/>
    <DirectionsCarFilledIcon className='logs_svg'/>

    </div>
  )
}

export default Logs
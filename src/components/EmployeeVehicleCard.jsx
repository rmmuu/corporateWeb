import React from 'react';
import { Link } from 'react-router-dom';
import person4 from '../assets/images/person-4.png';

const EmployeeVehicleCard = () => {
    return (
        <div className='employeeVehicleCard'>
            <img src={person4} className="person4Img" alt="person2" />
            <Link to=''>
                <i
                    className="fa fa-pencil pencelIcon"
                    aria-hidden="true"
                ></i>
            </Link>
            <div className="headName">
                <p>name</p>
                <h6>Luis Enrique Cornejo Arreola</h6>
            </div>
            <div className="bodyCard">
                <div className="bodyLeftSide">
                    <p>job title</p>
                    <h6>CEO</h6>
                    <p>email</p>
                    <h6>lcornejo@ibl.mx</h6>
                </div>
                <div className="bodyRightSide">
                    <p>schedule</p>
                    <h6>Morning Work Shift</h6>
                    <p>telephone</p>
                    <h6>123455767</h6>
                </div>
            </div>
        </div>
    )
}

export default EmployeeVehicleCard
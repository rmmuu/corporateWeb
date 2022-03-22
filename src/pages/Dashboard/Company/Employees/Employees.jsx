import React from 'react'
import { Link } from 'react-router-dom';
import AddFile from '../../../../components/AddFile';
import EmployeeVehicleCard from '../../../../components/EmployeeVehicleCard';

export const Employees = () => {
  return (
    <>
      <div className='employeeVehicleHead'>
        <h3>
          Employees
          <Link to=''>
            <sub>view more</sub>
          </Link>
        </h3>
        <p>Total <span>7</span></p>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-md-6" style={{ marginTop: "4.5rem" }}>
          <EmployeeVehicleCard />
        </div>
        <div className="col-12 col-md-6" style={{ marginTop: "4.5rem" }}>
          <EmployeeVehicleCard />
        </div>
        <div className="col-12 col-md-6" style={{ marginTop: "4.5rem" }}>
          <EmployeeVehicleCard />
        </div>
        <div className="col-12 col-md-6" style={{ marginTop: "4.5rem" }}>
          <AddFile add="add employee" />
        </div>
      </div>
    </>
  )
}

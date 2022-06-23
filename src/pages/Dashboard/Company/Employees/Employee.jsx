import React, { useEffect, useState } from "react";
import EmployeeCards from "./EmployeeCard/EmployeeCards";
// import asside_logo from "../assets/images/logo 3.png";

import asside_logo from "../../../../assets/images/logo 3.png";
import FilterModal from "./Modal/FilterModal";

const Employee = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <a href="/corporatesdetail">
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </a>
      <span>EMPLOYEES</span>
      <div className="pull-right filtermodal_component">
        {/* <FilterModal /> */}
        <button onClick={() => setShowModal(true)}></button>
        <FilterModal show={showModal} onHide={() => setShowModal(false)} />
      </div>

      <EmployeeCards />
    </>
  );
};

export default Employee;

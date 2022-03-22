import React from 'react';
import threedotsicon from "../assets/images/threedotsicon.svg";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from 'react-router-dom';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => {
    return (
        <div
            ref={ref}
            onClick={e => {
                // e.preventDefault();
                onClick(e);
            }}
        >
            {children}
            <img
                src={threedotsicon}
                className="img-fluid threedotsicon"
                alt="threedotsicon"
            />
        </div>
    )
}
);


const CustomDropDown = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle} />
            <Dropdown.Menu size="sm" title="go to details">
                {/* <Dropdown.Item> */}
                <Link to='/dashboard/updatedata'>
                    <div className='dropdownDiv'>
                        <i className="fa fa-building-o" aria-hidden="true"></i>
                        <span>Update Data</span>
                    </div>
                </Link>
                {/* </Dropdown.Item> */}
                {/* <Dropdown.Item> */}
                <Link to='/dashboard/zones'>
                    <div className='dropdownDiv'>
                        <i className="fa fa-building-o" aria-hidden="true"></i>
                        <span>Work Shift Panel</span>
                    </div>
                </Link>
                {/* </Dropdown.Item> */}
                {/* <Dropdown.Item> */}
                <Link to='/dashboard/zones'>
                    <div className='dropdownDiv'>
                        <i className="fa fa-building-o" aria-hidden="true"></i>
                        <span>Documents Panel</span>
                    </div>
                </Link>
                {/* </Dropdown.Item> */}
                {/* <Dropdown.Item> */}
                <Link to='/dashboard/zones'>
                    <div className='dropdownDiv'>
                        <i className="fa fa-building-o" aria-hidden="true"></i>
                        <span>Roles - Task Panel</span>
                    </div>
                </Link>
                {/* </Dropdown.Item> */}
                {/* <Dropdown.Item> */}
                <Link to='/dashboard/zones'>
                    <div className='dropdownDiv'>
                        <i className="fa fa-building-o" aria-hidden="true"></i>
                        <span>Charts {"&"} Reports</span>
                    </div>
                </Link>
                {/* </Dropdown.Item> */}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default CustomDropDown
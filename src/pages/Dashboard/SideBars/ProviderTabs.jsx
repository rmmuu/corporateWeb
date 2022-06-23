import React, { useEffect, useState } from 'react'
import angelright_icon from "../../../assets/images/angelright.svg";
import ic_list_detail from "../../../assets/images/ic-list-detail.svg";
import SidebarDropDownOption from '../../../components/SidebarDropDownOption';
import { Link, useLocation } from 'react-router-dom';

const ProviderTabs = () => {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [changeStyle, setChangeStyle] = useState(pathname.split("/")[2] ? pathname.split("/")[2] : "company");

    useEffect(() => {
        setChangeStyle(pathname.split("/")[2])
    }, [pathname])



    return (
        <ul>
            <Link to='/dashboard/provider/orders'>
                <li>
                    <div>
                        <i class="fa fa-list" aria-hidden="true"></i>
                        <span className="ms-1 d-none d-sm-inline">ORDERS</span>
                    </div>
                    <img src={angelright_icon} alt="" />
                </li>
            </Link>
            <Link to='/dashboard/provider/employees'>
                <li>
                    <div>
                        <i className="fa fa-user-o" aria-hidden="true"></i>
                        <span className="ms-1 d-none d-sm-inline">EMPLOYEES</span>
                    </div>
                    <img src={angelright_icon} alt="" />
                </li>
            </Link>
            <Link to='/dashboard/provider/vehicles'>
                <li>
                    <div>
                        <i className="fa fa-car" aria-hidden="true"></i>
                        <span className="ms-1 d-none d-sm-inline">VEHICLES</span>
                    </div>
                    <img src={angelright_icon} alt="" />
                </li>
            </Link>
            <Link to='#'>
                <li style={{ position: 'relative' }} onClick={() => { setIsOpen(!isOpen) }}>
                    <div>
                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                        <span className="ms-1 d-none d-sm-inline" style={{ textTransform: "capitalize" }}>
                            ar Luis Enrique Corn...
                        </span>
                    </div>
                    <img src={angelright_icon} alt="" />
                    {
                        isOpen &&
                        <SidebarDropDownOption />
                    }
                </li>
            </Link>
        </ul>
    )
}

export default ProviderTabs
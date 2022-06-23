import React, { useEffect, useState } from 'react'
import angelright_icon from "../../../assets/images/angelright.svg";
import SidebarDropDownOption from '../../../components/SidebarDropDownOption';
import { Link, useLocation } from 'react-router-dom';

const ContractorTabs = () => {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [changeStyle, setChangeStyle] = useState(pathname.split("/")[2] ? pathname.split("/")[2] : "company");

    useEffect(() => {
        setChangeStyle(pathname.split("/")[2])
    }, [pathname])



    return (
        <ul>
        <Link to='/dashboard/company'>
            <li
                onClick={() => setChangeStyle("company")}
                className={changeStyle === "company" ? "activeLi" : ""}
            >
                <div>
                    <i className="fa fa-building-o" aria-hidden="true"></i>
                    <span className="ms-1 d-none d-sm-inline">contractors</span>
                </div>
                <img src={angelright_icon} alt="" />
            </li>
        </Link>
        <Link to='/dashboard/contractors-outlet'>
            <li>
                <div>
                    <i className="fa fa-file-text-o" aria-hidden="true"></i>
                    <span className="ms-1 d-none d-sm-inline">employees</span>
                </div>
                <img src={angelright_icon} alt="" />
            </li>
        </Link>
        <Link to='/dashboard/providers-outlet'>
            <li>
                <div>
                    <i className="fa fa-file-o" aria-hidden="true"></i>
                    <span className="ms-1 d-none d-sm-inline">vehicles</span>
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

export default ContractorTabs
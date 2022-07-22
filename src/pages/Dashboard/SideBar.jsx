
import sideLogo from '../../assets/images/assidebar_log.png';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EmployeeTabs from './SideBars/EmployeeTabs';
import ProviderTabs from './SideBars/ProviderTabs';
import ContractorTabs from './SideBars/ContractorTabs';

const SideBar = ({ user }) => {
    const { pathname } = useLocation();
    // const userType = user?.userType.name;
    // console.log(user)
    const userType = "EMPLOYEE"
    const [changeStyle, setChangeStyle] = useState(pathname.split("/")[2] ? pathname.split("/")[2] : "company");

    useEffect(() => {
        setChangeStyle(pathname.split("/")[2])
    }, [pathname])



    return (
        <div className='sidebar'>
            <img src={sideLogo} className="sideLogo" alt="sidelogo" />
            <div className="sideTabs">
                {userType === "EMPLOYEE" && <EmployeeTabs />}
                {userType === "provider" && <ProviderTabs />}
                {userType === "contractor" && <ContractorTabs />}
                <div className="sideBarFooter fixed-bottom">
                    <p>ALL RIGHTS RESERVED iEntry</p>
                    <p> Corporate@ 2021</p>
                </div>
            </div>
        </div >
    )
}
export default SideBar;
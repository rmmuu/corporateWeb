import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import contact_img from '../assets/images/id-badge.svg'
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../Apis/Authentication';

const SidebarDropDownOption = () => {
    const navigate = useNavigate();

    return (
        <div className="sidebar_option_container">
            <div className="sidebar_option_container_header">
                <img src={contact_img} alt="contact_img" />
                <div style={{ marginLeft: '0.5rem' }}>
                    <h6>Luis Enrique Cornejo Arreola</h6>
                    <p>Contador</p>
                </div>
            </div>
            <div className="sidebar_option_body">
                <div className="sidebar_option_body_item">
                    <Link to="/dashboard/company/notification-panel">
                        <p>NOTIFICATIONS</p>
                    </Link>
                    <NotificationsIcon />
                </div>
                <div className="sidebar_option_body_item">
                    <Link to="/dashboard/profile_provider">
                        <p>PROFILE</p>
                    </Link>
                    <PersonIcon />
                </div>
                <div className="sidebar_option_body_item">
                    <p onClick={() => logoutUser(navigate)}>LOG OUT</p>
                    <LogoutIcon />
                </div>
            </div>

        </div>
    )
}

export default SidebarDropDownOption
import React from 'react'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../Apis/Authentication';

const SidebarDropDownOption = () => {
    const navigate = useNavigate();
    
    return (
        <div className="sidebar_option_container">
            <div className="sidebar_option_container_header">
                <PermContactCalendarIcon />
                <div style={{ marginLeft: '0.5rem' }}>
                    <h6>Luis Enrique Cornejo Arreola</h6>
                    <p>Contador</p>
                </div>
            </div>
            <div className="sidebar_option_body">
                <div className="sidebar_option_body_item">
                    <Link to="/dashboard/notification_provider">
                        <p>NOTIFICATIONS</p>
                    </Link>
                    <NotificationsIcon />
                </div>
                <div className="sidebar_option_body_item">
                    <Link to="/dashboard/profile_provider">PROFILE</Link>
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
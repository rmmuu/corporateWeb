import React, { useState } from 'react'
import { Link } from "react-router-dom";
import NotificationsTab from './NotificationTab';
import AccessHistoryTab from './AccessHistoryTab';
import LogsTab from './LogsTab';

const NotificationPanel = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="userPanel">
            <div className='head'>
                <div className='headLeft'>
                    <Link to="/dashboard/company">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </Link>
                    <h2>NOTIFICATION PANEL</h2>
                </div>
                <div
                    style={{
                        display: "flex",
                        gridGap: "10px"
                    }}
                >
                    <button
                        className='p-0'
                        style={{
                            height: "38px"
                        }}
                    // onClick={() => setShow(true)}
                    >
                        Export to excel
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    {
                        toggleState === 1 ?
                            <Link to="/dashboard/company/create-notification">
                                <button
                                    className='p-0'
                                    style={{
                                        height: "38px",
                                        backgroundColor: "#65ABA0"
                                    }}
                                // onClick={() => setShow(true)}
                                >
                                    create notification
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </button>
                            </Link> : null
                    }
                </div>
            </div>
            <div className="container mt-5">
                <div className="row steps-row justify-content-between" id="pills-tab" role="tablist">
                    <div className="col-4 text-center" role="presentation">
                        <a
                            className={`steps btn ${toggleState === 1 ? 'btn-bordered' : ''}`}
                            onClick={() => toggleTab(1)}
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                        >
                            <span>Notifications</span>
                        </a>
                    </div>
                    <div className="col-4 text-center" role="presentation">
                        <a
                            className={`steps btn ${toggleState === 2 ? 'btn-bordered' : ''}`}
                            onClick={() => toggleTab(2)}
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                        >
                            <span>Access History</span>
                        </a>
                    </div>
                    <div className="col-4 text-center" role="presentation">
                        <a
                            className={`steps btn ${toggleState === 3 ? 'btn-bordered' : ''}`}
                            onClick={() => toggleTab(3)}
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                        >
                            <span>Logs</span>
                        </a>
                    </div>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div
                        className={`${toggleState === 1 ? 'tab-pane fade show active ' : 'tab-pane fade'}`}
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                    >
                        <NotificationsTab />
                    </div>
                    <div
                        className={`${toggleState === 2 ? 'tab-pane fade show active ' : 'tab-pane fade'}`}
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                    >
                        <AccessHistoryTab />
                    </div>

                    <div
                        className={`${toggleState === 3 ? 'tab-pane fade show active ' : 'tab-pane fade'}`}
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                    >
                        <LogsTab />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationPanel
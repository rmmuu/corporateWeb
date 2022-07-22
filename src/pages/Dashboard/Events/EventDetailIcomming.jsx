import React, { useEffect } from 'react'
import CancelEventModal from './CancelEventModal';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import {
    deleteUserInvitation,
    downloadSignature,
    getEventDetail,
    getUserInvitations,
    getVehiclesInvitations
} from '../../../reduxToolkit/EmployeeEvents/EmployeeEventsApi';
import NoEvent from './NoEvent';
import deleteIcon from '../../../assets/images/ic-delete-red.svg';
import signatureimg from '../../../assets/images/as.jpg';
import checkTrue from '../../../assets/images/ic-check.svg';
import checkFalse from '../../../assets/images/ic-cancel.svg';
// import { getComopanyRestructions } from '../../../Apis/companydata';
import { URL } from '../../../Apis/Constants';

const EventDetailIcomming = () => {
    const { id } = useParams();
    // const companyId = "a6bd2887-0f4a-4e5f-b0b5-000d9817ab23";
    const dispatch = useDispatch();
    const incomingsData = useSelector(state => state?.EmployeeEventsSlice?.eventDetail);
    const userInvitationsData = useSelector(state => state?.EmployeeEventsSlice?.userInvitationsData);
    const vehiclesInvitationsData = useSelector(state => state?.EmployeeEventsSlice?.vehiclesInvitationsData);
    const companyRestrictionsData = useSelector(state => state?.EmployeeEventsSlice?.companyRestrictionsData);
    console.log(userInvitationsData)

    const [showEvent, setShowEvent] = useState(false);
    // const [restructions, setRestructions] = useState();


    useEffect(() => {
        dispatch(getEventDetail(id));
        dispatch(getUserInvitations(id));
        dispatch(getVehiclesInvitations(id));
        // dispatch(downloadSignature({
        //     id: id,
        //     option: "event"
        // }))
    }, [])

    const handlePdfDownload = () => {
        console.log(id)
        fetch(`${URL}file-service/download-report-onu/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/pdf',
                "Authorization": `Bearer ${sessionStorage.getItem("bearerToken")}`,
            },
        })
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(
                    new Blob([blob]),
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    `FileName.pdf`,
                );
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            });
    }
    const handleuserInviteDelete = (userinvitId) => {
        dispatch(deleteUserInvitation(userinvitId));
        dispatch(getUserInvitations(id));
    }

    const checkStatus = (name) => {
        if (name === "EVENT_IN_VALIDATION") {
            return "#0C4523"
        } else if (name === "EVENT_CANCEL") {
            return "red"
        }
    }

    return (
        <div className='EventIncomingDeatil'>
            <div className="head">
                <div className='headLeft'>
                    <Link to="/dashboard/events-panel/events">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </Link>
                    <h2>Events Detail</h2>
                </div>
                <div className="d-flex">
                    {
                        companyRestrictionsData?.isOnuEvent ?
                            <button
                                className='btn btn-primary'
                                style={{ marginRight: "0.5rem", background: '#146F62', border: 'none' }}
                                onClick={handlePdfDownload}
                            >
                                DOWNLOAD PDF
                                <i style={{ marginLeft: '0.5rem' }} class="fa fa-download" aria-hidden="true"></i>
                            </button> : null
                    }
                    {
                        incomingsData?.status?.name !== "EVENT_CANCEL" ?
                            <button
                                className='btn btn-primary'
                                style={{ marginRight: "0.5rem", background: '#e24c4b', border: 'none', }}
                                onClick={() => setShowEvent(true)}
                            >
                                CANCEL EVENT
                                <i style={{ marginLeft: '0.5rem' }} class="fa fa-trash" aria-hidden="true"></i>
                                <CancelEventModal
                                    eventid={id}
                                    show={showEvent}
                                    onHide={() => setShowEvent(false)}
                                />
                            </button> : null
                    }
                </div>
            </div>

            <div className='row' style={{ marginTop: '1.4rem' }}>
                <div className="col-md-8" >
                    <p style={{ color: '#146F62', fontSize: '20px', letterSpacing: '7px', fontWeight: "bold", }}>DETAILS</p>
                    <div style={{ boxShadow: '0px 0px 4px #000000B3', borderRadius: '8px', padding: "15px", marginTop: '1rem', position: "relative" }}>
                        <div>
                            <span
                                style={{
                                    position: "absolute",
                                    top: "5px",
                                    right: '20px',
                                    fontSize: "12px",
                                    color: checkStatus(incomingsData?.status?.name),
                                    fontWeight: "bold"
                                }}
                            >
                                {incomingsData?.status?.name.replaceAll('_', ' ')}
                            </span>
                            <div
                                style={{
                                    width: "12px",
                                    height: '12px',
                                    backgroundColor: checkStatus(incomingsData?.status?.name),
                                    borderRadius: '50%',
                                    position: "absolute",
                                    top: "8px",
                                    right: '5px'
                                }}
                            >
                            </div>
                        </div>

                        <div>
                            <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>NAME</h6>
                            <p style={{ color: '#707070', fontSize: "16px" }}>{incomingsData?.user?.name}</p>
                        </div>

                        <div>
                            <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>PURPOSE OF VISIT</h6>
                            <p style={{ color: '#707070', fontSize: "16px" }}>{incomingsData?.accompanied}</p>
                        </div>

                        <div>
                            <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>DATES</h6>
                            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                <div>
                                    <p style={{ color: '#707070', fontSize: "16px" }}>DATE</p>
                                    <p style={{ color: '#707070', fontSize: "16px" }}>TIME</p>
                                    <p style={{ color: '#707070', fontSize: "16px" }}>DURATION</p>
                                </div>
                                <div>
                                    <p style={{ color: '#707070', fontSize: "16px" }}>
                                        {new Date(incomingsData?.createdAt).toJSON()?.split("T")[0]}
                                    </p>
                                    <p style={{ color: '#707070', fontSize: "16px" }}>
                                        {new Date(incomingsData?.createdAt).toJSON()?.split("T")[1].split(".")[0]}
                                    </p>
                                    <p style={{ color: '#707070', fontSize: "16px" }}>{incomingsData?.duration}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>ZONE</h6>
                            <p style={{ color: '#707070', fontSize: "16px" }}>{incomingsData?.reservation?.zone?.name}</p>
                        </div>


                    </div>

                </div>
                {/* host */}
                <div className="col-md-4">
                    <p style={{ color: '#146F62', fontSize: '20px', letterSpacing: '7px', fontWeight: "bold" }}>HOST</p>

                    <div style={{ boxShadow: '0px 0px 4px #000000B3', borderRadius: '8px', padding: "15px", marginTop: '1rem', position: "relative" }}>


                        <div style={{ marginTop: '0.7rem' }}>
                            <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>NAME</h6>
                            <p style={{ color: '#707070', fontSize: "16px" }}>{incomingsData?.host?.name}</p>
                        </div>

                        <div style={{ marginTop: '0.7rem' }}>
                            <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>EMAIL</h6>
                            <p style={{ color: '#707070', fontSize: "16px" }}>{incomingsData?.host?.email}</p>
                        </div>



                        <div style={{ marginTop: '0.7rem' }}>
                            <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>UNIT/SECTION</h6>
                            <p style={{ color: '#707070', fontSize: "16px" }}>{incomingsData?.unitSection}</p>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.8rem' }}>
                            <div>
                                <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>ACCOMPANIED</h6>
                                <p style={{ color: '#707070', fontSize: "16px" }}>{incomingsData?.accompanied}</p>
                            </div>
                            <div>
                                <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>ORGANIZATION</h6>
                                <p style={{ color: '#707070', fontSize: "16px" }}>{incomingsData?.name}</p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
                <div className="row">
                    <div className="col-md-5">
                        <p style={{ color: '#146F62', fontSize: '20px', letterSpacing: '7px', fontWeight: "bold", }}>COMMENTS</p>
                        <div style={{ boxShadow: '0px 0px 4px #000000B3', borderRadius: '8px', padding: "15px", marginTop: '1rem', position: "relative", height: '146px' }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div style={{ marginTop: '0.7rem' }}>
                                    <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>VISITOR'S COMMENT</h6>
                                    <p style={{ color: '#707070', fontSize: "16px" }}>{incomingsData?.visitorComment}</p>
                                </div>
                                <div style={{ marginTop: '0.7rem' }}>
                                    <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>VALIDATION'S COMMENT</h6>
                                    <p style={{ color: '#707070', fontSize: "16px" }}>{incomingsData?.validationComment}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        incomingsData?.validatedBy !== null ?
                            <div className="col-md-4">
                                <p style={{ color: '#146F62', fontSize: '20px', letterSpacing: '7px', fontWeight: "bold", }}>VALIDATED BY</p>
                                <div style={{ boxShadow: '0px 0px 4px #000000B3', borderRadius: '8px', padding: "15px", marginTop: '1rem', position: "relative", height: '146px' }}>

                                    <div >
                                        <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>NAME</h6>
                                        <p style={{ color: '#707070', fontSize: "16px" }}>Luis</p>
                                    </div>
                                    <div >
                                        <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>PHONE NUMBER</h6>
                                        <p style={{ color: '#707070', fontSize: "16px" }}>+524431232322</p>
                                    </div>
                                    <div >
                                        <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>ACTION</h6>
                                        <p style={{ color: '#707070', fontSize: "16px" }}>APPROVED</p>
                                    </div>
                                </div>
                            </div> : null
                    }
                    <div className="col-md-3">
                        <p style={{ color: '#146F62', fontSize: '20px', letterSpacing: '7px', fontWeight: "bold", }}>SIGNATURE</p>
                        <img
                            src={signatureimg}
                            style={{
                                width: "100%",
                                height: "9rem",
                                marginTop: "1rem",
                                borderRadius: "8px"
                            }}
                            alt="signature"
                        />
                    </div>
                </div>
            </div>
            {/* visitor */}

            <div style={{ marginTop: '1rem' }}>
                <p style={{ color: '#146F62', fontSize: '20px', letterSpacing: '7px', fontWeight: "bold", }}>VISITOR</p>
                <div className='remove_filter_visitor'>
                    {
                        userInvitationsData?.length !== 0 ?
                            <div className="eventTables" style={{ height: "15rem" }}>
                                <table style={{ width: "100%" }}>
                                    <thead>
                                        <th className='first'>name</th>
                                        <th>phone Number</th>
                                        <th>Role</th>
                                        <th>GZBADGE</th>
                                        <th>PLACE TO PICK UP</th>
                                        <th>SHARE PDF</th>
                                        <th className='last'>REMOVE</th>
                                    </thead>
                                    {
                                        userInvitationsData?.map(item => (
                                            <tr key={item.id}>
                                                <td className='first'>{item?.guest?.name}</td>
                                                <td>{item?.guest?.phoneNumber}</td>
                                                <td>{item?.guest?.userType?.name}</td>
                                                <td>{item?.gzBadge ? "Yes" : "No"}</td>
                                                <td>{item?.placeToPickUp}</td>
                                                <td>
                                                    {
                                                        item?.sharePdf ?
                                                            <img src={checkTrue} alt="checkTrue" /> :
                                                            <img src={checkFalse} alt="checkFalse" />
                                                    }
                                                </td>
                                                <td className='last'>
                                                    <img
                                                        src={deleteIcon}
                                                        alt="delete"
                                                        onClick={() => handleuserInviteDelete(item.id)}
                                                    />
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </table>
                            </div> :
                            <NoEvent title="visitors" />
                    }
                </div>
            </div>

            {/* vehicle */}
            {
                companyRestrictionsData?.isOnuEvent ?
                    <>
                        <p style={{ color: '#146F62', fontSize: '20px', letterSpacing: '7px', fontWeight: "bold", }}>VEHICLES</p>
                        <div className='remove_filter_visitor'>
                            {

                                vehiclesInvitationsData?.length !== 0 ?
                                    <div className="eventTables" style={{ height: "15rem" }}>
                                        <table style={{ width: "100%" }}>
                                            <thead>
                                                <th className='first'>name</th>
                                                <th>phone Number</th>
                                                <th>Role</th>
                                                <th>GZBADGE</th>
                                                <th>PLACE TO PICK UP</th>
                                                <th>SHARE PDF</th>
                                                <th className='last'>REMOVE</th>
                                            </thead>
                                            {
                                                vehiclesInvitationsData?.map(item => (
                                                    <tr key={item.id}>
                                                        <td className='first'>{item?.guest?.name}</td>
                                                        <td>{item?.guest?.phoneNumber}</td>
                                                        <td>{item?.guest?.userType?.name}</td>
                                                        <td>{item?.gzBadge ? "Yes" : "No"}</td>
                                                        <td>{item?.placeToPickUp}</td>
                                                        <td>
                                                            {
                                                                item?.sharePdf ?
                                                                    <img src={checkTrue} alt="checkTrue" /> :
                                                                    <img src={checkFalse} alt="checkFalse" />
                                                            }
                                                        </td>
                                                        <td className='last'>
                                                            <img src={deleteIcon} alt="delete" />
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </table>
                                    </div> :
                                    <NoEvent title="vehicles" />

                            }
                        </div>
                    </> : ""
            }
        </div>
    )
}

export default EventDetailIcomming
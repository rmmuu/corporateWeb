import React, { useEffect } from 'react'
import CancelEvent from './CancelEvent';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { deleteUserInvitation, getEventDetail, getUserInvitations, getVehiclesInvitations } from '../../../reduxToolkit/EmployeeEvents/EmployeeEventsApi';
import NoEvent from './NoEvent';
import deleteIcon from '../../../assets/images/ic-delete-red.svg';
import checkTrue from '../../../assets/images/ic-check.svg';
import checkFalse from '../../../assets/images/ic-cancel.svg';
import { getComopanyRestructions } from '../../../Apis/companydata';
import { URL } from '../../../Apis/Constants';

const EventDetailIcomming = () => {
    const { id } = useParams();
    const companyId = "bc9789f1-3f16-4759-851d-5501cc37ec97";
    const dispatch = useDispatch();
    const incomingsData = useSelector(state => state?.EmployeeEventsSlice?.eventDetail);
    const userInvitationsData = useSelector(state => state?.EmployeeEventsSlice?.userInvitationsData);
    const vehiclesInvitationsData = useSelector(state => state?.EmployeeEventsSlice?.vehiclesInvitationsData);
    console.log(vehiclesInvitationsData)

    const [showEvent, setShowEvent] = useState(false);
    const [restructions, setRestructions] = useState();


    useEffect(() => {
        dispatch(getEventDetail(id));
        dispatch(getUserInvitations(id));
        dispatch(getVehiclesInvitations(id));
        getComopanyRestructions(companyId).then(({ data: { data } }) => {
            setRestructions(data)
        })
    }, [])

    const handlePdfDownload = () => {
        fetch(`${URL}file-service/download-report-onu/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/pdf',
                "Authorization": `Bearer ${sessionStorage.getItem("bearerToken")}`,
            },
        })
            .then((response) => response.blob())
            .then((blob) => {
                // Create blob link to download
                const url = window.URL.createObjectURL(
                    new Blob([blob]),
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    `FileName.pdf`,
                );

                // Append to html link element page
                document.body.appendChild(link);

                // Start download
                link.click();

                // Clean up and remove the link
                link.parentNode.removeChild(link);
            });
    }
    const handleuserInviteDelete = (userinvitId) => {
        dispatch(deleteUserInvitation(userinvitId));
        dispatch(getUserInvitations(id));
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
                    <button
                        className='btn btn-primary'
                        style={{ marginRight: "0.5rem", background: '#146F62', border: 'none' }}
                        onClick={handlePdfDownload}
                    >
                        DOWNLOAD PDF
                        <i style={{ marginLeft: '0.5rem' }} class="fa fa-download" aria-hidden="true"></i>
                    </button>
                    <button
                        className='btn btn-primary'
                        style={{ marginRight: "0.5rem", background: '#e24c4b', border: 'none', }}
                        onClick={() => setShowEvent(true)}
                    >
                        CANCEL EVENT
                        <i style={{ marginLeft: '0.5rem' }} class="fa fa-trash" aria-hidden="true"></i>
                        <CancelEvent
                            eventid={id}
                            show={showEvent}
                            onHide={() => setShowEvent(false)}
                        />
                    </button>
                </div>
            </div>

            <div className='row' style={{ marginTop: '1.4rem' }}>
                <div className="col-md-8" >
                    <p style={{ color: '#146F62', fontSize: '20px', letterSpacing: '7px', fontWeight: "bold", }}>DETAILS</p>
                    <div style={{ boxShadow: '0px 0px 4px #000000B3', borderRadius: '8px', padding: "15px", marginTop: '1rem', position: "relative" }}>
                        <div>
                            <span style={{ position: "absolute", top: "5px", right: '20px', fontSize: "12px" }}>To Approve</span>
                            <div style={{ width: "12px", height: '12px', background: '#F2A100', borderRadius: '50%', position: "absolute", top: "8px", right: '5px' }}>

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
                                    <p style={{ color: '#707070', fontSize: "16px" }}>BE PUNTUAL</p>
                                </div>
                                <div style={{ marginTop: '0.7rem' }}>
                                    <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>VALIDATION'S COMMENT</h6>
                                    <p style={{ color: '#707070', fontSize: "16px" }}>NONE</p>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className="col-md-4">
                        <p style={{ color: '#146F62', fontSize: '20px', letterSpacing: '7px', fontWeight: "bold", }}>VALIDATED BY</p>
                        <div style={{ boxShadow: '0px 0px 4px #000000B3', borderRadius: '8px', padding: "15px", marginTop: '1rem', position: "relative", height: '146px' }}>

                            <div >
                                <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>NAME</h6>
                                <p style={{ color: '#707070', fontSize: "16px" }}>lcornejo@ibl.mx   </p>
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
                    </div>
                    <div className="col-md-3">
                        <p style={{ color: '#146F62', fontSize: '20px', letterSpacing: '7px', fontWeight: "bold", }}>SIGNATURE</p>
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
                restructions?.isOnuEvent ?
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
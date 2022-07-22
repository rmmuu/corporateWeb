import React, { useEffect } from 'react'
import search from '../../../assets/images/search.svg'
import cross from '../../../assets/images/ic-cancel.svg'
import dash from '../../../assets/images/ic-minus.svg'
import tick from '../../../assets/images/ic-check.svg'
import deleteIcon from '../../../assets/images/ic-delete-red.svg'
import companyImg from '../../../assets/images/companyImg.png'
import CancelEventModal from './CancelEventModal';
import { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserInvitation, getEventDetail, getUserInvitations, getVehiclesInvitations } from '../../../reduxToolkit/EmployeeEvents/EmployeeEventsApi';
import NoEvent from './NoEvent';
import { Modal } from 'react-bootstrap'


export const DeleteModal = (props) => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const handleInvitation = () => {
        dispatch(deleteUserInvitation(props?.inviteid)).then(() => {
            dispatch(getUserInvitations(id));
            props.onHide();
        });
    }
    return (
        <Modal
            className="filter_Event_model"
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='fiter_event_model_head'>
                <Modal.Title >
                    <h4 style={{ color: '#146F62', letterSpacing: "7px", fontSize: "20px" }}>REMOVE USER</h4>
                </Modal.Title>
                <hr />
                <i
                    class="fa fa-times"
                    aria-hidden="true"
                    style={{ cursor: "pointer" }}
                    onClick={() => props.onHide()}
                ></i>
            </Modal.Header>
            <Modal.Body>
                <p style={{ fontSize: '14px', textAlign: 'center', paddingBottom: "1.5rem" }}>
                    To drop de invitation should confirm the action.
                </p>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <button
                        style={{ border: "none", background: 'white', color: '#BC0000', fontWeight: 'bold' }}
                        onClick={() => props.onHide()}
                    >
                        Cancel
                    </button>
                    <button
                        style={{ background: '#146F62', color: "white", borderRadius: "4px", border: 'none', boxShadow: '0px 0px 4px #00000080', padding: "0 0.8rem" }}
                        onClick={handleInvitation}
                    >
                        CONFIRM
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

const EventDetailValidation = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const eventDetailData = useSelector(state => state?.EmployeeEventsSlice?.eventDetail);
    const userInvitationsData = useSelector(state => state?.EmployeeEventsSlice?.userInvitationsData);
    console.log(userInvitationsData)

    const [showEvent, setShowEvent] = useState(false);
    const [invitationId, setInvitationId] = useState();
    const [deleteShow, setDeleteShow] = useState(false);
    const [addUserquery, setAddUserquery] = useState('');

    useEffect(() => {
        dispatch(getEventDetail(id));
        dispatch(getUserInvitations(id));
        dispatch(getVehiclesInvitations(id));
        // getComopanyRestructions(companyId).then(({ data: { data } }) => {
        //     setRestructions(data)
        // })
    }, [])

    const checkStatus = (name) => {
        if (name === "EVENT_IN_VALIDATION") {
            return "#0C4523"
        } else if (name === "EVENT_CANCEL") {
            return "red"
        }
    }

    return (
        <div className='EventValidationDeatil'>
            <div className="head">
                <div className='headLeft'>
                    <Link to="/dashboard/events-panel/events">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </Link>
                    <h2>Events Detail</h2>
                </div>
                {
                    eventDetailData?.status?.name !== "EVENT_CANCEL" ?
                        <div className="d-flex">
                            <button
                                className='btn btn-primary'
                                style={{ marginRight: "0.5rem", background: '#e24c4b', border: 'none', }}
                                onClick={() => setShowEvent(true)}
                            >
                                CANCEL EVENT
                                <i style={{ marginLeft: '0.5rem' }} class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div> : null
                }
                <CancelEventModal
                    eventid={id}
                    show={showEvent}
                    onHide={() => setShowEvent(false)}
                />
            </div>

            <div className='row' style={{ marginTop: '1.4rem' }}>
                <div className="col-md-8" >
                    <p style={{ color: '#146F62', fontSize: '20px', letterSpacing: '7px', fontWeight: "bold", }}>DETAILS</p>
                    <div style={{ boxShadow: '0px 0px 4px #000000B3', borderRadius: '8px', padding: "15px", marginTop: '1rem', position: "relative", height: "180px" }}>
                        <div>
                            <span
                                style={{
                                    position: "absolute",
                                    top: "5px",
                                    right: '20px',
                                    fontSize: "12px",
                                    color: checkStatus(eventDetailData?.status?.name),
                                    fontWeight: "bold"
                                }}
                            >
                                {eventDetailData?.status?.name.replaceAll('_', ' ')}
                            </span>
                            <div
                                style={{
                                    width: "12px",
                                    height: '12px',
                                    backgroundColor: checkStatus(eventDetailData?.status?.name),
                                    borderRadius: '50%',
                                    position: "absolute",
                                    top: "8px",
                                    right: '5px'
                                }}
                            >
                            </div>
                        </div>

                        <div style={{ marginTop: '0.7rem' }}>
                            <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>EVENT´S NAME</h6>
                            <p style={{ color: '#707070', fontSize: "16px" }}>{eventDetailData?.name}</p>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div style={{ marginTop: '0.7rem' }}>
                                    <h6 style={{ color: '#707070', fontSize: "14px", fontWeight: "bold" }}>DATES</h6>
                                    <p
                                        style={{
                                            color: '#707070',
                                            fontSize: "16px"
                                        }}
                                    >
                                        <span style={{ color: '#707070', fontSize: "14px", fontWeight: "bold", marginRight: "1rem" }}>FROM</span>
                                        {new Date(eventDetailData?.startDate).toJSON()?.split("T")[0]}
                                        <span style={{ color: '#707070', fontSize: "14px", fontWeight: "bold", margin: "0 5px" }}>AT</span>
                                        {new Date(eventDetailData?.startDate).toJSON()?.split("T")[1].split(".")[0]}
                                    </p>
                                    <p
                                        style={{
                                            color: '#707070',
                                            fontSize: "16px"
                                        }}
                                    >
                                        <span style={{ color: '#707070', fontSize: "14px", fontWeight: "bold", marginRight: "1rem" }}>FROM</span>
                                        {new Date(eventDetailData?.endDate).toJSON()?.split("T")[0]}
                                        <span style={{ color: '#707070', fontSize: "14px", fontWeight: "bold", margin: "0 5px" }}>AT</span>
                                        {new Date(eventDetailData?.endDate).toJSON()?.split("T")[1].split(".")[0]}
                                    </p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div>
                                    <h6 style={{ color: '#707070', fontSize: "14px", fontWeight: "bold" }}>HOST</h6>
                                    <p style={{ color: '#707070', fontSize: "16px" }}>{eventDetailData?.host?.name}</p>
                                </div>
                                <div>
                                    <h6 style={{ color: '#707070', fontSize: "14px", fontWeight: "bold" }}>VALIDATED BY</h6>
                                    {
                                        eventDetailData?.status?.id !== 32 && eventDetailData?.validatedBy === null ?
                                            null :
                                            <p style={{ color: '#707070', fontSize: "16px" }}>
                                                {eventDetailData?.validatedBy === null ? "IN VALIDATION PROCESS" : eventDetailData?.validatedBy}
                                            </p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* host */}
                <div className="col-md-4">
                    <p style={{ color: '#146F62', fontSize: '20px', letterSpacing: '7px', fontWeight: "bold" }}>RESERVATION</p>
                    <div style={{ boxShadow: '0px 0px 4px #000000B3', borderRadius: '8px', padding: "15px", marginTop: '1rem', position: "relative", height: "180px" }}>
                        <div style={{ marginTop: '0.7rem' }}>
                            <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>COMMON AREA</h6>
                            <p style={{ color: '#707070', fontSize: "16px" }}>{eventDetailData?.reservation?.zone?.name}</p>
                        </div>
                        <div style={{ marginTop: '0.7rem' }}>
                            <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>DATE</h6>
                            <p style={{ color: '#707070', fontSize: "16px" }}>
                                {new Date(eventDetailData?.reservation?.createdAt).toJSON()?.split("T")[0]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* invitaion */}
            <div style={{ marginTop: "1rem" }}>
                <p style={{ color: '#146F62', fontSize: '20px', letterSpacing: '7px', fontWeight: "bold", }}>INVITATIONS</p>
                <div>
                    <p>Total <span style={{ color: '#263238', fontWeight: 'bold' }}>{userInvitationsData.length}</span></p>
                </div>
            </div>
            {/* listing */}
            <div style={{ marginBottom: "2rem" }}>
                {
                    userInvitationsData?.length !== 0 ?
                        <>
                            <div className="row employe-log-module" style={{ marginTop: '0.5rem' }}>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="x"
                                        onChange={(e) => setAddUserquery(e.target.value)}
                                        placeholder="Type a name to filter"
                                    />
                                    <span class="input-group-btn">
                                        <button
                                            class="btn btn-default"
                                            type="button"
                                        >
                                            <img src={search} alt="" />
                                        </button>
                                    </span>
                                </div>
                            </div>
                            {
                                userInvitationsData?.filter(user => {
                                    if (addUserquery === '') {
                                        return user;
                                    } else if (user?.guest?.name.toLowerCase().includes(addUserquery.toLowerCase())) {
                                        return user;
                                    }
                                })?.map(user => (
                                    <div style={{ boxShadow: "0px 0px 2px #000000B0", borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '.4rem 1rem', width: "350px", marginTop: '1rem' }}>
                                        <div style={{ display: "flex", alignItems: 'center' }}>
                                            <img src={companyImg} alt="" width="24px" height="24px" style={{ borderRadius: '50%' }} />
                                            <div style={{ marginLeft: "1rem", fontSize: '12px' }}>
                                                <p><span style={{ color: "#707070" }}>Nombre: </span> {user?.guest?.name}</p>
                                                <p><span style={{ color: "#707070" }}>Celular: </span>  {user?.guest?.phoneNumber}</p>
                                            </div>
                                        </div>
                                        <div>
                                            {
                                                user?.status?.id === 37 ? <img src={dash} alt="imgs" /> :
                                                    user?.status?.id === 38 ? <img src={tick} alt="imgs" /> :
                                                        user?.status?.id === 39 ? <img src={cross} alt="imgs" /> : null
                                            }
                                            <img
                                                src={deleteIcon}
                                                style={{ marginLeft: "2rem", cursor: "pointer" }}
                                                onClick={() => {
                                                    setInvitationId(user.id);
                                                    setDeleteShow(true);
                                                }}
                                                alt="imgs"
                                            />
                                        </div>
                                    </div>
                                ))
                            }
                        </> :
                        <NoEvent title="user Invitations" />
                }
            </div>
            <DeleteModal
                show={deleteShow}
                onHide={() => setDeleteShow(false)}
                inviteid={invitationId}
            />
        </div>
    )
}

export default EventDetailValidation
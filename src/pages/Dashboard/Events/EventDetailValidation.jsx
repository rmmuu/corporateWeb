import React from 'react'
import search from '../../../assets/images/search.svg'
import companyImg from '../../../assets/images/companyImg.png'
import CancelEvent from './CancelEvent';
import { useState } from "react";
import { Link } from 'react-router-dom';

const EventDetailValidation = () => {
    const [showEvent, setShowEvent] = useState(false);

    const handleCloseEvent = () => setShowEvent(false);
    const handleShowEvent = () => setShowEvent(true);

    return (
        <div className='EventValidationDeatil'>

            <div className="head">
                <div className='headLeft'>
                    <Link to="/dashboard/events-panel/events">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </Link>
                    <h2>Events Detail</h2>
                </div>
                <div className="d-flex">
                    <button className='btn btn-primary' style={{ marginRight: "0.5rem", background: '#e24c4b', border: 'none', }} onClick={() => handleShowEvent(true)}>
                        CANCEL EVENT
                        <i style={{ marginLeft: '0.5rem' }} class="fa fa-trash" aria-hidden="true"></i>
                        <CancelEvent show={showEvent} onHide={() => handleCloseEvent(false)} />
                    </button>
                </div>
            </div>

            <div className='row' style={{ marginTop: '1.4rem' }}>
                <div className="col-md-7" >
                    <p style={{ color: '#146F62', fontSize: '20px', letterSpacing: '7px', fontWeight: "bold", }}>DETAILS</p>
                    <div style={{ boxShadow: '0px 0px 4px #000000B3', borderRadius: '8px', padding: "15px", marginTop: '1rem', position: "relative", height: "180px" }}>
                        <div>
                            <span style={{ position: "absolute", top: "5px", right: '20px', fontSize: "12px", color: '#0C4523', fontWeight: "bold" }}>Active</span>
                            <div style={{ width: "12px", height: '12px', background: '#0C4523', borderRadius: '50%', position: "absolute", top: "8px", right: '5px' }}>

                            </div>
                        </div>

                        <div style={{ marginTop: '0.7rem' }}>
                            <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>NAME</h6>
                            <p style={{ color: '#707070', fontSize: "16px" }}>Luis´s Pool Party</p>
                        </div>

                        <div style={{ marginTop: '0.7rem' }}>
                            <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>PURPOSE OF VISIT</h6>
                            <p style={{ color: '#707070', fontSize: "16px" }}>Meet people</p>
                        </div>



                        <div style={{ marginTop: '0.7rem' }}>
                            <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>ZONE</h6>
                            <p style={{ color: '#707070', fontSize: "16px" }}>GYM</p>
                        </div>


                    </div>

                </div>
                {/* host */}
                <div className="col-md-5">
                    <p style={{ color: '#146F62', fontSize: '20px', letterSpacing: '7px', fontWeight: "bold" }}>RESERVATION</p>

                    <div style={{ boxShadow: '0px 0px 4px #000000B3', borderRadius: '8px', padding: "15px", marginTop: '1rem', position: "relative", height: "180px" }}>


                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                            <div>
                                <div style={{ marginTop: '0.7rem' }}>
                                    <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>COMMON AREA</h6>
                                    <p style={{ color: '#707070', fontSize: "16px" }}>Main Meeting</p>
                                </div>

                                <div style={{ marginTop: '0.7rem' }}>
                                    <h6 style={{ color: '#707070', fontSize: "15px", fontWeight: "bold" }}>DATE</h6>
                                    <p style={{ color: '#707070', fontSize: "16px" }}>08/04/2021</p>
                                </div>
                            </div>
                            <div>
                                <img src={companyImg} alt="" width="248px" height="141px" style={{ borderRadius: '8px' }} />
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            {/* invitaion */}
            <div style={{ marginTop: "1rem" }}>
                <p style={{ color: '#146F62', fontSize: '20px', letterSpacing: '7px', fontWeight: "bold", }}>INVITATIONS</p>
                <div>
                    <p>Total <span style={{ color: '#263238', fontWeight: 'bold' }}>105</span></p>
                </div>
                <div className="row employe-log-module" style={{ marginTop: '0.5rem' }}>
                    <div className="col-12">
                        <input type="text" class="form-control" name="x" placeholder="Type a name to filter" />
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button"><img src={search} alt="" /></button>
                        </span>
                    </div>
                </div>
            </div>
            {/* listing */}
            <div style={{ marginBottom: "2rem" }}>
                <div style={{ boxShadow: "0px 0px 2px #000000B0", borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4rem', width: "383px", marginTop: '1rem' }}>
                    <div style={{ display: "flex", alignItems: 'center' }}>
                        <img src={companyImg} alt="" width="24px" height="24px" style={{ borderRadius: '50%' }} />
                        <div style={{ marginLeft: "1rem", fontSize: '12px' }}>
                            <p><span style={{ color: "#707070" }}>Nombre: </span> Luis Enrique Cornejo</p>
                            <p><span style={{ color: "#707070" }}>Celular: </span>  4427065909</p>
                        </div>

                    </div>
                    <i class="fa fa-times" aria-hidden="true" style={{ color: 'red' }}></i>
                    <i class="fa fa-trash" aria-hidden="true" style={{ color: 'red' }}></i>

                </div>

                <div style={{ boxShadow: "0px 0px 2px #000000B0", borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4rem', width: "383px", marginTop: '1rem' }}>
                    <div style={{ display: "flex", alignItems: 'center' }}>
                        <img src={companyImg} alt="" width="24px" height="24px" style={{ borderRadius: '50%' }} />
                        <div style={{ marginLeft: "1rem", fontSize: '12px' }}>
                            <p><span style={{ color: "#707070" }}>Nombre: </span> Luis Enrique Cornejo</p>
                            <p><span style={{ color: "#707070" }}>Celular: </span>  4427065909</p>
                        </div>

                    </div>

                    <i class="fa fa-check" aria-hidden="true" style={{ color: 'green' }}></i>
                    <i class="fa fa-trash" aria-hidden="true" style={{ color: 'red' }}></i>


                </div>

                <div style={{ boxShadow: "0px 0px 2px #000000B0", borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4rem', width: "383px", marginTop: '1rem' }}>
                    <div style={{ display: "flex", alignItems: 'center' }}>
                        <img src={companyImg} alt="" width="24px" height="24px" style={{ borderRadius: '50%' }} />
                        <div style={{ marginLeft: "1rem", fontSize: '12px' }}>
                            <p><span style={{ color: "#707070" }}>Nombre: </span> Luis Enrique Cornejo</p>
                            <p><span style={{ color: "#707070" }}>Celular: </span>  4427065909</p>
                        </div>

                    </div>

                    <i class="fa fa-minus" aria-hidden="true" style={{ color: 'gray' }}></i>
                    <i class="fa fa-trash" aria-hidden="true" style={{ color: 'red' }}></i>

                </div>

                <div style={{ boxShadow: "0px 0px 2px #000000B0", borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4rem', width: "383px", marginTop: '1rem' }}>
                    <div style={{ display: "flex", alignItems: 'center' }}>
                        <img src={companyImg} alt="" width="24px" height="24px" style={{ borderRadius: '50%' }} />
                        <div style={{ marginLeft: "1rem", fontSize: '12px' }}>
                            <p><span style={{ color: "#707070" }}>Nombre: </span> Luis Enrique Cornejo</p>
                            <p><span style={{ color: "#707070" }}>Celular: </span>  4427065909</p>
                        </div>

                    </div>
                    <i class="fa fa-times" aria-hidden="true" style={{ color: 'red' }}></i>
                    <i class="fa fa-trash" aria-hidden="true" style={{ color: 'red' }}></i>

                </div>
            </div>


        </div>
    )
}

export default EventDetailValidation
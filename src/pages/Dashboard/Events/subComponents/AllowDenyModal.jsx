import React from 'react'
import { Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { allowDenyEvent } from '../../../../reduxToolkit/EmployeeEvents/EmployeeEventsApi';

const AllowDenyModal = (props) => {
    const dispatch = useDispatch();
    // console.log(props?.eventid)

    const handleCancelAllow = (option) => {
        const body = {
            id: props.eventid,
            option: option
        }
        dispatch(allowDenyEvent(body));
        props.onHide();
    }

    return (
        <div>
            {/* model for filter */}
            <Modal
                className="filter_Event_model"
                {...props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className='fiter_event_model_head'>
                    <Modal.Title >
                        <h4 style={{ color: '#146F62', letterSpacing: "7px", fontSize: "20px" }}>ALLOW EVENT</h4>
                    </Modal.Title>
                    <hr />
                    <i
                        class="fa fa-times"
                        aria-hidden="true"
                        onClick={() => props.onHide()}
                    ></i>
                </Modal.Header>
                <Modal.Body>
                    <p style={{ fontSize: '14px', textAlign: 'center' }}>
                        DO YOU LIKE TO PERMITE THE EVENT FIRST MEETING ON FRIDAY 29, NOVEMBER 2021 AT 16 PM HOURS?
                    </p>
                    <div style={{ display: 'flex', justifyContent: "space-between" }}>
                        <button
                            style={{ border: "none", background: 'white', color: '#BC0000', fontWeight: 'bold' }}
                            onClick={() => handleCancelAllow("34")}
                        >
                            NOT ALLOW
                        </button>
                        <button
                            style={{ background: '#146F62', color: "white", borderRadius: "4px", border: 'none', boxShadow: '0px 0px 4px #00000080', padding: "0 0.8rem" }}
                            onClick={() => handleCancelAllow("33")}
                        >
                            ALLOW
                        </button>
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default AllowDenyModal
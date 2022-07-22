import React from 'react'
import { Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { cancelEvent, GetIncomingEventsPageable, GetValidationEventsPageable } from '../../../reduxToolkit/EmployeeEvents/EmployeeEventsApi';

const CancelEventModal = (props) => {
    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(cancelEvent(props?.eventid)).then(() => {
            var someDate = new Date();
            var numberOfDaysToAdd = 16;
            var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
            // console.log(new Date(result))
            const d = new Date(result);
            let time_in_miliseconds = Math.round(d.getTime());

            const body = {
                date: time_in_miliseconds,
                pagination: {
                    "order": true,
                    "page": 0,
                    "size": 10,
                    "sortBy": "id"
                }
            }
            dispatch(GetValidationEventsPageable(body));
            dispatch(GetIncomingEventsPageable(body));
            props.onHide();
        })

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
                    <h4 style={{ color: '#146F62', letterSpacing: "7px", fontSize: "20px" }}>CANCEL EVENT</h4>
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
                <p style={{ fontSize: '14px', textAlign: 'center' }}>
                    All de invitations and the reservation will be deleted too. Please confirm to apply.
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
                        onClick={handleCancel}
                    >
                        APPLY
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default CancelEventModal
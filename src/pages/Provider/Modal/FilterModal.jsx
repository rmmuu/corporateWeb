import React from 'react'
import { Modal } from "react-bootstrap";

const FilterModal = (props) => {
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


                        <h4>Filters</h4>

                    </Modal.Title>
                    <hr />
                    <i class="fa fa-times" aria-hidden="true" onClick={() => { props.onHide() }} ></i>
                    {/* <img onClick={() => { props.onHide() }} className="modalClose" src={""} alt="" /> */}
                </Modal.Header>

                <Modal.Body className="filter_event_model_body">
                    <p>ATTRIBUTES</p>
                    <div className='filter_event_model_form'>

                        <select name="orderby" id="" placeholder='Company Name'>
                            <option value="">Order by</option>
                            <option value="name">Name</option>
                            <option value="zone">Zone</option>
                            <option value="host">Host</option>
                        </select>

                        <select name="Sort" id="" placeholder='ASC'>
                            <option value="">Sort</option>
                            <option value="name">Name</option>
                            <option value="zone">Zone</option>
                            <option value="host">Host</option>
                        </select>
                    </div>


                </Modal.Body>

            </Modal>
        </div>
    )
}

export default FilterModal
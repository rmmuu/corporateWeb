import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import filter from "../../assets/images/filter.svg";

const AllOrderProvider = () => {
    return (
        <div className='all_order_provider mt-4'>
            {/* Header */}
            <div className="top_header_provider">
                <h2>ORDERS</h2>
                <div>

                    <button className="btn btn-primary filter">
                        <img src={filter} alt="" />
                    </button>
                </div>
            </div>
            {/* order list body */}
            <div className="all_order_body_container ">
                {/* in transit */}
                <div className="order_list_card">

                    <div className="status">
                        <p> IN TRANSIT </p>
                        <div className='status_transit'></div>
                    </div>

                    <div className='courier_info'>
                        <h4>COURIER INFORMATION</h4>
                        <h6><span>GTM |</span> Servicios Especializados Agropecuarios</h6>
                        <p>Company</p>
                        <h6>Luis Enrique Cornejo Arreola</h6>
                        <p>Employee</p>
                        <h6><span>KIA Rio 2018 |</span> ULX-562-8C</h6>
                        <p>Vehicle</p>
                    </div>
                    <div className='delivery_info mt-1'>
                        <h4>DELIVERY INFORMATION</h4>
                        <div className="item_container">
                            <div className='item_name'>
                                <p>ETA</p>
                                <p>Corporate</p>
                                <p>Item</p>
                                <p>Description </p>
                            </div>
                            <div className='item_data'>
                                <h4>26/08/2023 11:30</h4>
                                <h4>IBL Corporate</h4>
                                <h4>5 boxes of Soap</h4>
                                <h4>Take care, ítems fragile</h4>
                            </div>
                        </div>


                    </div>


                    <div className='link'>
                        <NavLink to="/dashboard/provider/order-detail">VIEW DETAILS <i className='fa fas-arrow-right'></i></NavLink>

                    </div>
                </div>
                {/* deleveed */}
                <div className="order_list_card">

                    <div className="status_d">
                        <p> DELIVERED </p>
                        <div className='status_deliver'></div>
                    </div>

                    <div className='courier_info'>
                        <h4>COURIER INFORMATION</h4>
                        <h6><span>GTM |</span> Servicios Especializados Agropecuarios</h6>
                        <p>Company</p>
                        <h6>Luis Enrique Cornejo Arreola</h6>
                        <p>Employee</p>
                        <h6><span>KIA Rio 2018 |</span> ULX-562-8C</h6>
                        <p>Vehicle</p>
                    </div>
                    <div className='delivery_info mt-1'>
                        <h4>DELIVERY INFORMATION</h4>
                        <div className="item_container">
                            <div className='item_name'>
                                <p>ETA</p>
                                <p>Corporate</p>
                                <p>Item</p>
                                <p>Description </p>
                            </div>
                            <div className='item_data'>
                                <h4>26/08/2023 11:30</h4>
                                <h4>IBL Corporate</h4>
                                <h4>5 boxes of Soap</h4>
                                <h4>Take care, ítems fragile</h4>
                            </div>
                        </div>
                    </div>
                    <div className='delivery_info mt-1'>
                        <h4>RECEIVED INFORMATION</h4>
                        <div className="item_container">
                            <div className='item_name'>
                                <p>Received By</p>
                                <p>Delivery Date</p>

                            </div>
                            <div className='item_data'>
                                <h4>Marco Polo Perez</h4>
                                <h4>26/08/2023 11:45</h4>

                            </div>
                        </div>
                    </div>



                    <div className='link'>
                        <NavLink to="/dashboard/provider/order-detail">VIEW DETAILS <i className='fa fas-arrow-right'></i></NavLink>

                    </div>
                </div>
                {/* to complete */}
                <div className="order_list_card">

                    <div className="status_c">
                        <p> TO COMPLETE</p>
                        <div className='status_complete'></div>
                    </div>

                    <div className='courier_info'>
                        <h4>COURIER INFORMATION</h4>
                        <h6><span>GTM |</span> Servicios Especializados Agropecuarios</h6>
                        <p>Company</p>

                    </div>
                    <div className='delivery_info mt-1'>
                        <h4>DELIVERY INFORMATION</h4>
                        <div className="item_container">
                            <div className='item_name'>
                                <p>ETA</p>
                                <p>Corporate</p>
                                <p>Item</p>
                                <p>Description </p>
                            </div>
                            <div className='item_data'>
                                <h4>26/08/2023 11:30</h4>
                                <h4>IBL Corporate</h4>
                                <h4>5 boxes of Soap</h4>
                                <h4>Take care, ítems fragile</h4>
                            </div>
                        </div>
                    </div>



                    <div className='link'>
                        <Link to="/dashboard/provider/complete-order">COMPLETE ORDER <i className='fa fas-arrow-right'></i></Link>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AllOrderProvider
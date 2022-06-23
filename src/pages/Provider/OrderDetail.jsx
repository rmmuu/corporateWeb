import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const OrderDetail = () => {
    return (
        <div className="order_detail_container">
            <div className="top_header_provider">
                <h2>
                    <Link to="/dashboard/provider/providers-outlet">
                        <ArrowBackIcon
                            style={{
                                color: "#146F62",
                                fontSize: "30px",
                                marginRight: "30px",
                            }}
                        />
                    </Link>
                    ORDER DETAILS
                </h2>
                <div className='btn_with_icon'>
                    <button className='add'>UPDATE ORDER <i class="fa fa-floppy-o" aria-hidden="true"></i></button>
                </div>

            </div>

            <div className='order_info_conatiner'>
                <div className='status'>
                    <p>TO DELIVER</p>
                    <div className='status_icon'></div>
                </div>
                <div className='inner_container'>
                    <div className='order_info_items_left'>
                        <h5>Order<span>#104-SDAS</span></h5>
                        <div className='order_info_item_left'>
                            <h4>Luis Enrique Cornejo Arreola</h4>
                            <p>Contractor</p>
                        </div>
                        <div className='order_info_item_left'>
                            <h4>lcornejo@ibl.mx</h4>
                            <p>Contractor</p>
                        </div>
                        <div className='order_info_item_left'>
                            <h4>4427265969</h4>
                            <p>Celular</p>
                        </div>

                    </div>
                    <div className='order_info_items_right'>
                        <div className='order_info_item-right'>
                            <p>Delivery Date</p>
                            <h4>25/05/2021</h4>
                        </div>
                        <div className='order_info_item-right'>
                            <p>Corporate</p>
                            <h4>IBL Corporate</h4>
                        </div>
                    </div>

                </div>


            </div>

            <div className='order_info_section'>
                <div className='order_info_employee'>
                    <h3>EMPLOYEE</h3>
                    <div className="card_container mt-4">
                        <div className="card_header">

                            <div className="left_active">
                                <p>ACTIVE</p>
                                <div className="status_active"></div>
                            </div>
                        </div>
                        <div className="card_body">
                            <img src="" alt="" />
                            <div className="card_body_items">
                                <div className="card_body_item">
                                    <h5>Name</h5>
                                    <p>Andrea Itzel González</p>
                                </div>
                                <div className="card_body_item">
                                    <h5>Job title</h5>
                                    <p>Contador</p>
                                </div>
                                <div className="card_body_item">
                                    <h5>Gender</h5>
                                    <p>Female</p>
                                </div>
                                <div className="card_body_item">
                                    <h5>Email</h5>
                                    <p>aitzel.2125@gmail.com</p>
                                </div>
                                <div className="card_body_item">
                                    <h5>Number</h5>
                                    <p>442-568-89-41</p>
                                </div>
                                <div className="card_footer">
                                    <Link to="">Employee Detail</Link>
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='order_info_vehicle'>
                    <h3>VEHICLE</h3>
                    <div className="card_container mt-4" >
                        <div className="card_header">

                            <div className="left_active">
                                <p>ACTIVE</p>
                                <div className="status_active"></div>
                            </div>
                        </div>
                        <div className="card_body">
                            <img src="" alt="" />
                            <div className="card_body_items">
                                <div className="card_body_item">
                                    <h5>Brand</h5>
                                    <p>KIA</p>
                                </div>
                                <div className="card_body_item">
                                    <h5>Sub-Brand</h5>
                                    <p>Rio</p>
                                </div>
                                <div className="card_body_item">
                                    <h5>Model</h5>
                                    <p>2018</p>
                                </div>
                                <div className="card_body_item">
                                    <h5>Color</h5>
                                    <p>Electric Blue</p>
                                </div>
                                <div className="card_body_item">
                                    <h5>Plates</h5>
                                    <p>ULX-568-L</p>
                                </div>
                                <div className="card_body_item">
                                    <h5>Type</h5>
                                    <p>Sedan</p>
                                </div>
                                <div className="card_body_item">
                                    <h5>Corporate</h5>
                                    <p>IBL</p>
                                </div>
                                <div className="card_footer">
                                    <Link to="/dashboard/provider/vehicles-details">Vehicle Details</Link>
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail
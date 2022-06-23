import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import filter from "../../assets/images/filter.svg";


const AllVehiclesProvider = () => {
    const [vehicles, setVehicles] = useState(["", "", "", "", "", "", "", ""])
    return (
        <div className="main_container_vehicle">
            {/* Header */}
            <div className="top_header_vehicle">
                <h2>VEHICLES</h2>
                <div>
                    <Link to='/dashboard/provider/add-vehicles'>
                        <button className='add'>ADD VEHICLE</button>
                    </Link>
                    <button className="btn btn-primary filter">
                        <img src={filter} alt="" />
                    </button>
                </div>

            </div>
            {/* search bar vehicle provider*/}
            <div className="row  mt-4">
                <div className="col-12">
                    <input type="text" class="form-control" name="x" placeholder="Type to search someone ..." />
                    <span class="search_btn">
                        <button class="btn btn-default" type="button">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </span>
                </div>
            </div>
            {/* body all employee */}
            <div className='list_employees'>
                {
                    vehicles.map((item, i) => (
                        <div className="card_container mt-4" key={i}>
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
                    ))
                }


            </div>


        </div>
    )
}

export default AllVehiclesProvider
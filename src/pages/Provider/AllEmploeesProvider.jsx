import React from 'react'
import { Link } from 'react-router-dom';
import filter from "../../assets/images/filter.svg";


const AllEmploeesProvider = () => {
    return (
        <div className="main_container_provider">
            {/* Header */}
            <div className="top_header_provider">
                <h2>EMPLOYEES</h2>
                <div>
                    <Link to="/dashboard/provider/create-employee">
                        <button className='add'>ADD EMPLOYEE</button>
                    </Link>
                    <button className="btn btn-primary filter">
                        <img src={filter} alt="" />
                    </button>
                </div>

            </div>
            {/* search bar Employeee provider*/}
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
                                <Link to="/dashboard/provider/provider-order-detail">Employee Detail</Link>
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card_container mt-4">
                    <div className="card_header">

                        <div className="left_validating">
                            <p>VALIDATING DOCUMENTS</p>
                            <div className="status_validating"></div>
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
                <div className="card_container mt-4">
                    <div className="card_header">

                        <div className="left_vacation">
                            <p>VACATIONS</p>
                            <div className="status_vacation"></div>
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
                <div className="card_container mt-4">
                    <div className="card_header">

                        <div className="left_validating">
                            <p>VALIDATING DOCUMENTS</p>
                            <div className="status_validating"></div>
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
                <div className="card_container mt-4">
                    <div className="card_header">

                        <div className="left_vacation">
                            <p>VACATIONS</p>
                            <div className="status_vacation"></div>
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
                <div className="card_container mt-4">
                    <div className="card_header">

                        <div className="left_validating">
                            <p>VALIDATING DOCUMENTS</p>
                            <div className="status_validating"></div>
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


        </div>
    )
}

export default AllEmploeesProvider
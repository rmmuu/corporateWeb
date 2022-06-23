import React from 'react'

const VehicleDetail = () => {

    return (
        <>
            <div className="vehicle_container">
                <div className="vehicle_continer_body">
                    <div className="card_header">

                        <div className="left_active">
                            <p>ACTIVE</p>
                            <div className="status_active"></div>
                        </div>
                    </div>

                    <div className='pic_top'>
                        <img src="https://avatars.githubusercontent.com/u/51259303?s=400&u=e168c8631fac44b5e8279c78cce26a9a10098f5d&v=4" alt="" />
                    </div>

                    <div className='body_info_container'>
                        <div className='body_info'>
                            <div className='child_one'>
                                <h4>BRAND</h4>
                                <p>KIA</p>
                            </div>
                            <div className='child_two'>
                                <h4>SUB-BRAND</h4>
                                <p>RIO</p>
                            </div>
                        </div>
                        <div className='body_info'>
                            <div className='child_one'>
                                <h4>COLOR</h4>
                                <p>Electic Blue</p>
                            </div>
                            <div className='child_two'>
                                <h4>MODEL</h4>
                                <p>2018</p>
                            </div>
                        </div>
                        <div className='body_info'>
                            <div className='child_one'>
                                <h4>PLATES</h4>
                                <p>SS-568-45D</p>
                            </div>
                            <div className='child_two'>
                                <h4>VEHICLE TYPE</h4>
                                <p>Sedan</p>
                            </div>
                        </div>
                        <div className='body_info'>
                            <div className='child_one'>
                                <h4>DRIVER</h4>
                                <p>Luis Enrique Cornejo Arreola</p>
                            </div>
                            <div className='child_two'>
                                <h4>STATUS</h4>
                                <p>Active</p>
                            </div>
                        </div>

                    </div>

                    <div className='footer'>
                        <button>UPDATE INFORMATION icon</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default VehicleDetail
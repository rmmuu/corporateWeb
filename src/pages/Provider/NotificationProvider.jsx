import React from 'react'

const NotificationProvider = () => {
    return (
        <div className='main_conatiner_notificaion_provider'>
            {/* header */}
            <div className="top_header_provider">
                <h2>NOTIFICATION PANEL</h2>
                <div>
                    <button className='add'>EXPORT TO EXCEL icon</button>
                </div>

            </div>
            {/* notification */}
            <div className="notification_conatiner mt-5">
                {/* notification package */}
                <div className="notification_item">
                    <div className='inner_item '>
                        <div className='left mb-1'>
                            <i>icon</i>
                            <p className='ml-1'>Package</p>
                        </div>
                        <p>Friday 24 de April 2021</p>
                    </div>
                    <div className='left_bottom'>
                        <h6>PROVIDER ARRIVED</h6>
                        <p>10:22:32</p>
                    </div>
                    <p className='mb-1'>Your package is in the lobby.</p>


                </div>
                {/* notification meeting */}
                <div className="notification_item">
                    <div className='inner_item'>
                        <div className='left mb-1'>
                            <i>icon</i>
                            <p className='ml-1'>Meeting</p>
                        </div>
                        <p>Friday 24 de April 2021</p>
                    </div>
                    <div className='left_bottom'>
                        <h6>PROVIDER ARRIVED</h6>
                        <p>10:22:32</p>
                    </div>
                    <p>Your package is in the lobby.</p>
                    <h6 className='mb-1'>Date Meeting: 28-04-2021 12:00 P.M.</h6>

                </div>
            </div>


        </div>
    )
}

export default NotificationProvider
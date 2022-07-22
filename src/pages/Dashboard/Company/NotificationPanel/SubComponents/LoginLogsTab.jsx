import React, { useEffect, useState } from 'react'
import meetingIcon from '../../../../../assets/images/meetingIcon.svg'
import user_circle_solid from '../../../../../assets/images/user-circle-solid.svg'
import car_icon from '../../../../../assets/images/car_icon.svg'
import icpassword from '../../../../../assets/images/ic-password.svg'
import icRightArrow from '../../../../../assets/images/ic-right-arrow.svg'
import ic_movbile_notification from '../../../../../assets/images/ic_movbile_notification.svg'
import ic_pc from '../../../../../assets/images/ic-pc.svg'
import ic_invitation from '../../../../../assets/images/ic-invitation.svg'
import ic_event from '../../../../../assets/images/ic-event.svg'
import ic_check_black from '../../../../../assets/images/ic-check-black.svg'
import ic_cancel from '../../../../../assets/images/ic-cancel.svg'
import { TablePagination } from '@mui/material';
import { GetLoginLogList } from '../../../../../reduxToolkit/Logs/LogApi'
import { useDispatch, useSelector } from 'react-redux'
import NoEvent from '../../../Events/NoEvent'

const LoginLogsTab = () => {
    let body;
    const dispatch = useDispatch();
    const LoginLogList = useSelector(state => state?.LogSlice?.LoginLogList);
    // console.log(LoginLogList)

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        body = {
            order: true,
            page: page,
            size: rowsPerPage,
            sortBy: "id"
        }
        dispatch(GetLoginLogList(body));
    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        body = {
            order: true,
            page: newPage,
            size: rowsPerPage,
            sortBy: "id"
        }
        dispatch(GetLoginLogList(body));
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
        body = {
            order: true,
            page: page,
            size: parseInt(event.target.value),
            sortBy: "id"
        }
        dispatch(GetLoginLogList(body));
    };

    return (
        <>
            <p className='accessHistory text-right'>LOG IN LOG</p>
            {
                LoginLogList?.content?.length !== 0 ?
                    <>
                        {
                            LoginLogList?.content?.map(item => (
                                <div className='tabBox' key={item?.id}>
                                    <div className='tabBox-main'>
                                        <p className='P1' style={{ fontSize: "12px" }}>
                                            {
                                                item?.wasSuccessfully ?
                                                    <img className='notifyIcon' src={ic_check_black} alt="package" /> :
                                                    <img className='notifyIcon' src={ic_cancel} alt="package" />
                                            }
                                            <span>{item?.platform}</span>
                                        </p>
                                        <p className='P2 text-right'>
                                            {new Date(item?.createdAt).toDateString()} <br />{new Date(item?.createdAt).toLocaleTimeString()}
                                        </p>
                                    </div>
                                    <p className='P3'>USER: {item?.user?.name}</p>
                                    <p
                                        className='P4'
                                        style={{
                                            color: item?.wasSuccessfully ? "#146f62" : "red"
                                        }}
                                    >
                                        {
                                            item?.wasSuccessfully ? "Access -> Successfully" : "Access -> Failed"
                                        }

                                    </p>
                                </div>
                            ))
                        }
                        <div className='d-flex justify-content-center'>
                            <TablePagination
                                component="div"
                                rowsPerPageOptions={[10, 16, 22]}
                                count={LoginLogList?.totalElements}
                                page={page}
                                onPageChange={handleChangePage}
                                labelRowsPerPage="Records per page"
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </div>
                    </> :
                    <NoEvent title="Login Logs" />
            }
        </>
    )
}

export default LoginLogsTab
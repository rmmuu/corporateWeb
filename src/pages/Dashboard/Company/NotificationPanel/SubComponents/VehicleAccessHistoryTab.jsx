import React, { useEffect, useState } from 'react'
import car_icon from '../../../../../assets/images/car_icon.svg'
import ic_arrow_bottom_red from '../../../../../assets/images/chevron-up-solid.svg'
import { TablePagination } from '@mui/material';
import { GetUserAccessList } from '../../../../../reduxToolkit/AccessHistory/AccessHistoryApi'
import { useDispatch, useSelector } from 'react-redux'
import NoEvent from '../../../Events/NoEvent'
import { IoIosArrowDown } from 'react-icons/io';

const VehicleAccessHistoryTab = () => {
    let body;
    let arr = [1, 2, 3, 4, 5, 6];
    const dispatch = useDispatch();
    const VehicleListAccess = useSelector(state => state?.AccessHistorySlice?.VehicleListAccess);
    // console.log(VehicleListAccess)


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        body = {
            order: true,
            page: page,
            size: rowsPerPage,
            sortBy: "id"
        }
        dispatch(GetUserAccessList(body));
    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        body = {
            order: true,
            page: newPage,
            size: rowsPerPage,
            sortBy: "id"
        }
        dispatch(GetUserAccessList(body));
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
        dispatch(GetUserAccessList(body));
    };

    return (
        <>
            <p className='accessHistory text-right'>VEHICLE ACCESS</p>
            {
                VehicleListAccess?.content?.length !== 0 ?
                    <>
                        {
                            VehicleListAccess?.content?.map(item => (
                                <div className='tabBox' key={item?.id}>
                                    <div className='tabBox-main'>
                                        <p className='P1' style={{ fontSize: "12px" }}>
                                            <img className='notifyIcon' src={car_icon} alt="package" />
                                            <span>Vehicle:</span> {item?.vehicle?.brand}, {item?.vehicle?.subBrand} | {item?.vehicle?.plate}
                                        </p>
                                        <p className='P2 text-right'>
                                            {new Date(item?.createdAt).toDateString()} <br />{new Date(item?.createdAt).toLocaleTimeString()}
                                        </p>
                                    </div>
                                    <div className='tabBox-main'>
                                        <div>
                                            <p className='P3'>Zone: Meeting Access</p>
                                            <p className='P4'>Vehicle access {"->"} Successfully</p>
                                        </div>
                                        <p className='P1'>
                                            {item?.device?.accessType?.name}
                                            {
                                                item?.device?.accessType.id === 1 ?
                                                    <img className='main-arrowRight' src={ic_arrow_bottom_red} alt="package" /> :
                                                    item?.device?.accessType.id === 2 ?
                                                        <IoIosArrowDown style={{ fill: "red", margin: "-2px 0 0 10px", fontSize: "20px" }} /> :
                                                        item?.device?.accessType.id === 3 ?
                                                            <>
                                                                <IoIosArrowDown style={{ fill: "red", margin: "-2px 0 0 10px", fontSize: "20px" }} />
                                                                <img className='main-arrowRight' src={ic_arrow_bottom_red} alt="package" />
                                                            </> : null
                                            }
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                        <div className='d-flex justify-content-center'>
                            <TablePagination
                                component="div"
                                rowsPerPageOptions={[10, 16, 22]}
                                count={VehicleListAccess?.totalElements}
                                page={page}
                                onPageChange={handleChangePage}
                                labelRowsPerPage="Vehicle per page"
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </div>
                    </> :
                    <NoEvent title="Vehicles" />
            }
        </>
    )
}

export default VehicleAccessHistoryTab
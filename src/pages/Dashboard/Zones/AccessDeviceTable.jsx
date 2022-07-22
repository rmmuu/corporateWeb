import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TablePagination from '@mui/material/TablePagination';


const AccessDeviceTable = () => {
    const dispatch = useDispatch();

    const { getAllPageableProvider } = useSelector(state => state.EmployeeProviderSlice)
    console.log(getAllPageableProvider)


    const { zoneDetailFatherAndChild } = useSelector(state => state.EmployeeZonesSlice)
    console.log(zoneDetailFatherAndChild)

    const [pagePagination, setPagePagination] = useState(0);
    const [rowsPerPageProvider, setRowsPerProvider] = useState(4);

    const handleChangePageProvider = (event, newPage) => {
        setPagePagination(newPage);
    };

    const handleChangeRowsPerPageProvider = event => {
        setRowsPerProvider(parseInt(event.target.value));
        setPagePagination(0);
    };

    // const dropDownProps = {
    //     panel: 'provider',
    //     firstItem: 'DOWNLOAD FILE',
    //     secondItem: 'VIEW DETAILS '
    // }
    // var arr = [1, 2, 3, 4, 5, 6]

    // useEffect(() => {


    //     const body = {

    //         pagination: {
    //             "order": true,
    //             "page": pagePagination,
    //             "size": rowsPerPageProvider,
    //             "sortBy": "id"
    //         }
    //     }
    //     dispatch(GetAllPageableProvider(body));
    // }, [pagePagination, rowsPerPageProvider])

    return (
        <>
            {

                <div className="providersTables">
                    <table style={{ width: "100%" }}>
                        <thead>
                            <th className='first'> NAME</th>
                            <th>S/N</th>
                            <th>IP</th>
                            <th>MAC</th>
                            <th>STATUS</th>
                            <th>ACCESS TYPE</th>
                            <th>DEVICE TYPE</th>
                            <th>UPDATE</th>
                            <th>REMOVE</th>
                            {/* <th className='last'>options</th> */}
                        </thead>
                        {
                            zoneDetailFatherAndChild?.devices?.length !== 0 ?
                                zoneDetailFatherAndChild?.devices?.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className='first'>{item?.name}</td>
                                            <td>{item?.serialNumber}</td>
                                            <td>{item?.ip}</td>
                                            <td>{item?.mac}</td>
                                            <td>{item?.status?.name}</td>
                                            <td>{item?.accessType?.name}</td>
                                            <td>
                                                <i class="fa fa-tablet" aria-hidden="true"></i>
                                                {/* {item?.deviceType?.name} */}
                                            </td>
                                            <td style={{ color: 'gray' }}><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                            <td style={{ color: '#F44336' }}><i class="fa fa-trash-o" aria-hidden="true"></i></td>
                                            {/* <td className='last'>
                                            <ProviderDropDown dropDownProps={dropDownProps} userId={item?.user?.id} pid={item?.id} statusTo={item?.user?.status?.id} />
                                        </td> */}
                                        </tr>
                                    )


                                }) :
                                <tr>
                                    <td colSpan="10">No Data</td>
                                </tr>
                        }

                    </table>
                </div>
                // <NoEvent />


            }

            {/* <div className="d-flex justify-content-center">
                <TablePagination
                    component="div"
                    rowsPerPageOptions={[2, 4, 6, 8]}
                    count={getAllPageableProvider?.totalElements}
                    page={pagePagination}
                    onPageChange={handleChangePageProvider}
                    labelRowsPerPage="Provider per page"
                    rowsPerPage={rowsPerPageProvider}
                    onRowsPerPageChange={handleChangeRowsPerPageProvider}
                />
            </div> */}

        </>
    )
}

export default AccessDeviceTable
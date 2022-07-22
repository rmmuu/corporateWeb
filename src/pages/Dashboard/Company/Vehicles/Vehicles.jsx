import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import VehicleCard from './VehicleCard';
import TablePagination from '@mui/material/TablePagination';
import { getAllCompanyVehicles } from '../../../../Apis/companyVehicle';
import { toast } from 'react-toastify';

export const Vehicles = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);
    const [vehicleData, setVehicleData] = useState();

    useEffect(() => {

        const pagination = {
            order: true,
            page: page,
            size: rowsPerPage,
            sortBy: "id"
        }

        getAllCompanyVehicles(pagination).then(({ data: { data } }) => {
            setVehicleData(data)
            // console.log(data)
        }).catch(error => {
            toast.error("something went wrong.")
        })

    }, [page, rowsPerPage])


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
    };

    return (
        <>
            <div className='employeeVehicleHead'>
                <div>
                    <h3>
                        Vehicles
                        <Link to='allvehicles'>
                            <sub>view more</sub>
                        </Link>
                    </h3>
                    <p>Total <span>{vehicleData?.totalElements}</span></p>
                </div>
                <Link to="/dashboard/company/addupdatevehicle">
                    <button className='addNewEmployeeBtn'>Add new Vehicle</button>
                </Link>
            </div>
            <div className="row mb-3">
                {
                    vehicleData?.content !== 0 ?
                        <>
                            {vehicleData?.content?.map(item => (
                                <div className="col-12 col-md-6" style={{ marginTop: "4.5rem" }} key={item.id}>
                                    <VehicleCard vehicleCardData={item} />
                                </div>
                            ))}
                            <div className="col-10 mt-2">
                                <TablePagination
                                    component="div"
                                    rowsPerPageOptions={[2, 4, 6, 8]}
                                    count={vehicleData?.totalElements}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    labelRowsPerPage="Vehicles per page"
                                    rowsPerPage={rowsPerPage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </div>
                        </> :
                        <div className='noItem'>
                            No Vehicles
                        </div>
                }
            </div>
        </>
    )
}

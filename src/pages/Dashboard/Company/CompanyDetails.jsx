import React, { useEffect, useState } from 'react';
import ic_map_marker from '../../../assets/images/ic-map-market.svg';
import { Employees } from './Employees/Employees';
import { Vehicles } from './Vehicles/Vehicles';
import CustomDropDown from '../../../components/CustomDropDown';
import LefletMap from '../../../components/LefletMap';
import { getCompanyData } from '../../../Apis/companydata';
import { getAllCompanyVehicles } from '../../../Apis/companyVehicle';

export const CompanyDetails = () => {
    const userdata = JSON.parse(sessionStorage.getItem("userdata"));
    const companyId = "bc9789f1-3f16-4759-851d-5501cc37ec97";

    const [companyDetail, setCompanyDetail] = useState();
    const [vehicleData, setVehicleData] = useState();
    const [page1, setPage1] = useState("0");
    const [rowsPerPage1, setRowsPerPage1] = useState("8");

    useEffect(() => {

        getCompanyData(companyId).then(({ data: { data } }) => {
            // console.log(data)
            setCompanyDetail(data);
            localStorage.setItem("companyId", data[0]?.id)

        }).catch(error => {
            // toast.error("something went wrong.")
        })

        const pagination = {
            order: true,
            page: 10,
            size: 5,
            sortBy: "id"
        }

        getAllCompanyVehicles(pagination).then(({ data: { data } }) => {
            setVehicleData(data.content)
            // console.log(data)
        }).catch(error => {
            // toast.error("something went wrong.")
        })

    }, [])

    return (
        <div className='company-detail'>
            <div className='head'>
                <h2>company details</h2>
                <p>location
                    <img
                        src={ic_map_marker}
                        style={{ width: "18px", height: "24px" }}
                        alt="ic_map_marker"
                    />
                </p>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="detailCard">
                        <div className="detailCard-head">
                            <h4>{companyDetail?.name}</h4>
                            <CustomDropDown />
                        </div>
                        <div className='mt-2'>
                            <p>ADDRESS</p>
                            <ul>
                                <li>{companyDetail?.address}</li>
                            </ul>
                            <p>Employees</p>
                            <ul>
                                <li>{companyDetail?.noEmployees} Employees</li>
                            </ul>
                            <p>ZONES</p>
                            <ul>
                                <li>{companyDetail?.noZones} Zones</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <img
                        src={`data:${companyDetail?.path};base64,${companyDetail?.image}`}
                        className="img-fluid companyImg"
                        alt="companyImg"
                    />
                </div>
                <div className="col-md-6" style={{ zIndex: "0" }}>
                    <LefletMap
                        latlng={[1.5234234, 3.45345345]}
                    // latlng={[companyDetail?.latitud, companyDetail?.longitud]}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Employees noOfEmployees={companyDetail?.noEmployees}
                    />
                </div>
                <div className="col-md-6">
                    <Vehicles
                        vehicleData={vehicleData}
                        noVehicles={companyDetail?.noVehicles}
                    />
                </div>
            </div>
        </div>
    )
}

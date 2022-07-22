import React, { useEffect, useState } from 'react';
import ic_map_marker from '../../../assets/images/ic-map-market.svg';
import { Employees } from './Employees/Employees';
import { Vehicles } from './Vehicles/Vehicles';
import CustomDropDown from '../../../components/CustomDropDown';
import LefletMap from '../../../components/LefletMap';
import { getCompanyData } from '../../../Apis/companydata';

export const CompanyDetails = () => {
    const companyId = "a6bd2887-0f4a-4e5f-b0b5-000d9817ab23";

    const [companyDetail, setCompanyDetail] = useState();

    useEffect(() => {
        getCompanyData(companyId).then(({ data: { data } }) => {
            // console.log(data)
            setCompanyDetail(data);
            localStorage.setItem("companyId", data[0]?.id)

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
                    <Employees />
                </div>
                <div className="col-md-6">
                    <Vehicles />
                </div>
            </div>
        </div>
    )
}

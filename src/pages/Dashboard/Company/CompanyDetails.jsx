import React from 'react';
import companyImg from "../../../assets/images/companyImg.png";
import { Employees } from './Employees/Employees';
import { Vehicles } from './Vehicles/Vehicles';
import CustomDropDown from '../../../components/CustomDropDown';
import LefletMap from '../../../components/LefletMap';

export const CompanyDetails = () => {
    return (
        <div className='company-detail'>
            <div className='head'>
                <h2>company details</h2>
                <p>location <i className="fa fa-circle-o-notch" aria-hidden="true"></i></p>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="detailCard">
                        <div className="detailCard-head">
                            <h4>tepeyac</h4>
                            <CustomDropDown />
                        </div>
                        <p>ADDRESS</p>
                        <ul>
                            <li>Av Colinas del cimatrio <br /> Cerro tenaya 101</li>
                        </ul>
                        <p>Employees</p>
                        <ul>
                            <li>44 Employees</li>
                        </ul>
                        <p>ZONES</p>
                        <ul>
                            <li>3 Zones</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <img
                        src={companyImg}
                        className="img-fluid companyImg"
                        alt="companyImg"
                    />
                </div>
                <div className="col-md-6">
                    <LefletMap />
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

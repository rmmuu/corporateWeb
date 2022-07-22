import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ic_check from "../../../assets/images/ic-check.svg";

const ZoneCardDetail = ({ item }) => {
  console.log(item)
  return (
    <>
      <div className="row zoneCardDetail">
        <div className="col-lg-6 col-md-8 p-0">
          <Table style={{ border: "hidden", marginTop: "5px" }}>
            <thead >
              <tr>
                <th className="nameTD">TOTAL ACCESS DEVICES</th>
                <th className="text-center">{item?.accessDeviceDTO?.noMantra + item?.accessDeviceDTO?.noPda + item?.accessDeviceDTO?.noTelpo450 +
                  item?.accessDeviceDTO?.noTelpo980 + item?.accessDeviceDTO?.noTelpoF6 + item?.accessDeviceDTO?.noTelpoK5}{" "}DEVICES</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td>MANTARA</td>
                <td className="text-center">{item?.accessDeviceDTO?.noMantra}</td>
              </tr>
              <tr >
                <td>PDA</td>
                <td className="text-center">{item?.accessDeviceDTO?.noPda}</td>
              </tr>
              <tr >
                <td>TELPO450</td>
                <td className="text-center">{item?.accessDeviceDTO?.noTelpo450}</td>
              </tr>
              <tr >
                <td>TELPO980</td>
                <td className="text-center">{item?.accessDeviceDTO?.noTelpo980}</td>
              </tr>
              <tr >
                <td>TELPOF6</td>
                <td className="text-center">{item?.accessDeviceDTO?.noTelpoF6}</td>
              </tr>
              <tr >
                <td>TELPOk5</td>
                <td className="text-center">{item?.accessDeviceDTO?.noTelpoK5}</td>
              </tr>


            </tbody>
          </Table>
        </div>
        <div className="col-md-11 p-0">
          <h6 className="nameTD" style={{ fontWeight: '600', letterSpacing: "0.2rem" }}>SUB - ZONES</h6>
          <Table style={{ border: "hidden" }}>
            <thead style={{ border: "hidden" }}>
              <tr>
                <th>NAME</th>
                <th className="text-center">ACCESS DEVICE</th>
                <th className="text-center">COMMON AREA</th>
                <th className="text-center">status</th>
              </tr>
            </thead>
            <tbody>
              {
                item?.children?.map((item, index) => {
                  return (

                    <tr style={{ border: "hidden" }} key={index}>
                      <td className="nameTD">
                        {item?.name} <Link to="/dashboard/singlezonedetails"><sub>MORE DETAILS</sub></Link>
                      </td>
                      <td className="text-center">
                        {
                          item?.devices.length == 0 &&
                          <i class="fa fa-times" aria-hidden="true" style={{ color: "red", fontSize: "1.2rem" }}></i>
                        }
                        {
                          item?.devices.length > 0 &&
                          <i class="fa fa-check" aria-hidden="true" style={{ color: 'green', fontSize: "1.2rem" }}></i>
                        }

                      </td>
                      <td className="text-center">
                        {
                          item?.commonArea == null &&
                          <i class="fa fa-times" aria-hidden="true" style={{ color: "red", fontSize: "1.2rem" }}></i>
                        }
                        {
                          item?.commonArea != null &&
                          <i class="fa fa-check" aria-hidden="true" style={{ color: 'green', fontSize: "1.2rem" }}></i>
                        }
                      </td>
                      <td className="text-center" style={{ color: '#146f62', fontWeight: "bold" }}>
                        {item?.status?.name} <i style={{ fontSize: '10px', color: '#146f62' }} class="fa fa-circle" aria-hidden="true"></i>
                      </td>
                    </tr>




                  )
                })
              }
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ZoneCardDetail;

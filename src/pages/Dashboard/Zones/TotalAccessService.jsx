import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TotalAccessService = ({ item }) => {

  const { zoneDetailFatherAndChild } = useSelector(state => state.EmployeeZonesSlice)
  console.log(zoneDetailFatherAndChild)
  return (
    <div className="buildingdetail_access_d">
      <Table
        style={{
          border: "hidden",
        }}
      >
        <thead style={{ border: "hidden" }}>
          <tr>
            <th style={{ display: 'flex', border: 'none', gap: '50px', alignItems: 'center' }}>
              <h1>TOTAL ACCESS DEVICES </h1>
              <Link to="/dashboard/createdevice" style={{ fontSize: '12px', textDecoration: 'underline' }}>ADD DEVICE +</Link>
            </th>
            <th>
              <p>
                {item?.accessDeviceDTO?.noMantra + item?.accessDeviceDTO?.noPda + item?.accessDeviceDTO?.noTelpo450 +
                  item?.accessDeviceDTO?.noTelpo980 + item?.accessDeviceDTO?.noTelpoF6 + item?.accessDeviceDTO?.noTelpoK5}
                {/* <span> / 2 DEVICES</span> */}
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td>MANTARA</td>
            <td className="text-center">{item?.accessDeviceDTO?.noMantra}</td>
          </tr>
          <tr style={{
            border: "hidden",
          }}>
            <td>PDA</td>
            <td className="text-center">{item?.accessDeviceDTO?.noPda}</td>
          </tr>
          <tr style={{
            border: "hidden",
          }}>
            <td>TELPO450</td>
            <td className="text-center">{item?.accessDeviceDTO?.noTelpo450}</td>
          </tr>
          <tr style={{
            border: "hidden",
          }}>
            <td>TELPO980</td>
            <td className="text-center">{item?.accessDeviceDTO?.noTelpo980}</td>
          </tr>
          <tr style={{
            border: "hidden",
          }}>
            <td>TELPOF6</td>
            <td className="text-center">{item?.accessDeviceDTO?.noTelpoF6}</td>
          </tr>
          <tr style={{
            border: "hidden",
          }} >
            <td>TELPOk5</td>
            <td className="text-center">{item?.accessDeviceDTO?.noTelpoK5}</td>
          </tr>


        </tbody>
      </Table>
    </div>
  );
};

export default TotalAccessService;

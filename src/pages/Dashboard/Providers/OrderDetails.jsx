import React from "react";
import { Link } from "react-router-dom";
import employee from "../../../assets/images/employee-4.png";

const OrderDetails = () => {
  return (
    <div className="order-details">
      <div className="head">
        <div className="headLeft">
          <Link to="/dashboard/providers-outlet">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </Link>
          <h2>ORDER DETAILS</h2>
        </div>
      </div>
      <div className="container">
        <div className="row content-row">
          <div className="col-9 details">
            <div className="status">
              <div className="status-text-blue">DELIVERED</div>
              <div className="status-indicator-blue"></div>
            </div>
            <div className="content">
              <div className="order">
                <strong>Order</strong>
                <span>#104-SDAS</span>
                <div className="actual-details">
                  Luis Enrique Cornejo Arreola
                </div>
                <div className="faded-headings">Contractor</div>
                <div className="actual-details">lcornejo@ibl.mx</div>
                <div className="faded-headings">Contractor</div>
                <div className="actual-details">4427265969</div>
                <div className="faded-headings">Celular</div>
              </div>
              <div className="delivery-details">
                <div className="faded-headings">Delivery Date</div>
                <div className="actual-details">25/05/2021</div>
                <div className="faded-headings">Corporate</div>
                <div className="actual-details">IBL Corporate</div>
              </div>
              <div className="time-details">
                <div className="faded-headings">Time Of Arrival</div>
                <div className="actual-details">18:33</div>
                <div className="faded-headings">18:33</div>
                <div className="actual-details">4427265969</div>
                <div className="faded-headings">Delivery Date</div>
                <div className="actual-details">4427265969</div>
                <div className="faded-headings">Delivery Date</div>
                <div className="actual-details">4427265969</div>
              </div>
            </div>
          </div>
          <div className="col-7 cards-section">
            <div className="card">
              <div className="card-heading">EMPLOYEE</div>
              <div className="card-body">
                <img className="card-img-top" src={employee} alt="employee" />
                <div className="card-content">
                  <div className="card-data-row">
                    <div className="headings">Name</div>
                    <div className="details">Job Title</div>
                  </div>
                  <div className="card-data-row">
                    <div className="headings">Job Title</div>
                    <div className="details">email</div>
                  </div>
                  <div className="card-data-row">
                    <div className="headings">Gender</div>
                    <div className="details">Andrea Itzel González</div>
                  </div>
                  <div className="card-data-row">
                    <div className="headings">Email</div>
                    <div className="details">Andrea Itzel González</div>
                  </div>
                  <div className="card-data-row">
                    <div className="headings">Number</div>
                    <div className="details">Andrea Itzel González</div>
                  </div>
                  <div className="view-details">
                    <Link to="/dashboard/providers-outlet/employee-providers-details">
                      <a href="">EMPLOYEE DETAILS</a>
                      <i class="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-heading">VEHICLE</div>
              <div className="card-body">
                <img className="card-img-top" src={employee} alt="employee" />
                <div className="card-content">
                  <div className="card-data-row">
                    <div className="headings">Name</div>
                    <div className="details">Job Title</div>
                  </div>
                  <div className="card-data-row">
                    <div className="headings">Job Title</div>
                    <div className="details">email</div>
                  </div>
                  <div className="card-data-row">
                    <div className="headings">Gender</div>
                    <div className="details">Andrea Itzel González</div>
                  </div>
                  <div className="card-data-row">
                    <div className="headings">Email</div>
                    <div className="details">Andrea Itzel González</div>
                  </div>
                  <div className="card-data-row">
                    <div className="headings">Number</div>
                    <div className="details">Andrea Itzel González</div>
                  </div>
                  <div className="view-details">
                    <Link to={"/dashboard/providers-outlet/vehicle-detail"}>
                      <a href="">VEHICLE DETAILS</a>
                      <i class="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

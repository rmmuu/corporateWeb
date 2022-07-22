import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import employee from "../../../assets/images/employee-4.png";
import { DetailsEmployeeProviderEmployee, DetailsEmployeeProviderVehicle } from "../../../reduxToolkit/EmployeeProviders/EmployeeProvidersApi";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { detailEmployeeProviderOrder } = useSelector(state => state.EmployeeProviderSlice)
  console.log(detailEmployeeProviderOrder)


  var d = new Date(parseInt(detailEmployeeProviderOrder?.deliveryDate, 10));
  var ds = d.toString('MM/dd/yyyy')
  // var ds = d.toString('MM/dd/yy HH:mm:ss')

  const date = new Date(detailEmployeeProviderOrder?.deliveryDate);
  return (
    <div className="order-details">
      <div className="head">
        <div className="headLeft">
          <Link to="/dashboard/providers-outlet">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </Link>
          <h2>ORDER DETAILS </h2>
        </div>
      </div>
      <div className="container">
        <div className="row content-row">
          <div className="col-9 details">
            <div className="status">
              <div className="status-text-blue">{detailEmployeeProviderOrder?.status?.name}</div>
              <div className="status-indicator-blue"></div>
            </div>
            <div className="content">
              <div className="order">
                <strong>Order</strong>
                <span>#104-SDAS</span>
                <div className="actual-details">
                  {/* Luis Enrique Cornejo Arreola */}
                  {detailEmployeeProviderOrder?.provider?.user?.name}
                </div>
                <div className="faded-headings">Contractor</div>
                <div className="actual-details">{detailEmployeeProviderOrder?.provider?.user?.email}</div>
                <div className="faded-headings">Contractor</div>
                <div className="actual-details">{detailEmployeeProviderOrder?.provider?.user?.phoneNumber}</div>
                <div className="faded-headings">Celular</div>
              </div>
              <div className="delivery-details">
                <div className="faded-headings">Delivery Date</div>
                <div className="actual-details">{date.toLocaleDateString('en-US')}</div>
                <div className="faded-headings">Corporate</div>
                <div className="actual-details">{detailEmployeeProviderOrder?.provider?.providerCompanyName}</div>
              </div>
              <div className="time-details">
                <div className="faded-headings">Time Of Arrival</div>
                <div className="actual-details">18:33</div>
                {/* <div className="faded-headings">18:33</div> */}
                {/* <div className="actual-details">4427265969</div> */}
                <div className="faded-headings">Departure Time</div>
                <div className="actual-details">4427265969</div>
                <div className="faded-headings"> Total time</div>
                <div className="actual-details">4427265969</div>

                <div className="faded-headings">Who received</div>
                <div className="actual-details">{detailEmployeeProviderOrder?.userReceived?.name}</div>
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
                    <div className="details">{detailEmployeeProviderOrder?.providerEmployee?.user?.name}</div>
                  </div>
                  <div className="card-data-row">
                    <div className="headings">Job Title</div>
                    <div className="details">none</div>
                  </div>
                  <div className="card-data-row">
                    <div className="headings">Gender</div>
                    <div className="details">{detailEmployeeProviderOrder?.providerEmployee?.user?.gender?.name}</div>
                  </div>
                  <div className="card-data-row">
                    <div className="headings">Email</div>
                    <div className="details">{detailEmployeeProviderOrder?.providerEmployee?.user?.email}</div>
                  </div>
                  <div className="card-data-row">
                    <div className="headings">Number</div>
                    <div className="details">{detailEmployeeProviderOrder?.providerEmployee?.user?.phoneNumber}</div>
                  </div>
                  <div className="view-details">

                    <Link to="/dashboard/providers-outlet/employee-providers-details" onClick={() => { dispatch(DetailsEmployeeProviderEmployee(detailEmployeeProviderOrder?.providerEmployee?.user?.id)) }}>
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
                    <div className="headings">Brand</div>
                    <div className="details">{detailEmployeeProviderOrder?.providerVehicle?.vehicle.brand}</div>
                  </div>
                  <div className="card-data-row">
                    <div className="headings">Sub-Brand</div>
                    <div className="details">{detailEmployeeProviderOrder?.providerVehicle?.vehicle.subBrand}</div>
                  </div>
                  <div className="card-data-row">
                    <div className="headings">Model</div>
                    <div className="details">{detailEmployeeProviderOrder?.providerVehicle?.vehicle?.model}</div>
                  </div>
                  <div className="card-data-row">
                    <div className="headings">Color</div>
                    <div className="details">{detailEmployeeProviderOrder?.providerVehicle?.vehicle?.color}</div>
                  </div>
                  <div className="card-data-row">
                    <div className="headings">plates</div>
                    <div className="details">{detailEmployeeProviderOrder?.providerVehicle?.vehicle?.plate}</div>
                  </div>
                  <div className="card-data-row">
                    <div className="headings">Type</div>
                    <div className="details">{""}</div>
                  </div>
                  <div className="card-data-row">
                    <div className="headings">Corporate</div>
                    <div className="details">{""}</div>
                  </div>
                  <div className="view-details">
                    <Link to={"/dashboard/providers-outlet/vehicle-detail"} onClick={() => { dispatch(DetailsEmployeeProviderVehicle(detailEmployeeProviderOrder?.providerVehicle?.id)) }}>
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

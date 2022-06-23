import { useState } from "react";
import search from "../../../assets/images/search.svg";
import filter from "../../../assets/images/filter.svg";
import plus from "../../../assets/images/plus.svg";
import file from "../../../assets/images/file.svg";
import ProvidersFilterModal from "./ProviderModels/providersFilterModal";
import { Link } from "react-router-dom";
import CustomDropDown from "../../../components/CustomDropDown";
import ProviderDropDown from "./SubComponents/providerDropDown";
import MUIDataTable from "mui-datatables";

const ProvidersPanel = () => {
  const [show, setShow] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  const [dropDownProps, setDropDownProps] = useState({
    panel:'provider',
    firstItem:'APPROVE DOCUMENTS',
    secondItem:'UPDATE DATA'
  })
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const columns = [
    {
      name: "COMPANY",
      label: "COMPANY NAME",
      options: {
        filter: true,
      },
    },
    {
      name: "MANAGER",
      label: "MANAGER",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "STATUS",
      label: "STATUS",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "EMAIL",
      label: "EMAIL",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "NUMBER",
      label: "NUMBER",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "OPTION",
      label: "OPTION",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const data = [
    {
      COMPANY: "Joe James",
      MANAGER: "Test Corp",
      STATUS: "for approving documents",
      EMAIL: "NY",
      NUMBER: "NY",
      OPTION: <ProviderDropDown dropDownProps={dropDownProps}/>,
    },
    {
      COMPANY: "Joe James",
      MANAGER: "Test Corp",
      STATUS: "for approving documents",
      EMAIL: "NY",
      NUMBER: "NY",
      OPTION: <ProviderDropDown dropDownProps={dropDownProps}/>,
    },
    {
      COMPANY: "Joe James",
      MANAGER: "Test Corp",
      STATUS: "for approving documents",
      EMAIL: "NY",
      NUMBER: "NY",
      OPTION: <ProviderDropDown dropDownProps={dropDownProps}/>,
    },
    {
      COMPANY: "Joe James",
      MANAGER: "Test Corp",
      STATUS: "for approving documents",
      EMAIL: "NY",
      NUMBER: "NY",
      OPTION: <ProviderDropDown dropDownProps={dropDownProps}/>,
    },
  ];
  const options = {
    filterType: "checkbox",
  };
  return (
    <div className="providersPanel">
      <div className="head">
        <div className="headLeft">
          <h2>PROVIDERS PANEL</h2>
        </div>
      </div>
      {/* portfolio-grid */}
      <div className="container">
        <div className="row steps-row mb-3" id="pills-tab" role="tablist">
          <div className="col-6 tab" role="presentation">
            <a
              className={`steps btn ${
                toggleState === 1 ? "active-border" : "disable-border"
              }`}
              onClick={() => toggleTab(1)}
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <span>ORDERS</span>
            </a>
          </div>
          <div className="col-6 tab tab-right" role="presentation">
            <a
              className={`steps btn ${
                toggleState === 2 ? "active-border" : "disable-border"
              }`}
              onClick={() => toggleTab(2)}
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <span>PROVIDERS</span>
            </a>
          </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className={`${
              toggleState === 1 ? "tab-pane fade show active " : "tab-pane fade"
            }`}
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="orders">
              <div className="row justify-content-end">
                <div className="col-4 filter-col">
                  <div className="filter" onClick={() => handleShow(true)}>
                    <img src={filter} alt="filter" />
                  </div>
                  <ProvidersFilterModal
                    show={show}
                    onHide={() => handleClose(false)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-3 orderCard">
                  <div className="status">
                    <div className="status-text">IN TRANSIT</div>
                    <div className="status-indicator"></div>
                  </div>
                  <div className="customer-info">COURIER INFORMATION</div>
                  <div className="card-headings">
                    <span>GTM</span> | Servicios Especializados Agropecuarios
                  </div>
                  <div className="faded-headings">Campany</div>
                  <div className="employee-name">
                    Luis Enrique Cornejo Arreola
                  </div>
                  <div className="faded-headings">Employee</div>
                  <div className="card-headings">
                    <span>KIA Rio 2018</span> | ULX-562-8C
                  </div>
                  <div className="vehicle faded-headings">Vehicle</div>
                  <div className="delivery-info">COURIER INFORMATION</div>
                  <div className="delivery-info-row">
                    <div className="faded-headings">ETA</div>
                    <div className="card-headings">26/08/2023 11:30</div>
                  </div>
                  <div className="delivery-info-row">
                    <div className="faded-headings">Corporate</div>
                    <div className="card-headings">IBL Corporate</div>
                  </div>
                  <div className="delivery-info-row">
                    <div className="faded-headings">Item </div>
                    <div className="card-headings">5 boxes of Soap</div>
                  </div>
                  <div className="description delivery-info-row">
                    <div className="faded-headings">Description</div>
                    <div className="card-headings">
                      Take care, ítems fragile
                    </div>
                  </div>
                  <Link to={"order-details"}>
                    <div className="view-details">
                      <a href="">VIEW DETAILS</a>
                      <i class="fa fa-angle-right"></i>
                    </div>
                  </Link>
                </div>
                <div className="col-3 orderCard">
                  <div className="status">
                    <div className="status-text-blue">DELIVERED</div>
                    <div className="status-indicator-blue"></div>
                  </div>
                  <div className="customer-info">COURIER INFORMATION</div>
                  <div className="card-headings">
                    <span>GTM</span> | Servicios Especializados Agropecuarios
                  </div>
                  <div className="faded-headings">Campany</div>
                  <div className="employee-name">
                    Luis Enrique Cornejo Arreola
                  </div>
                  <div className="faded-headings">Employee</div>
                  <div className="card-headings">
                    <span>KIA Rio 2018</span> | ULX-562-8C
                  </div>
                  <div className="vehicle faded-headings">Vehicle</div>
                  <div className="delivery-info">COURIER INFORMATION</div>
                  <div className="delivery-info-row">
                    <div className="faded-headings">ETA</div>
                    <div className="card-headings">26/08/2023 11:30</div>
                  </div>
                  <div className="delivery-info-row">
                    <div className="faded-headings">Corporate</div>
                    <div className="card-headings">IBL Corporate</div>
                  </div>
                  <div className="delivery-info-row">
                    <div className="faded-headings">Item </div>
                    <div className="card-headings">5 boxes of Soap</div>
                  </div>
                  <div className="description delivery-info-row">
                    <div className="faded-headings">Description</div>
                    <div className="card-headings">
                      Take care, ítems fragile
                    </div>
                  </div>
                  <Link to={"order-details"}>
                    <div className="view-details">
                      <a href="">VIEW DETAILS</a>
                      <i class="fa fa-angle-right"></i>
                    </div>
                  </Link>
                </div>
                <div className="col-3 orderCard">
                  <div className="status">
                    <div className="status-text-red">CANCELED</div>
                    <div className="status-indicator-red"></div>
                  </div>
                  <div className="customer-info">COURIER INFORMATION</div>
                  <div className="card-headings">
                    <span>GTM</span> | Servicios Especializados Agropecuarios
                  </div>
                  <div className="faded-headings">Campany</div>
                  <div className="employee-name">
                    Luis Enrique Cornejo Arreola
                  </div>
                  <div className="faded-headings">Employee</div>
                  <div className="card-headings">
                    <span>KIA Rio 2018</span> | ULX-562-8C
                  </div>
                  <div className="vehicle faded-headings">Vehicle</div>
                  <div className="delivery-info">COURIER INFORMATION</div>
                  <div className="delivery-info-row">
                    <div className="faded-headings">ETA</div>
                    <div className="card-headings">26/08/2023 11:30</div>
                  </div>
                  <div className="delivery-info-row">
                    <div className="faded-headings">Corporate</div>
                    <div className="card-headings">IBL Corporate</div>
                  </div>
                  <div className="delivery-info-row">
                    <div className="faded-headings">Item </div>
                    <div className="card-headings">5 boxes of Soap</div>
                  </div>
                  <div className="description delivery-info-row">
                    <div className="faded-headings">Description</div>
                    <div className="card-headings">
                      Take care, ítems fragile
                    </div>
                  </div>
                  <Link to={"order-details"}>
                    <div className="view-details">
                      <a href="">VIEW DETAILS</a>
                      <i class="fa fa-angle-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="row create-order-row">
                <Link to={"create-order"}>
                  <div className="col-3 create-order">
                    <img src={plus} alt="plus" />
                    <div className="text">CREATE ORDER</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`${
              toggleState === 2 ? "tab-pane fade show active " : "tab-pane fade"
            }`}
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="providers">
              <div className="row top-buttons">
                <div className="col-3 upload-document">
                  <span>UPLOAD DOCUMENT</span>
                  <Link to={"upload-provider"}>
                    <img src={file} alt="file" />
                  </Link>
                </div>
                <div className="col-3 add-provider">
                  <span>ADD NEW PROVIDER</span>
                  <Link to="add-providers">
                    <img src={file} alt="file" />
                  </Link>
                </div>
                {/* <div className="col-3 add-provider">
                                    <Link to={'new-providers'}>
                                        <span>ADD NEW PROVIDER</span>
                                        <img src={file} alt="file" />
                                    </Link>
                                </div> */}
              </div>
              <div className="row">
                <div className="col-12">
                  <MUIDataTable
                    title={"type the name to filter"}
                    data={data}
                    columns={columns}
                    options={{
                      selectableRows: false, // <===== will turn off checkboxes in rows
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact-form */}
    </div>
  );
};
export default ProvidersPanel;

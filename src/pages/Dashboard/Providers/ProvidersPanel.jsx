import { useEffect, useState } from "react";
import search from "../../../assets/images/search.svg";
import filter from "../../../assets/images/filter.svg";
import plus from "../../../assets/images/plus.svg";
import file from "../../../assets/images/file.svg";
import ProvidersFilterModal from "./ProviderModels/providersFilterModal";
import { Link } from "react-router-dom";
import CustomDropDown from "../../../components/CustomDropDown";
import ProviderDropDown from "./SubComponents/providerDropDown";
import MUIDataTable from "mui-datatables";
import { CreateEmployeeProviderOrders, DetailsEmployeeProviderOrder, GetAllPageableProvider, GetEmployeeProviderOrders, GetIncomingProvidersPaginable, GetRecordsProvidersPaginable } from "../../../reduxToolkit/EmployeeProviders/EmployeeProvidersApi";
import { useDispatch, useSelector } from "react-redux";
import { GetEventFilters } from "../../../reduxToolkit/EmployeeEvents/EmployeeEventsApi";
import Switch from '@mui/material/Switch';
import FilterModalProviders from "./ProviderModels/FilterModalProviders";
import TablePagination from '@mui/material/TablePagination';
import FilterModal from './ProviderModels/FilterModal'
import ProviderTable from "./ProviderTable";
const ProvidersPanel = () => {
  const dispatch = useDispatch()
  // get state for store

  const { incomingProviders } = useSelector(state => state.EmployeeProviderSlice)
  console.log(incomingProviders)
  const { recordsProviders } = useSelector(state => state.EmployeeProviderSlice)
  console.log(recordsProviders)


  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  const [isSwitchOn, setIsSwitchOn] = useState(false);


  const [pageIncoming, setPageIncoming] = useState(0);
  const [rowsPerPageIncoming, setRowsPerPageincoming] = useState(4);

  const [pageRecord, setPageRecord] = useState(0);
  const [rowsPerPageRecord, setRowsPerPageRecord] = useState(4);


  const [showFilter, setShowFilter] = useState(false);
  const [orderBy, setOrderBy] = useState();
  const [sortBy, setSortBy] = useState();

  const handlFilters = (order, sort) => {
    setOrderBy(order);
    setSortBy(sort);
  }


  console.log(isSwitchOn)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleTab = (index) => {
    setToggleState(index);
  };


  const options = {
    filterType: "checkbox",
  };

  // pagination change input fn

  const handleChangePageIcoming = (event, newPage) => {
    setPageIncoming(newPage);
  };

  const handleChangeRowsPerPageIncoming = event => {
    setRowsPerPageincoming(parseInt(event.target.value));
    setPageIncoming(0);
  };

  const handleChangePageRecord = (event, newPage) => {
    setPageRecord(newPage);
  };

  const handleChangeRowsPerPageRecord = event => {
    setRowsPerPageRecord(parseInt(event.target.value));
    setPageRecord(0);
  };
  // useEffect for api call incoming with pagination
  useEffect(() => {

    const d = new Date();
    let time_in_miliseconds = Math.round(d.getTime());

    const body = {
      date: time_in_miliseconds,
      pagination: {
        "order": sortBy === 'asc' ? true : false,
        "page": pageIncoming,
        "size": rowsPerPageIncoming,
        "sortBy": orderBy ? orderBy : "id"
      }
    }
    dispatch(GetIncomingProvidersPaginable(body));
  }, [pageIncoming, rowsPerPageIncoming, orderBy, sortBy])
  // useEffect for api call records with pagination
  useEffect(() => {
    const d = new Date();
    let time_in_miliseconds = Math.round(d.getTime());

    const body = {
      date: time_in_miliseconds,
      pagination: {
        "order": sortBy === 'asc' ? true : false,
        "page": pageRecord,
        "size": rowsPerPageRecord,
        "sortBy": orderBy ? orderBy : "id"
      }
    }
    dispatch(GetRecordsProvidersPaginable(body));
  }, [pageRecord, rowsPerPageRecord, orderBy, sortBy])

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
              className={`steps btn ${toggleState === 1 ? "active-border" : "disable-border"
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
              className={`steps btn ${toggleState === 2 ? "active-border" : "disable-border"
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
            className={`${toggleState === 1 ? "tab-pane fade show active " : "tab-pane fade"
              }`}
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="orders">
              <div className=" order_header ">
                <div className="right_header">
                  <p>OPTIONS</p>
                  <div className="switch">
                    <p className={isSwitchOn ? `p_inActive` : 'p_active'}>INCOMING</p>
                    <Switch value={isSwitchOn} onChange={() => { setIsSwitchOn(!isSwitchOn) }} />
                    <p className={isSwitchOn ? `p_active` : 'p_inActive'}>RECORDS</p>
                  </div>
                </div>
                <div className="left_header">
                  <Link to="/dashboard/providers-outlet/create-order"> <span className="mr-4">Create Order </span><i class="fa fa-plus" aria-hidden="true"></i></Link>
                  <div className="filter_btn" onClick={() => setShowFilter(true)}>
                    <img src={filter} alt="filter" />
                  </div>


                  {isSwitchOn && showFilter && <FilterModal setShowFilter={setShowFilter} handlFilters={handlFilters} />}
                  {!isSwitchOn && showFilter && <FilterModal setShowFilter={setShowFilter} handlFilters={handlFilters} />}
                  {/* <div className="col-4lter-col">
                    <div className="filter" onClick={() => handleShow(true)}>
                      <img src={filter} alt="filter" />
                    </div>
                    <ProvidersFilterModal
                      show={show}
                      onHide={() => handleClose(false)}
                    />
                  </div> */}
                </div>
              </div>
              {/* incoming order list */}
              {
                !isSwitchOn && incomingProviders?.content?.length > 0 ?
                  <div className="row">
                    {
                      incomingProviders?.content?.map((item, index) => {

                        return (
                          <div className="col-3 orderCard">
                            <div className="status">
                              <div className="status-text">{item?.status?.name}</div>
                              <div className="status-indicator"></div>
                            </div>
                            <div className="customer-info">COURIER INFORMATION</div>
                            <div className="card-headings">
                              <span>{item?.provider?.acronym}</span> | {item?.provider?.providerCompanyName}
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
                              <div className="card-headings">{item?.eta}</div>
                            </div>
                            <div className="delivery-info-row">
                              <div className="faded-headings">Corporate</div>
                              <div className="card-headings">IBL Corporate</div>
                            </div>
                            <div className="delivery-info-row">
                              <div className="faded-headings">Item </div>
                              <div className="card-headings">{item?.item}</div>
                            </div>
                            <div className="description delivery-info-row">
                              <div className="faded-headings">Description</div>
                              <div className="card-headings">
                                {item?.description}
                              </div>
                            </div>
                            <Link to={"order-details"} onClick={() => {
                              dispatch(DetailsEmployeeProviderOrder(item?.id))
                              // console.log(item?.id)
                            }}>
                              <div className="view-details">
                                <a href="">VIEW DETAILS</a>
                                <i class="fa fa-angle-right"></i>
                              </div>
                            </Link>
                          </div>
                        )
                      })
                    }


                    {/* <div className="col-3 orderCard">
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
                </div> */}
                    {/* <div className="col-3 orderCard">
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
                </div> */}
                  </div>
                  :

                  !isSwitchOn &&

                  <div className="not_found">
                    <i class="fa fa-ban" aria-hidden="true"></i>
                    <p> No Icoming orders</p>
                  </div>

              }
              {/* record imcoming list */}
              {
                isSwitchOn && recordsProviders?.content?.length > 0 ?
                  <div className="row">

                    {
                      recordsProviders?.content?.map((item, index) => {

                        return (
                          <div className="col-3 orderCard" >
                            <div className="status">
                              <div className="status-text">{item?.status?.name}</div>
                              <div className="status-indicator"></div>
                            </div>
                            <div className="customer-info">COURIER INFORMATION</div>
                            <div className="card-headings">
                              <span>{item?.provider?.acronym}</span> | Servicios Especializados Agropecuarios
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
                              <div className="card-headings">{item?.eta}</div>
                            </div>
                            <div className="delivery-info-row">
                              <div className="faded-headings">Corporate</div>
                              <div className="card-headings">IBL Corporate</div>
                            </div>
                            <div className="delivery-info-row">
                              <div className="faded-headings">Item </div>
                              <div className="card-headings">{item?.item}</div>
                            </div>
                            <div className="description delivery-info-row">
                              <div className="faded-headings">Description</div>
                              <div className="card-headings">
                                {item?.description}
                              </div>
                            </div>
                            <Link to={"order-details"} onClick={() => {
                              dispatch(DetailsEmployeeProviderOrder(item?.id))
                              // console.log(item?.id)
                            }}>
                              <div className="view-details">
                                <a href="">VIEW DETAILS</a>
                                <i class="fa fa-angle-right"></i>
                              </div>
                            </Link>
                          </div>
                        )
                      })
                    }


                    {/* <div className="col-3 orderCard">
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
                </div> */}
                    {/* <div className="col-3 orderCard">
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
                </div> */}
                  </div>
                  :

                  isSwitchOn &&

                  <div className="not_found">
                    <i class="fa fa-ban" aria-hidden="true"></i>
                    <p> No Records orders</p>
                  </div>
              }


            </div>
          </div>
          <div
            className={`${toggleState === 2 ? "tab-pane fade show active " : "tab-pane fade"
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
                  {/* <MUIDataTable
                    title={"type the name to filter"}
                    data={getAllPageableProvider?.content}
                    columns={columns}
                    options={{
                      selectableRows: false, 
                    }}
                  /> */}
                  <ProviderTable toggleState={toggleState} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact-form */}
      {
        !isSwitchOn && toggleState == 1 &&
        <div className="d-flex justify-content-center">
          <TablePagination
            component="div"
            rowsPerPageOptions={[2, 4, 6, 8, 12]}
            count={incomingProviders?.totalElements}
            page={pageIncoming}
            onPageChange={handleChangePageIcoming}
            labelRowsPerPage="Provider per page"
            rowsPerPage={rowsPerPageIncoming}
            onRowsPerPageChange={handleChangeRowsPerPageIncoming}
          />
        </div>
      }

      {
        isSwitchOn && toggleState == 1 &&
        <div className="d-flex justify-content-center">
          <TablePagination
            component="div"
            rowsPerPageOptions={[2, 4, 6, 8, 12]}
            count={recordsProviders?.totalElements}
            page={pageRecord}
            onPageChange={handleChangePageRecord}
            labelRowsPerPage="Provider per page"
            rowsPerPage={rowsPerPageRecord}
            onRowsPerPageChange={handleChangeRowsPerPageRecord}
          />
        </div>
      }


    </div>
  );
};
export default ProvidersPanel;

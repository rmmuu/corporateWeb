import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import employee from "../../../assets/images/employee-4.png";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import apiInstance from "../../../Apis/Axios";
import emptyList from "../../../assets/images/warning.svg";
import { Grid } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";

let docID;
const ContractorDetails = () => {
  const navigate = useLocation();
  let { state } = navigate;
  let contractId = state?.state?.id;
  const [contractDetail, setContractDetail] = useState();
  const [companyContractor, setCompanyContractor] = useState();
  const [contractVehicle, setcontractVehicle] = useState();
  const [contractWork, setContractWork] = useState();

  const [pagePagination, setPagePagination] = useState(0);
  const [rowsPerPageProvider, setRowsPerProvider] = useState(10);

  const handleChangePageProvider = (event, newPage) => {
    setPagePagination(newPage);
  };

  const handleChangeRowsPerPageProvider = (event) => {
    setRowsPerProvider(parseInt(event.target.value));
    setPagePagination(0);
  };

  const getContractorDetail = async () => {
    await apiInstance
      .get(`contract-service/get-by-id/${contractId}`)
      .then(function (response) {
        if (response.status == 200) {
          docID = response?.data?.data?.id;
          setContractDetail(response?.data?.data);
          getCompanyByContractor();
          getVehicleByContractId();
        }
      })
      .catch(function (error) {
        console.log("sad", error?.response?.data?.message);
        toast(error?.response?.data?.message);
        document.getElementById("overlay").style.display = "none";
      });
  };

  const getCompanyByContractor = async () => {
    await apiInstance
      .post(
        `contractor-employee-service/contract/get-all-pageable-employees/by-contract-id/${contractId}`,
        {
          order: true,
          page: 0,
          size: 10,
          sortBy: "id",
        }
      )
      .then(function (response) {
        if (response.status == 200) {
          console.log(
            "Company by Employe",
            response?.data?.data?.content.length
          );
          setCompanyContractor(response?.data?.data);
        }
      })
      .catch(function (error) {
        toast(error?.response?.data?.message);
        document.getElementById("overlay").style.display = "none";
      });
  };

  const getVehicleByContractId = async () => {
    await apiInstance
      .post(
        `contractor-vehicle-service/contract/get-all-pageable/by-contract-id/${contractId}`,
        {
          order: true,
          page: 0,
          size: 10,
          sortBy: "id",
        }
      )
      .then(function (response) {
        if (response.status == 200) {
          console.log("All Vehicles", response?.data?.data?.content.length);
          setcontractVehicle(response?.data?.data);
        }
      })
      .catch(function (error) {
        toast(error?.response?.data?.message);
        document.getElementById("overlay").style.display = "none";
      });
  };

  const getContractWorkByContractId = async () => {
    let x = docID;
    await apiInstance
      .post(
        `work-shift-service/contract-work/get-all-pageable/by-contract-id/${contractId}`,
        {
          order: true,
          page: 0,
          size: 10,
          sortBy: "id",
        }
      )
      .then(function (response) {
        if (response.status == 200) {
          setContractWork(response?.data?.data);
        }
      })
      .catch(function (error) {
        toast(error?.response?.data?.message);
        document.getElementById("overlay").style.display = "none";
      });
  };

  useEffect(() => {
    getContractorDetail();
    getContractWorkByContractId();
  }, []);

  const createdDate = new Date(contractDetail?.starDate);
  const endDate = new Date(contractDetail?.endDate);
  const time = new Date(contractDetail?.endDate);

  return (
    <div className="order-details">
      <div className="head">
        <div className="headLeft">
          <Link to="/dashboard/providers-outlet">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </Link>
          <h2>CONTRACTS DETAILS</h2>
        </div>
        <Link
          to="/dashboard/contractors-outlet/update-contract"
          state={{ state: docID }}
        >
          <button className="btn btn-lg">
            UPDATE CONTRACT
            <SaveIcon />
          </button>
        </Link>
      </div>
      <div className="container">
        <div className="row content-row">
          <div className="col-9 details">
            <div className="status">
              {contractDetail?.status?.id == 22 ? (
                <span className="viewcard-container__status">
                  {contractDetail?.status?.name.replaceAll("_", " ")}
                  <FiberManualRecordIcon sx={{ fontSize: 40 }} />
                </span>
              ) : null}

              {contractDetail?.status?.id == 21 ? (
                <span className="viewcard-container__status employe-status-documents">
                  {contractDetail?.status?.name.replaceAll("_", " ")}
                  <FiberManualRecordIcon />
                </span>
              ) : null}
              {contractDetail?.status?.id == 23 ? (
                <span className="viewcard-container__status employe-status-Vacation">
                  {contractDetail?.status?.name.replaceAll("_", " ")}{" "}
                  <FiberManualRecordIcon style={{ color: "red" }} />
                </span>
              ) : null}
            </div>
            <div className="content">
              <div className="order">
                <strong>Order</strong>
                <span>{contractDetail?.status?.id}</span>
                <div className="actual-details">
                  {contractDetail?.contractor?.user?.name}
                </div>
                <div className="faded-headings">Contractor</div>
                <div className="actual-details">
                  {contractDetail?.contractor?.user?.email}
                </div>
                <div className="faded-headings">Email</div>
                <div className="actual-details">
                  {contractDetail?.contractor?.user?.phoneNumber}
                </div>
                <div className="faded-headings">Celular</div>
              </div>
              <div className="delivery-details">
                <div className="faded-headings">Order Date</div>
                <div className="actual-details">
                  {createdDate.toLocaleDateString("en-US")}
                </div>
                <div className="faded-headings">Corporate</div>
                <div className="actual-details">
                  {contractDetail?.contractor?.acronym}
                </div>
              </div>
              <div className="time-details" style={{ textAlign: "center" }}>
                <div className="faded-headings">Time Of Arrival</div>
                <div className="actual-details">
                  {time.toLocaleTimeString("it-IT")}
                </div>
                <div className="faded-headings">Delivery Date</div>
                <div className="actual-details">
                  {endDate.toLocaleDateString("en-US")}
                </div>
              </div>
              <div
                className="time-details"
                style={{
                  borderLeft: "2px solid #65ABA0",
                  height: "100%",
                  textAlign: "center",
                }}
              >
                <div className="actual-details">Description</div>
                <div className="faded-headings"></div>
                {contractDetail?.description}
              </div>
            </div>
          </div>
        </div>
        <div className="content-row contractor-cards">
          <div className="row cards-section">
            <div className="cards-first-row">
              <div className="cards-heading">EMPLOYEE</div>
              {/* <div className="cards contract-detail-employe-sec"> */}
              <div className="">
                {companyContractor && companyContractor?.content.length != 0 ? (
                  companyContractor.map(() => {
                    return (
                      <div className="card">
                        <div className="card-body">
                          <img
                            className="card-img-top"
                            src={employee}
                            alt="employee"
                          />
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
                              <div className="details">
                                Andrea Itzel González
                              </div>
                            </div>
                            <div className="card-data-row">
                              <div className="headings">Email</div>
                              <div className="details">
                                Andrea Itzel González
                              </div>
                            </div>
                            <div className="card-data-row">
                              <div className="headings">Number</div>
                              <div className="details">
                                Andrea Itzel González
                              </div>
                            </div>
                            <div className="view-details">
                              <Link to="/dashboard/contractors-outlet/employee-contractor-details">
                                <a href="">EMPLOYEE DETAILS</a>
                                <i className="fa fa-angle-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <span className="warning-msg-style">
                    NO Employee
                    <img
                      src={emptyList}
                      style={{
                        width: "100px",
                        height: "100%",
                        display: "flex",
                      }}
                    />
                  </span>
                )}
              </div>
            </div>
            <div className="cards-second-row">
              <div className="cards-heading">VEHICLE</div>
              <div className="cards">
                {contractVehicle && contractVehicle?.content.length != 0 ? (
                  contractVehicle.map((item) => {
                    return (
                      <div className="card">
                        <div className="card-body">
                          <img
                            className="card-img-top"
                            src={employee}
                            alt="employee"
                          />
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
                              <div className="details">
                                Andrea Itzel González
                              </div>
                            </div>
                            <div className="card-data-row">
                              <div className="headings">Email</div>
                              <div className="details">
                                Andrea Itzel González
                              </div>
                            </div>
                            <div className="card-data-row">
                              <div className="headings">Number</div>
                              <div className="details">
                                Andrea Itzel González
                              </div>
                            </div>
                            <div className="view-details">
                              <Link
                                to="/dashboard/providers-outlet/provider-detail"
                                state={{ approveDocumentState: "false" }}
                              >
                                <a href="">EMPLOYEE DETAILS</a>
                                <i className="fa fa-angle-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <span className="warning-msg-style">
                    NO Vehicle
                    <img
                      src={emptyList}
                      style={{
                        width: "100px",
                        height: "100%",
                        display: "flex",
                      }}
                    />
                  </span>
                )}
              </div>
            </div>
            <div className="cards-second-row">
              <div className="cards-heading">Access</div>
            </div>
            {contractWork && contractWork?.content.length != 0 ? (
              <>
                <div className="">
                  <Grid container sx={{ mt: 1 }}>
                    <Grid
                      item
                      xs={3}
                      className="contractor-access-table-heading"
                      sx={{ textAlign: "left" }}
                    >
                      NAME
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      className="contractor-access-table-heading"
                    >
                      DAY
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      className="contractor-access-table-heading"
                    >
                      FROM
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      className="contractor-access-table-heading"
                    >
                      TO
                    </Grid>
                  </Grid>
                  {contractWork &&
                    contractWork?.content?.map((item) => {
                      return (
                        <Grid container sx={{ mt: 1 }}>
                          <Grid
                            item
                            xs={3}
                            className="contractor-access-table-first"
                          >
                            {item?.zone?.name}
                          </Grid>
                          <Grid
                            item
                            xs={3}
                            className="contractor-access-table-data"
                          >
                            {item?.day?.name}
                          </Grid>
                          <Grid
                            item
                            xs={3}
                            className="contractor-access-table-data"
                          >
                            {item?.from}
                          </Grid>
                          <Grid
                            item
                            xs={3}
                            className="contractor-access-table-data"
                          >
                            {item?.to}
                          </Grid>
                        </Grid>
                      );
                    })}
                </div>
                <div className="d-flex justify-content-center">
                  <TablePagination
                    component="div"
                    rowsPerPageOptions={[10, 20, 30]}
                    count={contractWork?.totalElements}
                    page={pagePagination}
                    onPageChange={handleChangePageProvider}
                    labelRowsPerPage="Access per page"
                    rowsPerPage={rowsPerPageProvider}
                    onRowsPerPageChange={handleChangeRowsPerPageProvider}
                  />
                </div>
              </>
            ) : (
              <span className="warning-msg-style">
                NO Access
                <img
                  src={emptyList}
                  style={{
                    width: "100px",
                    height: "100%",
                    display: "flex",
                  }}
                />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractorDetails;

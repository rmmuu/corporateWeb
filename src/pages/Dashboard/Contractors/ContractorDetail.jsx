import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";
import personPng from "../../../assets/images/person.png";
import file from "../../../assets/images/file.png";
import DownloadIcon from "@mui/icons-material/Download";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation } from "react-router-dom";
import apiInstance from "../../../Apis/Axios";
import emptyList from "../../../assets/images/warning.svg";
import { toast } from "react-toastify";
import { ContractorDownloadDocuments } from "../../../reduxToolkit/EmployeeContractors/EmployeeContractorsApi";
import { useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ApproveContractorDocument from "./SubComponents/ApproveContractorDocumentOptionMenu";
import { Grid } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
let docID;
const ContractorDetail = ({ employeeDetailsFlag, approveDocumentFlag }) => {
  let dispatch = useDispatch();
  const navigate = useLocation();
  // console.log("Asdasd", navigate);
  let { state } = navigate;
  let contractId = state?.state?.id;
  let allUserData = state;
  let path = state?.approveDoc ? true : false;
  const [modalShow, setModalShow] = useState(false);

  const [filePresent, setfilePresent] = useState(true);
  const [fileIdPresent, setfileIdPresent] = useState(true);
  const [employeeDetails, setEmployeeDetails] = useState(false);
  const [approveDocument, setapproveDocument] = useState(path);

  useEffect(() => {
    setEmployeeDetails(employeeDetailsFlag);
    setapproveDocument(path);
  }, []);

  const [contractDetail, setContractDetail] = useState();
  const [companyContractor, setCompanyContractor] = useState();
  const [contractorDocument, setContractorDocument] = useState();

  const [pagePagination, setPagePagination] = useState(0);
  const [rowsPerPageProvider, setRowsPerProvider] = useState(4);

  const handleChangePageProvider = (event, newPage) => {
    setPagePagination(newPage);
  };

  const handleChangeRowsPerPageProvider = (event) => {
    setRowsPerProvider(parseInt(event.target.value));
    setPagePagination(0);
  };

  const getContractorDetail = async () => {
    await apiInstance
      .get(`contractor-service/get-by-id/${contractId}`)
      .then(function (response) {
        if (response.status == 200) {
          setContractDetail(response?.data?.data);
          docID = response?.data?.data?.user?.id;
          getContractorDocument();
        }
      })
      .catch(function (error) {
        // console.log("sad", error?.response?.data?.message);
        toast(error?.response?.data?.message);
        document.getElementById("overlay").style.display = "none";
      });
  };

  const getCompanyByContractor = async () => {
    const pagination = {
      order: true,
      page: pagePagination,
      size: rowsPerPageProvider,
      sortBy: "id",
    };
    await apiInstance
      .post(
        `contractor-employee-service/get-all-pageable/company/by-contractor-id/${contractId}`,
        pagination
      )
      .then(function (response) {
        if (response.status == 200) {
          setCompanyContractor(response?.data?.data);
        }
      })
      .catch(function (error) {
        toast(error?.response?.data?.message);
        document.getElementById("overlay").style.display = "none";
      });
  };

  const getContractorDocument = async () => {
    await apiInstance
      .get(`document-service/external/get-all/by-user-id/${docID}`)
      .then(function (response) {
        setContractorDocument(response?.data?.data);
      })
      .catch(function (error) {
        console.log("sad", error?.response?.data?.message);
        toast(error?.response?.data?.message);
        document.getElementById("overlay").style.display = "none";
      });
  };

  useEffect(() => {
    getContractorDetail();
    getCompanyByContractor();
  }, []);

  useEffect(() => {
    getCompanyByContractor();
  }, [pagePagination]);

  const createdDate = new Date(contractDetail?.createdAt);

  return (
    <>
      <div className="head">
        <div className="headLeft">
          <h2>
            <Link to="/dashboard/company">
              <ArrowBackIcon
                style={{
                  color: "#146F62",
                  fontSize: "30px",
                  marginRight: "30px",
                }}
              />
            </Link>
            CONTRACTOR DETAILS
          </h2>
        </div>
      </div>
      <div
        className="row employee_provider_detail"
        style={{ marginTop: "170px" }}
      >
        <div className="col-md-4 __userData">
          <img src={personPng} className="__userImage" />
          <div className="__body">
            <p>Name</p>
            <span>{contractDetail?.user?.name}</span>
            <p className="ishead">Email</p>
            <span> {contractDetail?.user?.email}</span>
            <p className="ishead">Phone Number</p>
            <span>{contractDetail?.user?.phoneNumber}</span>
            <p className="ishead">Password</p>
            <span>**************</span>
            <p className="ishead">Gender</p>
            <span>{contractDetail?.user?.gender?.name}</span>
          </div>
        </div>
        <div className="col-md-7 employee_files_details">
          <div
            className="__header"
            style={{ paddingRight: approveDocument === false && "40px" }}
          >
            <Grid container>
              <Grid item xs={5}>
                <p style={{ width: approveDocument && "40%" }}>FileName</p>
              </Grid>
              <Grid item xs={4}>
                <p>File</p>
              </Grid>
              <Grid item xs={3}>
                {approveDocument && <p>Options</p>}
              </Grid>
            </Grid>
          </div>
          {contractorDocument && contractorDocument?.length != 0 ? (
            contractorDocument.map((item) => {
              const date = new Date(item?.createdAt);
              return (
                <div className="__body">
                  <div className="__file">
                    <Grid container>
                      <Grid item xs={5}>
                        <div className="__name w-100">
                          <p>{item?.companyDocumentExternal?.document}</p>
                          {fileIdPresent && (
                            <span>
                              {item?.document ? item?.document : "-----"}
                            </span>
                          )}
                        </div>
                      </Grid>
                      <Grid item xs={4}>
                        {item?.path && item?.id ? (
                          <div className="__file_icon">
                            <img src={file} />
                            <div style={{ paddingLeft: "10px" }}>
                              <p>{item?.path}</p>
                              <span>
                                {item?.createdAt ? (
                                  date.toLocaleString("en-GB")
                                ) : (
                                  <p className="noFile">NO FILE</p>
                                )}
                              </span>
                            </div>
                            <DownloadIcon
                              className="download_icon"
                              onClick={() => {
                                const data = {
                                  option: "document_external",
                                  id: item?.id,
                                };
                                dispatch(ContractorDownloadDocuments(data));
                              }}
                            />
                          </div>
                        ) : (
                          <p className="noFile">NO FILE</p>
                        )}
                      </Grid>
                      <Grid item xs={3}>
                        {item?.status?.id === 19 && (
                          <>
                            <i
                              style={{ color: "green", float: "right" }}
                              class="fa fa-check"
                              aria-hidden="true"
                            ></i>
                          </>
                        )}
                        {item?.status?.id === 20 && (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "end",
                            }}
                          >
                            <i
                              style={{ color: "red", float: "right" }}
                              class="fa fa-times"
                              aria-hidden="true"
                            ></i>
                            <p
                              style={{
                                color: "red",
                                fontSize: "12px",
                                width: "75px",
                              }}
                            >
                              {item?.comment?.length > 20
                                ? `${item?.comment?.substring(0, 20)}...`
                                : item?.comment}
                            </p>
                          </div>
                        )}
                        {item?.status?.id === 18 && item?.path == null && (
                          <>
                            <i
                              style={{ color: "red", float: "right" }}
                              class="fa fa-ban"
                              aria-hidden="true"
                            ></i>
                          </>
                        )}
                        {item?.id == null && (
                          <p className="">Upload Document</p>
                        )}
                        {item?.path && item?.status?.id === 18 && (
                          <div style={{ float: "right" }}>
                            {approveDocument && (
                              <ApproveContractorDocument data={item?.id} />
                            )}
                          </div>
                        )}
                      </Grid>
                    </Grid>
                  </div>
                </div>
              );
            })
          ) : (
            <img
              src={emptyList}
              className="d-flex"
              style={{ width: "100px", height: "100px", margin: "auto" }}
            />
          )}
        </div>
        <div className="row">
          <div className="col-12 px-4 mt-5">
            <span className="emp-heading">EMPLOYEE</span>
            <div className="contractor-detail-page-sec">
              <input
                type="text"
                placeholder="Type here to filter the employee..."
                className="contractor-detail-page-search"
              />
              <SearchIcon className="contractor-detail-page-search__icon" />
            </div>
            <Accordion defaultActiveKey="0">
              {companyContractor?.content?.map((item, index) => {
                console.log("Doc<<<<",item)
                return(
                <Accordion.Item eventKey={index} key={index} className="mt-2">
                  <Accordion.Header className="accordionHeader">
                    <Grid container>
                      <Grid item xs={6} className="d-flex align-items-center">
                        {" "}
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/1.jpg"
                          className="me-2"
                        />
                        {item?.user?.name}
                      </Grid>
                      <Grid item xs={3} className="d-flex align-items-center">
                        <div className="status-text-blue">
                        {item?.user?.status?.id == 1 ? (
                            <span className="viewcard-container__status employe-status-documents" style={{color:"#808080"}}>
                              {item?.user?.status?.name.replaceAll("_"," ")} <FiberManualRecordIcon />
                            </span>
                          ) : null}
                           {item?.user?.status?.id == 2 ? (
                            <span className="viewcard-container__status employe-status-documents" style={{color:"yellow"}}>
                              {item?.user?.status?.name.replaceAll("_"," ")} <FiberManualRecordIcon />
                            </span>
                          ) : null}

                          {item?.user?.status?.id == 3 ? (
                            <span className="viewcard-container__status employe-status-documents" style={{color:"blue"}}>
                              {item?.user?.status?.name.replaceAll("_"," ")} <FiberManualRecordIcon />
                            </span>
                          ) : null}
                           {item?.user?.status?.id == 4 ? (
                            <span className="viewcard-container__status employe-status-documents" style={{color:"green"}}>
                              {item?.user?.status?.name.replaceAll("_"," ")} <FiberManualRecordIcon />
                            </span>
                          ) : null} {item?.user?.status?.id == 5 ? (
                            <span className="viewcard-container__status employe-status-documents" style={{color:"orange"}}>
                              {item?.user?.status?.name.replaceAll("_"," ")} <FiberManualRecordIcon />
                            </span>
                          ) : null} {item?.user?.status?.id == 6 ? (
                            <span className="viewcard-container__status employe-status-documents" style={{color:"red"}}>
                              {item?.user?.status?.name.replaceAll("_"," ")} <FiberManualRecordIcon />
                            </span>
                          ) : null}
                        </div>
                      </Grid>
                    </Grid>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div
                      className="employee_files_details"
                      style={{ boxShadow: "none" }}
                    >
                      <div
                        className="__header"
                        style={{
                          paddingRight: approveDocument === false && "40px",
                        }}
                      >
                        <Grid container>
                          <Grid item xs={4}>
                            <p>
                              DOCUMENT NAME
                            </p>
                          </Grid>
                          <Grid item xs={2}>
                            <p >
                              value
                            </p>
                          </Grid>
                          <Grid item xs={3}>
                            <p className="d-flex justify-content-end">File</p>
                          </Grid>
                          <Grid item xs={3}>
                            {true && (
                              <p className="d-flex justify-content-end">
                                Options
                              </p>
                            )}
                          </Grid>
                        </Grid>
                      </div>
                      {item?.documents && item?.documents?.length != 0 ? (
                        item?.documents.map((itemDoc) => {
                          const date = new Date(item?.createdAt);
                          return (
                            <div className="__body">
                              <div className="__file">
                                <Grid container>
                                  <Grid item xs={4}>
                                    <div className="__name w-100">
                                      <p>
                                        {
                                          itemDoc?.companyDocumentExternal
                                            ?.document
                                        }
                                      </p>
                                    </div>
                                  </Grid>
                                  <Grid item xs={2}>
                                    <div className="__name w-100">
                                      {fileIdPresent && (
                                        <span>
                                          {itemDoc?.document
                                            ? itemDoc?.document
                                            : "-----"}
                                        </span>
                                      )}
                                    </div>
                                  </Grid>
                                  <Grid item xs={3}>
                                    {itemDoc?.path && itemDoc?.id ? (
                                      <div className="__file_icon text-center w-100" style={{float:"right"}} >
                                        <img src={file} />
                                        <div style={{ paddingLeft: "10px" }}>
                                          <p>{item?.path}</p>
                                          <span>
                                            {itemDoc?.createdAt &&
                                              date.toLocaleString("en-GB")
                                            }
                                              
                                          </span>
                                        </div>
                                        <DownloadIcon
                                          className="download_icon"
                                          onClick={() => {
                                            const data = {
                                              option: "document_external",
                                              id: itemDoc?.id,
                                            };
                                            dispatch(
                                              ContractorDownloadDocuments(data)
                                            );
                                          }}
                                        />
                                      </div>
                                    ) : (
                                      <p className="noFile" style={{textAlign:"end"}}>NO FILE</p>
                                    )}
                                  </Grid>
                                  <Grid item xs={3}>
                                    {itemDoc?.status?.id === 19 && (
                                      <>
                                        <i
                                          style={{
                                            color: "green",
                                            float: "right",
                                          }}
                                          class="fa fa-check"
                                          aria-hidden="true"
                                        ></i>
                                      </>
                                    )}
                                    {itemDoc?.status?.id === 20 && (
                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "column",
                                          alignItems: "end",
                                        }}
                                      >
                                        <i
                                          style={{
                                            color: "red",
                                            float: "right",
                                          }}
                                          class="fa fa-times"
                                          aria-hidden="true"
                                        ></i>
                                        <p
                                          style={{
                                            color: "red",
                                            fontSize: "12px",
                                            width: "75px",
                                          }}
                                        >
                                          {itemDoc?.comment?.length > 20
                                            ? `${item?.comment?.substring(
                                                0,
                                                20
                                              )}...`
                                            : item?.comment}
                                        </p>
                                      </div>
                                    )}
                                    {itemDoc?.status?.id === 18 &&
                                      itemDoc?.path == null && (
                                        <>
                                          <i
                                            style={{
                                              color: "red",
                                              float: "right",
                                            }}
                                            class="fa fa-ban"
                                            aria-hidden="true"
                                          ></i>
                                        </>
                                      )}
                                    {itemDoc?.id == null && (
                                      <p className="">Upload Document</p>
                                    )}
                                    {itemDoc?.path &&
                                      itemDoc?.status?.id === 18 && (
                                        <div style={{ float: "right" }}>
                                          {approveDocument && (
                                            <ApproveContractorDocument
                                              data={itemDoc?.id}
                                            />
                                          )}
                                        </div>
                                      )}
                                  </Grid>
                                </Grid>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <img
                          src={emptyList}
                          className="d-flex"
                          style={{
                            width: "100px",
                            height: "100px",
                            margin: "auto",
                          }}
                        />
                      )}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              )})}
            </Accordion>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <TablePagination
          component="div"
          rowsPerPageOptions={[4, 8, 12]}
          count={companyContractor?.totalElements}
          page={pagePagination}
          onPageChange={handleChangePageProvider}
          labelRowsPerPage="Provider per page"
          rowsPerPage={rowsPerPageProvider}
          onRowsPerPageChange={handleChangeRowsPerPageProvider}
        />
      </div>
    </>
  );
};

export default ContractorDetail;

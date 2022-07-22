import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";
import personPng from "../../../assets/images/person.png";
import file from "../../../assets/images/file.png";
import DownloadIcon from "@mui/icons-material/Download";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TablePagination from '@mui/material/TablePagination';
import ProvidersCard from './ProvidersCard'
import { DownloadEmployeeProviderOrderFiles, GetAllCompanybyProviderId } from "../../../reduxToolkit/EmployeeProviders/EmployeeProvidersApi";
const ProviderEmployeeDetails = ({ employeeDetailsFlag, approveDocumentFlag }) => {

    const [filePresent, setfilePresent] = useState(true);
    const [fileIdPresent, setfileIdPresent] = useState(true);

    const [pageIncoming, setPageIncoming] = useState(0);
    const [rowsPerPageIncoming, setRowsPerPageincoming] = useState(4);

    const [orderBy, setOrderBy] = useState();
    const [sortBy, setSortBy] = useState();


    const dispatch = useDispatch();


    const { getAllProviderDocuments } = useSelector(state => state.EmployeeProviderSlice);
    console.log(getAllProviderDocuments);
    const { getEmployeeProviderById } = useSelector(state => state.EmployeeProviderSlice);
    console.log(getEmployeeProviderById);
    const { getAllCompanybyProviderId } = useSelector(state => state.EmployeeProviderSlice);
    console.log(getAllCompanybyProviderId);



    const handleChangePageIcoming = (event, newPage) => {
        setPageIncoming(newPage);
    };

    const handleChangeRowsPerPageIncoming = event => {
        setRowsPerPageincoming(parseInt(event.target.value));
        setPageIncoming(0);
    };

    useEffect(() => {
        const body = {

            providerId: localStorage.getItem("pid"),

            pagination: {
                "order": sortBy === 'asc' ? true : false,
                "page": pageIncoming,
                "size": rowsPerPageIncoming,
                "sortBy": orderBy ? orderBy : "id"
            }
        }
        dispatch(GetAllCompanybyProviderId(body))

    }, [pageIncoming, rowsPerPageIncoming, orderBy, sortBy])

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
                        {" PROVIDER Detail "}

                    </h2>
                </div>
            </div>
            <div className="row employee_provider_detail">
                <div className="col-md-4 __userData">
                    <img src={personPng} className="__userImage" />
                    <div className="__body">
                        <p>Name</p>
                        <span>{getEmployeeProviderById?.user?.name}</span>
                        <p className="ishead">Email</p>
                        <span> {getEmployeeProviderById?.user?.email}</span>
                        <p className="ishead">Phone Number</p>
                        <span>{getEmployeeProviderById?.user?.phoneNumber}</span>
                        <p className="ishead">Password</p>
                        <span>**************</span>
                        <p className="ishead">Gender</p>
                        <span>{getEmployeeProviderById?.user?.gender?.name}</span>
                    </div>
                </div>
                <div className="col-md-7 employee_files_details">

                    <div
                        className="__header"
                        style={{ paddingRight: "40px" }}
                    >
                        <p>FileName</p>
                        <p>File</p>

                    </div>
                    {
                        getAllProviderDocuments?.length > 0 ?
                            <>
                                {getAllProviderDocuments?.map((item) => {
                                    const date = new Date(item?.createdAt);
                                    return (
                                        <div className="__body">
                                            <div className="__file">
                                                <div className="__name">
                                                    <p>{item?.companyDocumentExternal?.document}</p>
                                                    {item?.document && <span>{item?.document}</span>}
                                                </div>
                                                {item?.path ? (
                                                    <div className="__file_icon">
                                                        <img src={file} />
                                                        <div style={{ paddingLeft: "10px" }}>
                                                            <p> {item?.path}</p>
                                                            <span>{date.toLocaleString('en-GB')}</span>
                                                        </div>
                                                        <DownloadIcon className="download_icon" onClick={() => {
                                                            const data = {
                                                                option: 'document_external',
                                                                id: item?.id
                                                            }
                                                            dispatch(DownloadEmployeeProviderOrderFiles(data))
                                                        }} />
                                                    </div>
                                                ) : (
                                                    <p className="noFile">NO FILE</p>
                                                )}

                                            </div>
                                        </div>
                                    )
                                })}
                            </> :
                            <div className="no_document">
                                <i class="fa fa-file" aria-hidden="true"></i>
                                <p>No Documents Found</p>
                            </div>
                    }

                </div>


            </div>
            <div className="provider_container">
                <h4>EMPLOYEES</h4>

                <ProvidersCard getAllCompanybyProviderId={getAllCompanybyProviderId} />
            </div>

            <div className="d-flex justify-content-center">
                <TablePagination
                    component="div"
                    rowsPerPageOptions={[2, 4, 6, 8, 12]}
                    count={getAllCompanybyProviderId?.totalElements}
                    page={pageIncoming}
                    onPageChange={handleChangePageIcoming}
                    labelRowsPerPage="Provider per page"
                    rowsPerPage={rowsPerPageIncoming}
                    onRowsPerPageChange={handleChangeRowsPerPageIncoming}
                />
            </div>
        </>
    );
};

export default ProviderEmployeeDetails;

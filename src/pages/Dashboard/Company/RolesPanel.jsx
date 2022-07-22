
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import deleteIcon from '../../../assets/images/ic-delete-red.svg';
import TablePagination from '@mui/material/TablePagination';
import { Accordion } from 'react-bootstrap';
import { getAllroleEmployeesPageable, rolesListing } from "../../../Apis/roles";
import DeleteRoleModal from "./CompanyModals/DeleteRoleModal";
import ManageRoleModal from "./ManageRoleModal";

const RolesPanel = () => {
    const userdata = JSON.parse(sessionStorage.getItem("userdata"));
    const companyId = "a6bd2887-0f4a-4e5f-b0b5-000d9817ab23";

    const [show, setShow] = useState(false);
    const [manageShow, setManageShow] = useState(false);
    const [roleId, setroleId] = useState()
    const [showRoleList, setShowRoleList] = useState();
    const [roleEmployees, setRoleEmployees] = useState();
    const [deleteId, setDeleteId] = useState();
    const [deleteItemName, setdeleteItemName] = useState();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);
    const [empPage, setEmpPage] = useState(0);
    const [empRowsPerPage, setEmpRowsPerPage] = useState(4);
    const [userDeleteId, setuserDeleteId] = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
        const body = {
            order: true,
            page: page,
            size: rowsPerPage,
            sortBy: "id"
        }
        rolesListing(body).then(({ data: { data } }) => {
            setShowRoleList(data)
            // console.log(data);

        }).catch(error => {
            // toast.error("something went wrong.")
        })
    }, [page, rowsPerPage, loading])

    const handleSelectTab = (selectedRoleId) => {
        setuserDeleteId(selectedRoleId);
        const body = {
            id: selectedRoleId,
            pagination: {
                order: true,
                page: empPage,
                size: empRowsPerPage,
                sortBy: "id"
            }
        }
        getAllroleEmployeesPageable(body).then(({ data: { data } }) => {
            setRoleEmployees(data)
            // console.log(data)
        }).catch(error => {
            // toast.error("something went wrong.")
        })
    }



    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
    };


    const handleEmpChangePage = (event, newPage) => {
        setEmpPage(newPage);

        const body = {
            id: userDeleteId,
            pagination: {
                order: true,
                page: empPage,
                size: empRowsPerPage,
                sortBy: "id"
            }
        }
        getAllroleEmployeesPageable(body).then(({ data: { data } }) => {
            setRoleEmployees(data)
            // console.log(data)
        }).catch(error => {
            // toast.error("something went wrong.")
        })
    };

    const handleEmpChangeRowsPerPage = event => {
        setEmpRowsPerPage(parseInt(event.target.value));
        setEmpPage(0);

        const body = {
            id: userDeleteId,
            pagination: {
                order: true,
                page: empPage,
                size: parseInt(event.target.value),
                sortBy: "id"
            }
        }
        getAllroleEmployeesPageable(body).then(({ data: { data } }) => {
            setRoleEmployees(data)
            // console.log(data)
        }).catch(error => {
            // toast.error("something went wrong.")
        })
    };

    return (
        <>
            <div className='head'>
                <div className='headLeft'>
                    <Link to="/dashboard/company">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </Link>
                    <h2>Roles Panel</h2>
                </div>
                <Link to="/dashboard/company/add-new-role">
                    <button>
                        <span>Add New Role</span>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </Link>
            </div>

            <div className="rolesPanel">
                <Accordion defaultActiveKey="0">
                    {
                        showRoleList?.content.map((item, index) => (
                            <Accordion.Item
                                eventKey={index}
                                key={index}
                            >
                                <Accordion.Header
                                    onClick={() => handleSelectTab(item.id)}
                                >
                                    <div className="rolesHeader">
                                        <div className="leftText">
                                            <p>{item.name}</p>
                                            <Link to={`/dashboard/company/add-update-role/${item.id}`}>
                                                <span>manage role</span>
                                            </Link>
                                        </div>
                                        <div
                                            className="rightText"
                                            onClick={() => {
                                                setDeleteId(item.id)
                                                setdeleteItemName("role")
                                                setShow(true)
                                            }}
                                        >
                                            <span>delete role</span><img src={deleteIcon} alt="deleteimg" />
                                        </div>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="roleBody">
                                        <div className="upper">
                                            <p style={{ textTransform: "uppercase" }}>USERS IN THE ROLE</p>
                                            <p
                                                style={{
                                                    textDecoration: "underline",
                                                    cursor: "pointer"
                                                }}
                                                onClick={() => {
                                                    setroleId(item.id)
                                                    setManageShow(true)
                                                }}
                                            >
                                                manage Users
                                            </p>
                                        </div>
                                        <p style={{ textTransform: "uppercase", fontSize: "12px" }}>Name</p>
                                        <div className="nameList row">
                                            {
                                                roleEmployees?.content.map(item => (
                                                    <div className="col-3 my-1" key={item.id}>
                                                        <img
                                                            src={deleteIcon}
                                                            alt="deleteimg"
                                                            onClick={() => {
                                                                setDeleteId(item.id)
                                                                setdeleteItemName("user")
                                                                setShow(true)
                                                            }}
                                                        />
                                                        <span>{item.name}</span>
                                                    </div>
                                                ))
                                            }
                                            <div className="d-flex justify-content-center">
                                                <TablePagination
                                                    component="div"
                                                    rowsPerPageOptions={[2, 4, 6, 8]}
                                                    count={roleEmployees?.totalElements}
                                                    page={empPage}
                                                    onPageChange={handleEmpChangePage}
                                                    labelRowsPerPage="Roles per page"
                                                    rowsPerPage={empRowsPerPage}
                                                    onRowsPerPageChange={handleEmpChangeRowsPerPage}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))
                    }

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            position: "fixed",
                            left: "45%",
                            bottom: "0",
                        }}
                    >
                        <TablePagination
                            component="div"
                            rowsPerPageOptions={[2, 4, 6, 8]}
                            count={showRoleList?.totalElements}
                            page={page}
                            onPageChange={handleChangePage}
                            labelRowsPerPage="Roles per page"
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </div>

                </Accordion>
            </div>
            <DeleteRoleModal
                show={show}
                onHide={() => setShow(false)}
                deleteid={deleteId}
                deleteitemname={deleteItemName}
                setLoading={setLoading}
            />

            <ManageRoleModal
                show={manageShow}
                onHide={() => setManageShow(false)}
                deleteid={roleId}
            />
        </>
    )
}
export default RolesPanel;

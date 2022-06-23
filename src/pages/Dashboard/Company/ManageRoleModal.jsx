import React, { useDebugValue, useEffect, useState } from 'react'
import { Modal } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
    addRoleUserList,
    getAllEmployeesByCompanyId,
    getAllEmployeesByRoleId,
    removeUserRole
} from '../../../Apis/roles';
import deleteIcon from '../../../assets/images/ic-delete-red.svg';



const ManageRoleModal = (props) => {
    const userdata = JSON.parse(sessionStorage.getItem("userdata"));
    const companyId = "bc9789f1-3f16-4759-851d-5501cc37ec97";
    // const navigate = useNavigate();
    const { id } = useParams();

    const [query, setQuery] = useState("")
    const [addUserquery, setAddUserQuery] = useState("")
    const [employeesWithRole, setEmployeesWithRole] = useState();
    const [totalEmployees, setTotalEmployees] = useState();

    useEffect(() => {

        if (props.deleteid !== undefined) {
            getAllEmployeesByRoleId(props.deleteid).then(({ data: { data } }) => {
                setEmployeesWithRole(data)
                // console.log(data)
            }).catch(error => {
                // toast.error("something went wrong.")
            })

            getAllEmployeesByCompanyId().then(({ data: { data } }) => {
                setTotalEmployees(data);
            }).catch(error => {
                // toast.error("something went wrong.")
            })
        }

    }, [props.deleteid])

    const handleDelete = (userSelectedId) => {

        removeUserRole(userSelectedId).then(({ data: { data } }) => {
            console.log(data)
        }).catch(error => {
            console.error(error)
        })

    }

    const handleAddUser = () => {
        let userIdArray = [];
        totalEmployees.map(item => {
            userIdArray.push(item.id)
        })
        const body = {
            roleId: props.roleid,
            userIds: userIdArray
        }

        addRoleUserList(body).then(({ data: { data } }) => {
            if (data) {
                toast.success("data updated successfully..!");
                props.onHide();
            }
        }).catch(error => {
            // toast.error("something went wrong.")
        })
    }
    const handleUserList = (user) => {
        setTotalEmployees(totalEmployees.filter(item => item.id !== user.id));
    }

    return (
        <Modal
            className="manage-role-panel-modal"
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    EMPLOYEES
                </Modal.Title>

                <i className="fa fa-times cross" aria-hidden="true" onClick={() => props.onHide()}></i>
            </Modal.Header>
            <Modal.Body className="manage_role_modal_body">


                <p>REMOVE USER</p>

                {/* search bar role panel */}
                <div className="row">
                    <div className="col-12">
                        <input
                            type="text"
                            class="form-control"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Type to search someone ..."
                        />
                        <span class="search_btn">
                            <button class="btn btn-default" type="button">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </span>
                    </div>
                </div>
                {/* serach option */}
                <div className='delete_some_one'>
                    {
                        employeesWithRole?.filter(user => {
                            if (query === '') {
                                return user;
                            } else if (user.name.toLowerCase().includes(query.toLowerCase())) {
                                return user;
                            }
                        }).map(user => (
                            <div className='delte_some_one_item' key={user.id}>
                                <p>{user.name}</p>
                                <img
                                    src={deleteIcon}
                                    alt="deleteimg"
                                    onClick={() => handleDelete(user.id)}
                                    style={{
                                        cursor: "pointer"
                                    }}
                                />
                            </div>
                        ))
                    }
                </div>

                <p className='mt-3'>ADD USER</p>

                {/* search bar role panel */}
                <div className="row ">
                    <div className="col-12">
                        <input
                            type="text"
                            class="form-control"
                            value={addUserquery}
                            onChange={(e) => setAddUserQuery(e.target.value)}
                            placeholder="Type to search someone ..."
                        />
                        <span class="search_btn">
                            <button class="btn btn-default" type="button">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </span>
                    </div>
                </div>

                {/* add user fileter delete */}
                <div className='add_some_one'>
                    {
                        totalEmployees?.filter(item1 => employeesWithRole?.some(item2 => item2.id !== item1.id))?.filter(user => {
                            if (addUserquery === '') {
                                return user;
                            } else if (user.name.toLowerCase().includes(addUserquery.toLowerCase())) {
                                return user;
                            }
                        }).map((item) => (
                            <span
                                key={item.id}
                                className='add_some_one_item'
                            >
                                {item.name}
                                <i
                                    className="fa fa-times"
                                    aria-hidden="true"
                                    onClick={() => handleUserList(item)}
                                ></i>
                            </span>
                        ))
                    }

                </div>
                <div className="buttonArea mt-4">
                    <button className="btns btn btn-light" onClick={() => props.onHide()}>Cancel</button>
                    <button
                        className="btn btn-success"
                        onClick={handleAddUser}
                    >Apply changes
                        {/* {
                            loading ? "Deleting...!" : "Delete"
                        } */}
                    </button>
                </div>
            </Modal.Body>

        </Modal>
    )
}

export default ManageRoleModal
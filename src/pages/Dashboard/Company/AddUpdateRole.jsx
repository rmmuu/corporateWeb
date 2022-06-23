import { Box, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import {
    getAllRoleTasks,
    updateRoleRestriction,
    addPermissionTask,
    getRoleById,
    updateRole,
    getAllroleEmployeesPageable
} from '../../../Apis/roles';
import chevron_right_solid from '../../../assets/images/chevron-right-solid.svg'
import ic_cancel from '../../../assets/images/ic-cancel.svg';
import deleteIcon from '../../../assets/images/ic-delete-red.svg';
import ManageRoleModal from './ManageRoleModal';

const AddUpdateRole = () => {
    const userdata = JSON.parse(sessionStorage.getItem("userdata"));
    const companyId = "bc9789f1-3f16-4759-851d-5501cc37ec97";
    const navigate = useNavigate();
    const { id } = useParams();

    const [show, setShow] = useState(false);
    const [deleteId, setDeleteId] = useState(id);
    const [roleDataById, setRoleDataById] = useState();
    const [roleName, setRoleName] = useState();
    const [roleRestrictions, setRoleRestrictions] = useState();
    const [selectedRestrictions, setSelectedRestrictions] = useState({
        biocrValidation: null,
        eventValidation: null,
        extraDataEmployee: null,
        id: "",
        keepSessionActiveWebApp: null,
        sharePdfInMobileApp: null,
        useTokenWebApp: null,
    })
    const [roleTasks, setRoleTasks] = useState();
    const [choosedRoleTasks, setChoosedRoleTasks] = useState();
    const [selectedTaskList, setSelectedTaskList] = useState([]);
    const [roleEmployeesPageable, setRoleEmployeesPageable] = useState();
    // console.log(selectedTaskList)
    // console.log(roleTasks)

    useEffect(() => {
        getRoleById(id).then(({ data: { data } }) => {
            setRoleDataById(data);
            setRoleName(data?.name);
            setSelectedRestrictions(data?.roleRestriction);

            data?.roleTasks.map((item) => {
                setSelectedTaskList(selectedTaskList => [...selectedTaskList.filter(value => value.id !== item.task.id), item.task])
            })

            var arrObj = [
                {
                    res: "biocrValidation",
                    check: data?.roleRestriction?.biocrValidation,
                    data: "BIOCR Validation",
                    info: "Use the BIOCR validation to confirm your identity",
                },
                {
                    res: "eventValidation",
                    check: data?.roleRestriction?.eventValidation,
                    data: "Event Validation",
                    info: "Validate the event who created in this role.",
                },
                {
                    res: "extraDataEmployee",
                    check: data?.roleRestriction?.extraDataEmployee,
                    data: "Extra Data Employee",
                    info: "Add extra data to the employee.",
                },
                {
                    res: "keepSessionActiveWebApp",
                    check: data?.roleRestriction?.keepSessionActiveWebApp,
                    data: "Keep session active",
                    info: "To keep the session al the time active in the web app",
                },
                {
                    res: "sharePdfInMobileApp",
                    check: data?.roleRestriction?.sharePdfInMobileApp,
                    data: "Share Pdf In MobileApp",
                    info: "To use the 6 digits code to log in on the web app",
                },
                {
                    res: "useTokenWebApp",
                    check: data?.roleRestriction?.useTokenWebApp,
                    data: "Use Token WebApp",
                    info: "To use the 6 digits code to log in on the web app",
                },
            ]
            setRoleRestrictions(arrObj);

            const body = {
                id: data?.id,
                pagination: {
                    order: true,
                    page: 0,
                    size: 5,
                    sortBy: "id"
                }
            }

            getAllroleEmployeesPageable(body).then(({ data: { data } }) => {
                setRoleEmployeesPageable(data)
                // console.log(data)
            }).catch(error => {
                // toast.error("something went wrong.")
            })

        }).catch(error => {
            // toast.error("something went wrong.")
        })

        getAllRoleTasks().then(({ data: { data } }) => {
            setRoleTasks(data)
            setChoosedRoleTasks(data)
        }).catch(error => {
            // toast.error("something went wrong.")
        })




    }, [])

    const handleCheckBox = (e, item) => {
        const { checked, name } = e.target
        let checkboxList = roleRestrictions;
        checkboxList.forEach(chkItem => {
            if (chkItem === item) {
                chkItem.check = checked;
                setSelectedRestrictions({ ...selectedRestrictions, [name]: checked })
            }
        })
        setRoleRestrictions(checkboxList);
    }

    // const handleSelectedTask = (task2) => {
    //     selectedTaskList.map(item => {
    //         if (item?.task?.id !== task2.id) {
    //             setSelectedTaskList(selectedTaskList => [...selectedTaskList, task2]);
    //         }
    //     })

    // }
    const handleSelectedTask = (task2) => {
        setSelectedTaskList(selectedTaskList => [...selectedTaskList.filter(item => item.id !== task2.id), task2]);
        setRoleTasks(roleTasks.filter(item => item.id !== task2.id))
    }

    const handleDeleteTask = (deleteItem) => {
        setRoleTasks(roleTasks => [...roleTasks.filter(item => item.id !== deleteItem.id), deleteItem]);
        setSelectedTaskList(selectedTaskList.filter(item => item.id !== deleteItem.id))
    }

    const handleAddUpdateRole = () => {
        const roleRestriction = {
            biocrValidation: selectedRestrictions?.biocrValidation,
            eventValidation: selectedRestrictions?.eventValidation,
            extraDataEmployee: selectedRestrictions?.extraDataEmployee,
            id: selectedRestrictions?.id,
            keepSessionActiveWebApp: selectedRestrictions?.keepSessionActiveWebApp,
            sharePdfInMobileApp: selectedRestrictions?.sharePdfInMobileApp,
            useTokenWebApp: selectedRestrictions?.useTokenWebApp,
            role: {
                createdAt: roleDataById?.createdAt,
                id: roleDataById?.id,
                name: roleName,
                roleTasks: roleDataById?.roleTasks,
                updatedAt: roleDataById?.updatedAt
            }
        }

        updateRoleRestriction(roleRestriction).then(({ data: { data } }) => {
            // console.log(data)
            const role = {
                createdAt: roleDataById?.createdAt,
                id: roleDataById?.id,
                updatedAt: roleDataById?.updatedAt
            }
            let rollTask = []
            selectedTaskList.forEach((task) => {
                rollTask.push({
                    "task": task,
                    "role": role,
                })
            })

            // console.log(rollTask)

            addPermissionTask(rollTask).then(({ data }) => {

                // console.log(data)
                const body = {
                    createdAt: roleDataById?.createdAt,
                    id: roleDataById?.id,
                    name: roleName,
                    updatedAt: roleDataById?.updatedAt
                }

                updateRole(body).then(({ data: { data } }) => {
                    console.log(data)
                    toast.success("data updated successfully..!");
                    navigate("/dashboard/company/roles-panel")

                }).catch(error => {
                    toast.error("something went wrong.")
                })

            }).catch(error => {
                // toast.error("something went wrong.")
            })

        }).catch(error => {
            // toast.error("something went wrong.")
        })


    }

    return (
        <>
            <div className='head'>
                <div className='headLeft'>
                    <Link to="/dashboard/company/roles-panel">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </Link>
                    <h2>UPDATE ROLE</h2>
                </div>
            </div>
            <div className='create_new_role'>
                <div className="row">
                    <div className="col-4">
                        <div className="create_new_role_data">
                            <h3>DATA</h3>
                            <div className="create_new_role_data_item">
                                <Box
                                    component="form"
                                    sx={{
                                        width: "100%",
                                        maxWidth: "100%",
                                        fontSize: "20px",
                                        height: "40px",
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        fullWidth
                                        placeholder="Role Name"
                                        label="Role Name"
                                        name="roleName"
                                        id="outlined-size-normal"
                                        defaultValue=" "
                                        value={roleName}
                                        onChange={(e) => setRoleName(e.target.value)}
                                    />
                                </Box>
                            </div>
                            <h3 className='mt-3'>RESTRICSIONS</h3>
                            {
                                roleRestrictions?.map((item, index) => (
                                    <div className="create_new_role_data_restrictions" key={index}>
                                        <div className="data_restrictions_item">
                                            <p className='roleName'>{item.data}</p>
                                            <label className="checkboxLabel">
                                                <input
                                                    type="checkbox"
                                                    name={item.res}
                                                    checked={item.check}
                                                    onChange={(e) => handleCheckBox(e, item)}
                                                />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <p className='roleInfo'><span>Info: </span>{item.info}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-4 mt-4 new_role_available">
                        <p>AVAILABLE</p>
                        <div className='new_role_available_container'>
                            <Accordion defaultActiveKey="0">
                                {
                                    roleTasks?.map(task1 => (
                                        task1?.name.split("_")[1] == "MENU" ?
                                            <Accordion.Item
                                                eventKey={task1?.id}
                                                key={task1?.id}
                                            >
                                                <Accordion.Header>{task1?.name.split("_")[0]}</Accordion.Header>
                                                {roleTasks.map(task2 => (
                                                    task1?.module.name === task2?.module.name && task2?.name.split("_")[1] !== "MENU" ?
                                                        <Accordion.Body>
                                                            <span>{task2?.name}</span>
                                                            <img
                                                                src={chevron_right_solid}
                                                                alt="chevron_right_solid"
                                                                onClick={() => handleSelectedTask(task2)}
                                                            />
                                                        </Accordion.Body> : null
                                                ))}
                                            </Accordion.Item> : null
                                    ))
                                }
                            </Accordion>
                        </div>
                    </div>

                    <div className="col-4 new_role_available">
                        <h3>PERMISSIONS</h3>
                        <p>CHOOSED</p>
                        <div className='new_role_available_container'>
                            <Accordion defaultActiveKey="0">
                                {
                                    choosedRoleTasks?.map(task1 => (
                                        task1?.name.split("_")[1] == "MENU" ?
                                            <Accordion.Item
                                                eventKey={task1?.id}
                                                key={task1?.id}
                                            >
                                                <Accordion.Header>{task1?.name.split("_")[0]}</Accordion.Header>
                                                {choosedRoleTasks.map(task2 => (
                                                    selectedTaskList?.map(selectedItem => (
                                                        selectedItem?.module.name === task1?.module.name && selectedItem?.name === task2?.name && selectedItem?.name.split("_")[1] !== "MENU" ?
                                                            <Accordion.Body key={selectedItem.id}>
                                                                <span>{selectedItem?.name}</span>
                                                                <img
                                                                    src={ic_cancel} alt="ic_cancel"
                                                                    onClick={() => handleDeleteTask(selectedItem)}
                                                                />
                                                            </Accordion.Body> : null
                                                    ))
                                                ))}
                                            </Accordion.Item> : null
                                    ))
                                }
                            </Accordion>
                        </div>

                    </div>
                </div>
                {/* employee */}
                <div className='role_card_detail mt-5'>
                    <div className='role_card_detail_head'>
                        <p>
                            EMPLOYEES
                            <sub
                                onClick={() => {
                                    setDeleteId(id)
                                    setShow(true)
                                }}
                            >manage Users</sub>
                        </p>
                        <ManageRoleModal
                            show={show}
                            onHide={() => setShow(false)}
                            deleteid={deleteId}
                        />
                    </div>

                    <div className="row role_card_detail_body">
                        {
                            roleEmployeesPageable?.content?.map(roleEmployee => (
                                <div className="col-md-3 role_card_detail_body_item">
                                    <img src={deleteIcon} alt="deleteimg" />
                                    <p>{roleEmployee.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='mt-5 mb-5 ' style={{ float: 'right' }}>
                    <Link to="/dashboard/company/roles-panel">
                        <button className='btn_role_cancel'>CANCEL</button>
                    </Link>
                    <button className='btn_role_create' onClick={handleAddUpdateRole}>UPDATE ROLE</button>
                </div>
            </div>
        </>
    )
}

export default AddUpdateRole;
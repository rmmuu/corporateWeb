import React, { useEffect, useState } from 'react';
import { Modal } from "react-bootstrap";
import Switch from "react-switch";
import { useDispatch, useSelector } from 'react-redux';
import { Box, InputAdornment, TextField } from '@mui/material';
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import searchIcon from '../../../../assets/images/ic-search.svg';
import userregular from "../../../../assets/images/user-regular.svg";
import { preRegisterUser, searchByEmail, searchByPhone } from '../../../../reduxToolkit/EmployeeEvents/EmployeeEventsApi';
import { SaveEmailPhoneSearchList, setReadOnly } from '../../../../reduxToolkit/EmployeeEvents/EmployeeEventsSlice';

const ManageOthersModal = (props) => {
    const dispatch = useDispatch();
    const emailPhoneSearchData = useSelector(state => state?.EmployeeEventsSlice?.emailPhoneSearchData);
    const readOnly = useSelector(state => state?.EmployeeEventsSlice?.readOnly);
    // console.log(emailPhoneSearchData)
    // +15554006679
    const [checked, setChecked] = useState(true);
    const [cellular, setCellular] = useState();
    const [email, setEmail] = useState();
    const [preRegisterObj, setPreRegisterObj] = useState({
        name: "",
        email: "",
        phoneNumber: ""
    })

    useEffect(() => {
        if (props.show === false) {
            setPreRegisterObj({
                name: "",
                email: "",
                phoneNumber: ""
            });
            setEmail('');
            setCellular('');
            dispatch(setReadOnly(false))
        }
        if (readOnly === false) {
            setPreRegisterObj({
                name: "",
                email: "",
                phoneNumber: ""
            });
            setEmail('');
            setCellular('');
        }
    }, [props.show, readOnly])

    const handleSwitch = (checked) => {
        setChecked(checked);
        setCellular("");
        setEmail("");
        setPreRegisterObj({
            name: "",
            email: "",
            phoneNumber: ""
        });
    }

    const handleSearch = () => {
        if (checked) {
            dispatch(searchByPhone(cellular)).then(({ payload: { data: { data: data } } }) => {
                setPreRegisterObj({
                    name: data?.name,
                    email: data?.email,
                    phoneNumber: data?.phoneNumber
                })
            })
        } else {
            dispatch(searchByEmail(email)).then(({ payload: { data: { data: data } } }) => {
                setPreRegisterObj({
                    name: data?.name,
                    email: data?.email,
                    phoneNumber: data?.phoneNumber
                })
            })
        }
    }


    const handleConfirm = () => {
        if (readOnly === true) {
            dispatch(SaveEmailPhoneSearchList(emailPhoneSearchData))
        } else if (readOnly === false) {
            dispatch(preRegisterUser({
                email: preRegisterObj.email,
                name: preRegisterObj.name,
                phoneNumber: preRegisterObj.cellular
            })).then(({ payload: { data: { data: data } } }) => {
                dispatch(SaveEmailPhoneSearchList(data))
            })
        }
        props.onHide();
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
                    FIND PERSON
                </Modal.Title>

                <i className="fa fa-times cross" aria-hidden="true" onClick={() => props.onHide()}></i>
            </Modal.Header>
            <Modal.Body className="manage_others_modal_body">
                <div className="d-flex align-items-center justify-content-between">
                    <span
                        style={{
                            fontSize: "10px",
                            color: checked ? "#707070" : "#65ABA0",
                            textDecoration: checked ? "none" : "underline",
                        }}
                    >FIND BY EMAIL</span>
                    <Switch
                        checked={checked}
                        onChange={handleSwitch}
                        onColor="#65ABA0"
                        onHandleColor="#178A7B"
                        handleDiameter={14}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 2px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 2px rgba(0, 0, 0, 0.2)"
                        height={11}
                        width={26}
                        className="react-switch"
                        id="material-switch"
                    />
                    <span
                        style={{
                            fontSize: "10px",
                            color: checked ? "#65ABA0" : "#707070",
                            textDecoration: checked ? "underline" : "none",
                        }}
                    >FIND BY PHONE NUMBER</span>
                </div>
                <div className="findPersonDiv">
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "100%",
                            fontSize: "20px",
                            height: "40px",
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        {
                            checked ?
                                <TextField
                                    fullWidth
                                    placeholder="4426562658"
                                    label="NUMBER"
                                    id="CELULAR"
                                    value={cellular}
                                    onChange={(e) => setCellular(e.target.value)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <PhoneIphoneIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                /> :
                                <TextField
                                    fullWidth
                                    placeholder="lcornejo@ibl.mx"
                                    label="EMAIL"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="EMAIL"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <MailOutlineIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                        }
                        <div
                            style={{
                                padding: "5px",
                                borderRadius: "5px",
                                backgroundColor: "rgb(20, 111, 98)",
                                height: "35px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "3rem",
                                marginLeft: "10px",
                                cursor: "pointer"
                            }}
                            onClick={handleSearch}
                        >
                            <img
                                src={searchIcon}
                                alt="searchIcon"
                                style={{
                                    width: "20px",
                                    height: "20px"
                                }}
                            />
                        </div>
                    </Box>
                </div>
                <p className='bottomText'><span>USUARIO NOTFUNDED </span>, please pre-register the user</p>
                <div className="preRegisterUserFields">
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "100%",
                            fontSize: "20px",
                            height: "40px",
                        }}
                    >
                        <TextField
                            fullWidth
                            placeholder="LUIS ENRIQUE"
                            label="NAME"
                            id="NAME"
                            value={preRegisterObj?.name}
                            // defaultValue=" "
                            disabled={readOnly}
                            required
                            onChange={(e) => setPreRegisterObj({ ...preRegisterObj, "name": e.target.value })}
                            className=""
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <img
                                            src={userregular}
                                            className="user_regular_img"
                                            alt="acadd_logo"
                                        />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "100%",
                            fontSize: "20px",
                            height: "40px",
                        }}
                    >
                        <TextField
                            fullWidth
                            placeholder="4426562658"
                            label="NUMBER"
                            id="CELULAR"
                            disabled={readOnly}
                            value={preRegisterObj?.phoneNumber}
                            // defaultValue=" "
                            onChange={(e) => setPreRegisterObj({ ...preRegisterObj, "phoneNumber": e.target.value })}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <PhoneIphoneIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "100%",
                            fontSize: "20px",
                            height: "40px",
                        }}
                    >
                        <TextField
                            fullWidth
                            placeholder="lcornejo@ibl.mx"
                            label="EMAIL"
                            value={preRegisterObj?.email}
                            // defaultValue=" "
                            disabled={readOnly}
                            onChange={(e) => setPreRegisterObj({ ...preRegisterObj, "email": e.target.value })}
                            id="EMAIL"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <MailOutlineIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                </div>
                <div className="buttonArea mt-4">
                    <button className="btns btn btn-light" onClick={() => props.onHide()}>Cancel</button>
                    <button
                        className="btn btn-success"
                        onClick={handleConfirm}
                    >Confirm
                        {/* {
                            loading ? "Deleting...!" : "Delete"
                        } */}
                    </button>
                </div>
            </Modal.Body>

        </Modal>
    )
}

export default ManageOthersModal
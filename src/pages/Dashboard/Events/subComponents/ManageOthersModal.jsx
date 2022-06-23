import React, { useEffect, useState } from 'react';
import { Modal } from "react-bootstrap";
import Switch from "react-switch";
import { useDispatch, useSelector } from 'react-redux';
import { Box, InputAdornment, TextField } from '@mui/material';
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import userregular from "../../../../assets/images/user-regular.svg";
import { searchByEmail, searchByPhone } from '../../../../reduxToolkit/EmployeeEvents/EmployeeEventsApi';
import { SaveEmailPhoneSearchList } from '../../../../reduxToolkit/EmployeeEvents/EmployeeEventsSlice';

const ManageOthersModal = (props) => {
    const dispatch = useDispatch();
    const emailPhoneSearchData = useSelector(state => state?.EmployeeEventsSlice?.emailPhoneSearchData);
    // console.log(emailPhoneSearchData)
    // +15556106679
    const [checked, setChecked] = useState(true);
    const [cellular, setCellular] = useState();
    const [email, setEmail] = useState();
    const [preRegisterObj, setPreRegisterObj] = useState({
        name: emailPhoneSearchData?.name,
        email: emailPhoneSearchData?.email,
        phoneNumber: emailPhoneSearchData?.phoneNumber
    })
    useEffect(() => {
    // dispatch(searchByPhone())
    dispatch(searchByEmail())
    }, [])

    const handleSwitch = (checked) => {
        setChecked(checked)
    }

    const handleChange = (e) => {
        setCellular(e.target.value);
        dispatch(searchByPhone(e.target.value))
    }

    const handleConfirm = () => {
        dispatch(SaveEmailPhoneSearchList(emailPhoneSearchData));
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
                    {
                        checked ?
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
                                    value={cellular}
                                    onChange={handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <PhoneIphoneIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box> :
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
                            </Box>
                    }
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
                            value={emailPhoneSearchData?.name}
                            defaultValue=" "
                            required
                            onChange={(e) => setPreRegisterObj([preRegisterObj, e.target.value])}
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
                            value={emailPhoneSearchData?.phoneNumber}
                            defaultValue=" "
                            onChange={(e) => setPreRegisterObj([preRegisterObj, e.target.value])}
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
                            value={emailPhoneSearchData?.email}
                            defaultValue=" "
                            onChange={(e) => setPreRegisterObj([preRegisterObj, e.target.value])}
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
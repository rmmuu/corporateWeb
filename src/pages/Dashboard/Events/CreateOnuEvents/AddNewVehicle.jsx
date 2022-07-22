import React from 'react'
import { Modal } from "react-bootstrap";
import cancel from '../../../../assets/images/ic-cancel.svg'
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOnuVehicle } from '../../../../reduxToolkit/EmployeeEvents/EmployeeEventsApi';

const AddNewVehicle = (props) => {
    const dispatch = useDispatch();
    // const vehicleData = useSelector(state => state?.EmployeeEventsSlice?.ounVehiclesData);

    const [vehicleObject, setVehicleObject] = useState({
        brand: "",
        subBrand: "",
        modal: "",
        plates: "",
        color: "",
        sn: "",
        vin: ""
    });
    const handleSubmitVehicle = () => {
        const body = {
            brand: vehicleObject?.brand,
            color: vehicleObject?.color,
            model: Number(vehicleObject?.modal),
            plate: vehicleObject?.plates,
            serialNumber: vehicleObject?.sn,
            subBrand: vehicleObject?.subBrand,
            vin: vehicleObject?.vin,
            createdAt: null,
            status: {
                id: 0,
                name: "Onuvehicle"
            },
            updatedAt: null,
        }
        dispatch(createOnuVehicle(body))
        props.onHide();
    }
    return (
        <Modal
            className="events_modal"
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <img
                    src={cancel}
                    onClick={() => props.onHide()}
                    className="modalClose"
                    alt=""
                />
            </Modal.Header>
            <Modal.Body className="docsModalBody">
                <div className="heading">
                    ADD VEHICLE
                </div>
                <div>
                    <div className='mb-3'>
                        <TextField
                            sx={{ mt: "2px" }}
                            fullWidth
                            size="small"
                            placeholder="KIA"
                            label="Brand"
                            value={vehicleObject.brand}
                            onChange={(e) => setVehicleObject({ ...vehicleObject, ["brand"]: e.target.value })}
                            InputLabelProps={{
                                style: {
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    background: "#ffffff",
                                    padding: "0px 0px 0px 4px",
                                },
                            }} // font size of input label
                            inputProps={{
                                sx: {
                                    border: "none",
                                    outline: "none",
                                    fontSize: "10px",
                                    letterSpacing: "0px",
                                    color: "#707070",
                                    "&::placeholder": {
                                        color: "#707070",
                                        fontSize: "12px",
                                    },
                                },
                            }}
                        />
                    </div>
                    <div className='mb-3'>
                        <TextField
                            sx={{ mt: "2px" }}
                            fullWidth
                            size="small"
                            placeholder="KIA"
                            label="sub-Brand"
                            value={vehicleObject.subBrand}
                            onChange={(e) => setVehicleObject({ ...vehicleObject, ["subBrand"]: e.target.value })}
                            InputLabelProps={{
                                style: {
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    background: "#ffffff",
                                    padding: "0px 0px 0px 4px",
                                },
                            }} // font size of input label
                            inputProps={{
                                sx: {
                                    border: "none",
                                    outline: "none",
                                    fontSize: "10px",
                                    letterSpacing: "0px",
                                    color: "#707070",
                                    "&::placeholder": {
                                        color: "#707070",
                                        fontSize: "12px",
                                    },
                                },
                            }}
                        />
                    </div>
                    <div className='mb-3'>
                        <TextField
                            sx={{ mt: "2px" }}
                            fullWidth
                            size="small"
                            placeholder="2019"
                            label="Modal"
                            value={vehicleObject.modal}
                            onChange={(e) => setVehicleObject({ ...vehicleObject, ["modal"]: e.target.value })}
                            InputLabelProps={{
                                style: {
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    background: "#ffffff",
                                    padding: "0px 0px 0px 4px",
                                },
                            }} // font size of input label
                            inputProps={{
                                sx: {
                                    border: "none",
                                    outline: "none",
                                    fontSize: "10px",
                                    letterSpacing: "0px",
                                    color: "#707070",
                                    "&::placeholder": {
                                        color: "#707070",
                                        fontSize: "12px",
                                    },
                                },
                            }}
                        />
                    </div>
                    <div className='mb-3'>
                        <TextField
                            sx={{ mt: "2px" }}
                            fullWidth
                            size="small"
                            placeholder="ULX-574-C"
                            label="PLATES"
                            value={vehicleObject.plates}
                            onChange={(e) => setVehicleObject({ ...vehicleObject, ["plates"]: e.target.value })}
                            InputLabelProps={{
                                style: {
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    background: "#ffffff",
                                    padding: "0px 0px 0px 4px",
                                },
                            }} // font size of input label
                            inputProps={{
                                sx: {
                                    border: "none",
                                    outline: "none",
                                    fontSize: "10px",
                                    letterSpacing: "0px",
                                    color: "#707070",
                                    "&::placeholder": {
                                        color: "#707070",
                                        fontSize: "12px",
                                    },
                                },
                            }}
                        />
                    </div>
                    <div className='mb-3'>
                        <TextField
                            sx={{ mt: "2px" }}
                            fullWidth
                            size="small"
                            placeholder="Blue"
                            label="Color"
                            value={vehicleObject.color}
                            onChange={(e) => setVehicleObject({ ...vehicleObject, ["color"]: e.target.value })}
                            InputLabelProps={{
                                style: {
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    background: "#ffffff",
                                    padding: "0px 0px 0px 4px",
                                },
                            }} // font size of input label
                            inputProps={{
                                sx: {
                                    border: "none",
                                    outline: "none",
                                    fontSize: "10px",
                                    letterSpacing: "0px",
                                    color: "#707070",
                                    "&::placeholder": {
                                        color: "#707070",
                                        fontSize: "12px",
                                    },
                                },
                            }}
                        />
                    </div>
                    <div className='mb-3'>
                        <TextField
                            sx={{ mt: "2px" }}
                            fullWidth
                            size="small"
                            placeholder="UKAS389742JSN34200"
                            label="S/N"
                            value={vehicleObject.sn}
                            onChange={(e) => setVehicleObject({ ...vehicleObject, ["sn"]: e.target.value })}
                            InputLabelProps={{
                                style: {
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    background: "#ffffff",
                                    padding: "0px 0px 0px 4px",
                                },
                            }} // font size of input label
                            inputProps={{
                                sx: {
                                    border: "none",
                                    outline: "none",
                                    fontSize: "10px",
                                    letterSpacing: "0px",
                                    color: "#707070",
                                    "&::placeholder": {
                                        color: "#707070",
                                        fontSize: "12px",
                                    },
                                },
                            }}
                        />
                    </div>
                    <div className='mb-3'>
                        <TextField
                            sx={{ mt: "2px" }}
                            fullWidth
                            size="small"
                            placeholder="VIN"
                            label="VIN"
                            value={vehicleObject.vin}
                            onChange={(e) => setVehicleObject({ ...vehicleObject, ["vin"]: e.target.value })}
                            InputLabelProps={{
                                style: {
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    background: "#ffffff",
                                    padding: "0px 0px 0px 4px",
                                },
                            }} // font size of input label
                            inputProps={{
                                sx: {
                                    border: "none",
                                    outline: "none",
                                    fontSize: "10px",
                                    letterSpacing: "0px",
                                    color: "#707070",
                                    "&::placeholder": {
                                        color: "#707070",
                                        fontSize: "12px",
                                    },
                                },
                            }}
                        />
                    </div>

                </div>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <button
                        style={{ border: "none", fontSize: "12px", background: 'white', color: '#BC0000', fontWeight: 'bold' }}
                        onClick={() => props.onHide()}
                    >
                        NOT ALLOW
                    </button>
                    <button
                        style={{ background: '#146F62', color: "white", borderRadius: "4px", border: 'none', boxShadow: '0px 0px 4px #00000080', padding: "0 2.8rem" }}
                        onClick={handleSubmitVehicle}
                    >
                        ALLOW
                    </button>
                </div>
            </Modal.Body>

        </Modal>

    );
}

export default AddNewVehicle
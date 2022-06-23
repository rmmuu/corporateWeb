import React from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from 'react-router-dom';
import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { Box } from "@mui/system";


const UpdateOrder = () => {
    return (
        <>
            <div className="head">
                <div className="headLeft">
                    <h2>
                        <Link to="/dashboard/provider/providers-outlet">
                            <ArrowBackIcon
                                style={{
                                    color: "#146F62",
                                    fontSize: "30px",
                                    marginRight: "30px",
                                }}
                            />
                        </Link>
                        UPDATE ORDER
                        {/* {employeeDetails && "Employee PROVIDER Detail"} */}
                        {/* {approveDocument && "APPROVE DOCUMENTS"} */}
                    </h2>


                </div>
            </div>
            <div className="complete_order_container">
                <div className='complete_order_body'>
                    <div className='left'>
                        <h4>DATA</h4>
                        <div className='left_conatiner'>
                            <div className='card_header'>
                                <h4>PROVIDER INFORMATION</h4>
                                <p><span>GMT | </span>Servicios Especializados Agropecuarios</p>
                                <h6>Company</h6>
                            </div>

                            <div className='card_body'>
                                <h4 className='mb-3'>DELIVERY INFORMATION</h4>
                                <div className="card_body_item">
                                    <h5>ETA</h5>
                                    <p>26/08/2023 11:30</p>
                                </div>
                                <div className="card_body_item">
                                    <h5>Corporate</h5>
                                    <p>IBL Corporate</p>
                                </div>
                                <div className="card_body_item">
                                    <h5>Item</h5>
                                    <p>5 boxes of Soap</p>
                                </div>
                                <div className="card_body_item">
                                    <h5>Description</h5>
                                    <p>Take care, ítems fragile</p>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='right'>
                        <h4>PROVIDER DATA</h4>
                        <div className='right_container'>
                            <Grid item xs={12}>
                                <Box sx={{ mt: "6px" }}>
                                    <FormControl fullWidth focused>
                                        <InputLabel id="demo-simple-select-label">EMPLOYEE</InputLabel>
                                        <Select

                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // defaultValue="EMPLOYEE"
                                            // value={employee}
                                            label="EMPLOYEE"
                                            // onChange={(e) => setEmployee(e.target.value)}
                                            sx={{
                                                fontSize: "10px",
                                                padding: "3px 3px 3px 10px",
                                            }}
                                        >
                                            <MenuItem
                                                value={10}
                                                sx={{
                                                    fontSize: "10px",
                                                }}
                                            >
                                                Active
                                            </MenuItem>
                                            <MenuItem
                                                value={20}
                                                sx={{
                                                    fontSize: "10px",
                                                }}
                                            >
                                                In-active
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ mt: "4rem" }}>
                                    <FormControl fullWidth focused>
                                        <InputLabel id="demo-simple-select-label">VEHICLE</InputLabel>
                                        <Select

                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // defaultValue="EMPLOYEE"
                                            // value={employee}
                                            label="VEHICLE"
                                            // onChange={(e) => setEmployee(e.target.value)}
                                            sx={{
                                                fontSize: "10px",
                                                padding: "3px 3px 3px 10px",
                                            }}
                                        >
                                            <MenuItem
                                                value={10}
                                                sx={{
                                                    fontSize: "10px",
                                                }}
                                            >
                                                Active
                                            </MenuItem>
                                            <MenuItem
                                                value={20}
                                                sx={{
                                                    fontSize: "10px",
                                                }}
                                            >
                                                In-active
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                        </div>

                    </div>
                </div>

                <div className='footer'>
                    <button>UPDATE ORDER</button>
                </div>
            </div>
        </>
    )
}

export default UpdateOrder
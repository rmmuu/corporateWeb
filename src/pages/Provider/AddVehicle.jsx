import React from 'react'
import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const AddVehicle = () => {

    return (
        <>
            <div className="vehicle_container">
                <div className="vehicle_continer_body">
                    <div className="card_header">

                        <div className="left_active">
                            <p>ACTIVE</p>
                            <div className="status_active"></div>
                        </div>
                    </div>

                    <div className='pic_top'>
                        <img src="https://avatars.githubusercontent.com/u/51259303?s=400&u=e168c8631fac44b5e8279c78cce26a9a10098f5d&v=4" alt="" />
                    </div>

                    <div className='container_add_vehicle'>

                        <Grid container spacing={2} sx={{ marginTop: '5rem' }}>
                            <Grid item xs={6} sx={{ position: "relative" }}>
                                <TextField
                                    focused
                                    fullWidth
                                    size="small"
                                    placeholder="Luis Enrique Cornejo Arreola"
                                    label="BRAND"
                                    id="BRAND"
                                    //   value={}
                                    //   onChange={(e) => setName(e.target.value)}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: "10px",
                                            fontWeight: 600,
                                            background: "#ffffff",
                                            padding: "0px 8px 0px 8px",
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
                                                fontSize: "8px",
                                            },
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} sx={{ position: "relative" }}>
                                <TextField
                                    focused
                                    fullWidth
                                    size="small"
                                    placeholder="Luis Enrique Cornejo Arreola"
                                    label="SUB-BRAND"
                                    id="SUB-BRAND"
                                    //   value={}
                                    //   onChange={(e) => setName(e.target.value)}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: "10px",
                                            fontWeight: 600,
                                            background: "#ffffff",
                                            padding: "0px 8px 0px 8px",
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
                                                fontSize: "8px",
                                            },
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} sx={{ position: "relative" }}>
                                <TextField
                                    focused
                                    fullWidth
                                    size="small"
                                    placeholder="Luis Enrique Cornejo Arreola"
                                    label="COLOR"
                                    id="COLOR"
                                    //   value={}
                                    //   onChange={(e) => setName(e.target.value)}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: "10px",
                                            fontWeight: 600,
                                            background: "#ffffff",
                                            padding: "0px 8px 0px 8px",
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
                                                fontSize: "8px",
                                            },
                                        },
                                    }}
                                />
                            </Grid>

                            <Grid item xs={6} sx={{ position: "relative" }}>
                                <TextField
                                    focused
                                    fullWidth
                                    size="small"
                                    placeholder="Luis Enrique Cornejo Arreola"
                                    label="MODEL"
                                    id="MODEL"
                                    //   value={}
                                    //   onChange={(e) => setName(e.target.value)}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: "10px",
                                            fontWeight: 600,
                                            background: "#ffffff",
                                            padding: "0px 8px 0px 8px",
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
                                                fontSize: "8px",
                                            },
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} sx={{ position: "relative" }}>
                                <TextField
                                    focused
                                    fullWidth
                                    size="small"
                                    placeholder="Luis Enrique Cornejo Arreola"
                                    label="PLATES"
                                    id="PLATES"
                                    //   value={}
                                    //   onChange={(e) => setName(e.target.value)}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: "10px",
                                            fontWeight: 600,
                                            background: "#ffffff",
                                            padding: "0px 8px 0px 8px",
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
                                                fontSize: "8px",
                                            },
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Box >
                                    <FormControl fullWidth focused>
                                        <InputLabel id="demo-simple-select-label">VEHICLE TYPE</InputLabel>
                                        <Select

                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // defaultValue="EMPLOYEE"
                                            // value={employee}
                                            label="VEHICLE TYPE"
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
                            <Grid item xs={6}>
                                <Box >
                                    <FormControl fullWidth focused>
                                        <InputLabel id="demo-simple-select-label">DRIVER</InputLabel>
                                        <Select

                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // defaultValue="EMPLOYEE"
                                            // value={employee}
                                            label="DRIVER"
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
                            <Grid item xs={6}>
                                <Box >
                                    <FormControl fullWidth focused>
                                        <InputLabel id="demo-simple-select-label">STATUS</InputLabel>
                                        <Select

                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // defaultValue="EMPLOYEE"
                                            // value={employee}
                                            label="STATUS"
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



                        </Grid>

                    </div>

                    <div className='footer_add_vehicle'>
                        <button>CREATE VEHICLE icon</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default AddVehicle
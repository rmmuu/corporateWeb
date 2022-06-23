import React, { useState } from 'react'
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from 'react-router-dom';
import ProfilePicModal from './Modal/ProfilePicModal';


const UpdateEmployeeProvider = () => {
    const [ProfileImage, setProfileImage] = useState("");

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
                        UPDATE EMPLOYEE INFORMATION
                        {/* {employeeDetails && "Employee PROVIDER Detail"} */}
                        {/* {approveDocument && "APPROVE DOCUMENTS"} */}
                    </h2>


                </div>
            </div>
            <div className="vehicle_container">
                <div className="vehicle_continer_body" style={{ position: "relative" }}>
                    <div className="card_header">

                        <div className="left_active">
                            <p>ACTIVE</p>
                            <div className="status_active"></div>
                        </div>
                    </div>

                    <div className='pic_top'>
                        <img src="https://avatars.githubusercontent.com/u/51259303?s=400&u=e168c8631fac44b5e8279c78cce26a9a10098f5d&v=4" alt="" />
                    </div>
                    <div className='img_btn'
                        data-toggle="modal"
                        data-target="#profilePicModal">
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>

                        <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                    </div>

                    <div className='container_add_vehicle '>
                        <Grid container spacing={2} sx={{ marginTop: '4rem', padding: '0rem 2rem' }}>
                            <Grid item xs={12} sx={{ position: "relative" }}>
                                <TextField
                                    focused
                                    fullWidth
                                    size="small"
                                    placeholder="Luis Enrique Cornejo Arreola"
                                    label="NAME"
                                    id="NAME"
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
                            <Grid item xs={12} sx={{ position: "relative", marginTop: '1rem' }}>
                                <TextField
                                    focused
                                    fullWidth
                                    size="small"
                                    placeholder="lcornejo@ibl.mx"
                                    label="USERNAME"
                                    id="NAME"
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
                                <span className="input-icons">
                                    <MailOutlineIcon />
                                </span>
                            </Grid>
                            <Grid item xs={12} sx={{ position: "relative", marginTop: '1rem' }}>
                                <TextField
                                    focused
                                    fullWidth
                                    size="small"
                                    placeholder="4427065906"
                                    label="PHONE NUMBER"
                                    id="NAME"
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
                                <span className="input-icons">
                                    <PhoneIphoneIcon />
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <Box sx={{ mt: "1rem" }}>
                                    <FormControl fullWidth focused>
                                        <InputLabel id="demo-simple-select-label">GENDER</InputLabel>
                                        <Select

                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // defaultValue="EMPLOYEE"
                                            // value={employee}
                                            label="GENDER"
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
                        <button>SAVE CHANGES icon</button>
                    </div>
                </div>

            </div>

            <ProfilePicModal setProfileImage={setProfileImage} />

        </>
    )
}

export default UpdateEmployeeProvider
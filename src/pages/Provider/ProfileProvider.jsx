import { Grid, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { setDate } from "date-fns";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
// import photo from "../../../assets/images/"
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";

const ProfileProvider = () => {
    const [date, setdate] = useState("");

    useEffect(() => {
        let todaydate = new Date();
        setdate(todaydate.getDate());
    });
    return (
        <div className="profile-sec">
            <img src={"https://avatars.githubusercontent.com/u/51259303?s=400&u=e168c8631fac44b5e8279c78cce26a9a10098f5d&v=4"} className="profile-sec__photo" />
            <span className="profile-sec__heading" style={{ margin: "70px 0 20px 0" }}>PERSONAL DATA</span>

            <div className="name">
                <Grid container spacing={2}>
                    <Grid item xs={6} sx={{ position: "relative" }}>
                        <TextField
                            fullWidth
                            focused
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
                    <Grid item xs={6} sx={{ position: "relative" }}>
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
                        <span className="input-icons"><MailOutlineIcon /></span>
                    </Grid>
                    <Grid item xs={6} sx={{ position: "relative" }}>
                        <TextField
                            focused
                            fullWidth
                            type="password"
                            size="small"
                            placeholder="Password"
                            label="PASSWORD"
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
                        <span className="input-icons"><VisibilityIcon /></span>
                    </Grid>
                    <Grid item xs={6} sx={{ position: "relative" }}>
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
                        <span className="input-icons"><PhoneIphoneIcon /></span>
                    </Grid>
                    <Grid item xs={6} sx={{ position: "relative" }}>
                        <TextField
                            focused
                            fullWidth
                            size="small"
                            placeholder="MAle"
                            label="GENDER"
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
                    <Grid item xs={6} sx={{ position: "relative" }}>
                        <div className="dateTimeInput">
                            <div className="dateTimeInput-container">
                                <LocalizationProvider dateAdapter={AdapterDateFns} >
                                    <Stack >

                                        <DesktopDatePicker

                                            label="FECHA"

                                            inputFormat="dd/MM/yyyy"
                                            // value={date}
                                            textFieldStyle={{ width: "100%" }}
                                            onChange={setDate}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6} sx={{ position: "relative" }}>
                        <TextField
                            focused
                            fullWidth
                            size="small"
                            placeholder="UKLNNSL4575SLSKA"
                            label="LINKED DEVICE"
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
                        <span className="input-icons"><DeleteIcon /></span>
                    </Grid>
                </Grid>
            </div>
            <span className="profile-sec__heading" style={{ margin: "20px 0 20px 0" }}>EXTRA DATA </span>
            <div className="name">
                <Grid container spacing={2}>
                    <Grid item xs={6} sx={{ position: "relative" }}>
                        <TextField
                            focused
                            fullWidth
                            size="small"
                            placeholder="ADDRESS 1"
                            label="ADDRESS 1"
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
                    <Grid item xs={6} sx={{ position: "relative" }}>
                        <TextField
                            focused
                            fullWidth
                            size="small"
                            placeholder="ADDRESS 2"
                            label="ADDRESS 2"
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
                    <Grid item xs={6} sx={{ position: "relative" }}>
                        <TextField
                            focused
                            fullWidth
                            size="small"
                            placeholder="Querétaro"
                            label="STATE"
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
                    </Grid>{" "}
                    <Grid item xs={6} sx={{ position: "relative" }}>
                        <TextField
                            focused
                            fullWidth
                            size="small"
                            placeholder="Querétaro"
                            label="COUNTRY"
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
                    </Grid>{" "}
                    <Grid item xs={6} sx={{ position: "relative" }}>
                        <TextField
                            focused
                            fullWidth
                            size="small"
                            placeholder="76118"
                            label="POST CODE"
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
                    </Grid>{" "}
                    <Grid item xs={6} sx={{ position: "relative" }}>
                        <TextField
                            focused
                            fullWidth
                            size="small"
                            placeholder="4425625658"
                            label="HOME NUMBER"
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
                    </Grid>{" "}
                    <Grid item xs={6} sx={{ position: "relative" }}>
                        <TextField
                            focused
                            fullWidth
                            size="small"
                            placeholder="لويس إنريكي كورنيجو أريولا"
                            label="ARABIC NAME "
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
                    <Grid item xs={6} sx={{ position: "relative" }}>
                        <TextField
                            fullWidth
                            focused
                            size="small"
                            placeholder="PHONE NUMBER"
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
                    </Grid>
                    <Grid item xs={6} sx={{ position: "relative" }}>
                        <TextField
                            focused
                            fullWidth
                            size="small"
                            placeholder="A+"
                            label="Blood Type"
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
                </Grid>
                <div className="btn-container">
                    <button className="submit-primary-btn">SAVE CHANGES <span><SaveIcon /></span></button>
                </div>
            </div>

        </div>
    );
};

export default ProfileProvider;

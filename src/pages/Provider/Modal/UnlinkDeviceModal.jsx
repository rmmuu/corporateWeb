import React from 'react'

const UnlinkDeviceModal = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <button onClick={props.onHide} className="modal-close-btn">
                X
            </button>
            <span className="main-modal-heading">UNLINK DEVICE</span>
            <div className="unlink-modal-body">
                <span className="modal-desc-text">Do you want to unpair the device? In order to be able to log in other.</span>
                <span className="modal-desc-text">confirm your password and then confirm the operation.</span>

                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ marginTop: "20px" }}>
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="UKLNNSL4575SLSKA"
                            label="LINK DEVICE"
                            id="linkDevice"
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
                    <Grid item xs={12} sx={{ position: "relative", marginBottom: "10px" }}>
                        <TextField
                            fullWidth
                            type="password"
                            size="small"
                            placeholder="Password"
                            label="PASSWORD"
                            id="password"
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
                </Grid>
                <div className="btn-div">
                    <button className="button-sec btn-cancel" onClick={props.onHide}>CANCELAR</button>
                    <button className="button-sec btn-confirm">CONFIRM</button>
                </div>
            </div>
        </Modal>
    )
}

export default UnlinkDeviceModal
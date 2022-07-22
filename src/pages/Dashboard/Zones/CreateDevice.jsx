import { Link } from 'react-router-dom'
import React from 'react'
import { TextField, Box, FormControl, InputLabel, Select, MenuItem, Switch } from '@mui/material'
import { Fingerprint } from '@mui/icons-material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetStatusListProvider } from '../../../reduxToolkit/EmployeeProviders/EmployeeProvidersApi'
import { CreateDeviceZone, GetAccessType, GetDeviceType } from '../../../reduxToolkit/EmployeeZones/EmployeeZonesApi'

const CreateDevice = () => {
    const [deviceName, setDeviceName] = React.useState('')
    const [zoneName, setZoneName] = React.useState('')
    const [deviceType, setDeviceType] = React.useState('')
    const [statusValue, setStatusValue] = React.useState('')
    const [ip, setIp] = React.useState('')
    const [accessType, setAccessType] = React.useState('')
    const [sn, setSn] = React.useState('')
    const [mac, setMac] = React.useState('')
    const [firebaseId, setFirebaseId] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [smartCard, setSmartCard] = React.useState(false)
    const [facialRecognition, setFacialRecognition] = React.useState(false)
    const [qr, setQr] = React.useState(false)
    const [pin, setPin] = React.useState(false)
    const [fingerprint, setFingerprint] = React.useState(false)
    const [bluetooth, setBluetooth] = React.useState(false)
    const [showLog, setShowLog] = React.useState(false)
    const [showUserList, setShowUserList] = React.useState(false)
    const [synchorizeSelfies, setSynchorizeSelfies] = React.useState(false)
    const [unlink, setUnlink] = React.useState(false)
    const [key, setKey] = React.useState("")
    const [serialNumber, setSerialNumber] = React.useState('')
    const [batteryTime, setBatteryTime] = React.useState('')

    const dispatch = useDispatch()
    const { getStatusListProvider } = useSelector(state => state.EmployeeProviderSlice)
    console.log(getStatusListProvider)
    const { getAccessType } = useSelector(state => state.EmployeeZonesSlice)
    console.log(getAccessType)
    const { getDeviceType } = useSelector(state => state.EmployeeZonesSlice)
    console.log(getDeviceType)

    const handelCreateDevice = () => {
        const data = {
            id: 0,
            deviceType: {
                id: deviceName?.id,
                name: deviceName?.name
            },
            zoneName,
            deviceType,
            status: {
                id: statusValue?.id,
                name: statusValue?.name
            },
            ip,
            accessType: {
                id: accessType?.id,
                name: accessType?.name
            },
            sn,
            mac,
            firebaseId,
            password,
            description,
            cardReader: smartCard,
            facialRecognition,
            qr,
            pin,
            fingerprintReader: fingerprint,
            bluetoothReader: bluetooth,
            showLog,
            showUserList,
            synchorizeSelfies,
            unlink,
            key,
            serialNumber,
            batteryTime
        }
        console.log(data)

        dispatch(CreateDeviceZone(data))
    }

    useEffect(() => {
        dispatch(GetStatusListProvider())
        dispatch(GetAccessType())
        dispatch(GetDeviceType())
    }, [])


    return (
        <div>
            <div className="update_zone_header">
                <div className="update_zone_header_Left">
                    <Link to="/dashboard/singlezonedetails">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </Link>
                    <h2>Create Device </h2>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='create_device_data'>
                    <p>DATA</p>
                    <div className='form_field'>
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                fontSize: "20px",
                                height: "50px",
                            }}
                        >
                            <TextField
                                fullWidth
                                focused
                                placeholder="ZonaUNITAD2"
                                label="Device Name"
                                id="Device Name"
                                value={deviceName}
                                onChange={(e) => setDeviceName(e.target.value)}


                            />
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                fontSize: "20px",
                                height: "50px",
                            }}
                        >
                            <TextField
                                fullWidth
                                focused
                                placeholder="Building 2"
                                label="ZONE NAME"
                                id="ZONE NAME"
                                value={zoneName}
                                onChange={(e) => setZoneName(e.target.value)}

                            />
                        </Box>
                    </div>
                    <div className='form_field'>
                        <Box sx={{
                            width: "100%",
                            maxWidth: "100%",
                            fontSize: "20px",
                            height: "50px",

                        }} >
                            <FormControl fullWidth focused>
                                <InputLabel id="demo-simple-select-label">
                                    DEVICE TYPE
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="DEVICE TYPE"

                                    value={deviceType}
                                    onChange={(e) => setDeviceType(e.target.value)}
                                >
                                    {
                                        getDeviceType?.map((item, index) => {
                                            return (
                                                <MenuItem value={item.id}>{item.name}</MenuItem>
                                            )
                                        })

                                    }


                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{
                            width: "100%",
                            maxWidth: "100%",
                            fontSize: "20px",
                            height: "50px",

                        }} >
                            <FormControl fullWidth focused>
                                <InputLabel id="demo-simple-select-label">
                                    Status
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Status"
                                    value={statusValue}
                                    onChange={(e) => setStatusValue(e.target.value)}


                                >
                                    {
                                        getStatusListProvider?.map((item, index) => {
                                            return (
                                                <MenuItem value={item.id}>{item.name}</MenuItem>
                                            )
                                        })

                                    }


                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className='form_field'>
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                fontSize: "20px",
                                height: "50px",
                            }}
                        >
                            <TextField
                                fullWidth
                                focused
                                placeholder="Coffe Shop"
                                label="IP *"
                                id="ip"
                                value={ip}
                                onChange={(e) => setIp(e.target.value)}


                            />
                        </Box>
                        <Box sx={{
                            width: "100%",
                            maxWidth: "100%",
                            fontSize: "20px",
                            height: "50px",

                        }} >
                            <FormControl fullWidth focused>
                                <InputLabel id="demo-simple-select-label">
                                    ACCESS TYPE
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="ACCESS TYPE"
                                    value={accessType}
                                    onChange={(e) => setAccessType(e.target.value)}
                                >
                                    {
                                        getAccessType?.map((item, index) => {
                                            return (
                                                <MenuItem value={item.id}>{item.name}</MenuItem>
                                            )
                                        })

                                    }


                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className='form_field'>
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                fontSize: "20px",
                                height: "50px",
                            }}
                        >
                            <TextField
                                fullWidth
                                focused
                                placeholder="Coffe Shop"
                                label="S/N*"
                                id="s/n"
                                value={sn}
                                onChange={(e) => setSn(e.target.value)}

                            />
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                fontSize: "20px",
                                height: "50px",
                            }}
                        >
                            <TextField
                                fullWidth
                                focused
                                placeholder="Coffe Shop"
                                label="MAC *"
                                id="mac"
                                value={mac}
                                onChange={(e) => setMac(e.target.value)}

                            />
                        </Box>
                    </div>
                    <div className='form_field'>
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                fontSize: "20px",
                                height: "50px",
                            }}
                        >
                            <TextField
                                fullWidth
                                focused
                                placeholder="Coffe Shop"
                                label="FIREBASE ID"
                                id="FIREBASE ID"
                                value={firebaseId}
                                onChange={(e) => setFirebaseId(e.target.value)}


                            />
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                fontSize: "20px",
                                height: "50px",
                            }}
                        >
                            <TextField
                                fullWidth
                                focused
                                placeholder="PASSWORD"
                                label="PASSWORD"
                                id="PASSWORD"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Box>
                    </div>
                    <div className='form_field'>
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                fontSize: "20px",
                                height: "50px",
                            }}
                        >
                            <TextField
                                fullWidth
                                focused
                                multiline
                                rows={3}
                                placeholder="Coffe Shop"
                                label="DESCRIPTION *"
                                id="DESCRIPTION"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}


                            />
                        </Box>

                    </div>
                </div>

            </div>


            <div className="container-fluid"
                style={{ padding: "2rem 5rem" }}
            >
                <div className="zone_update_reader">
                    <h1>READERS</h1>
                    <div className="row mt-3">
                        <div className="col-md-4 ml-5 ">
                            <input type="checkbox"
                                value={smartCard}
                                onChange={(e) => setSmartCard(e.target.checked)}

                            />
                            <label htmlFor="">SMART CARD</label>
                        </div>
                        <div className="col-md-4 ">
                            <input type="checkbox"
                                value={facialRecognition}
                                onChange={(e) => setFacialRecognition(e.target.checked)}
                            />
                            <label htmlFor="">FACIAL RECOGNITION</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 ml-5">
                            <input type="checkbox"
                                value={qr}
                                onChange={(e) => setQr(e.target.checked)}
                            />
                            <label htmlFor="">QR</label>
                        </div>
                        <div className="col-md-4 ">
                            <input type="checkbox"
                                value={pin}
                                onChange={(e) => setPin(e.target.checked)}
                            />
                            <label htmlFor="">PIN</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 ml-5">
                            <input type="checkbox"
                                value={fingerprint}
                                onChange={(e) => setFingerprint(e.target.checked)}
                            />
                            <label htmlFor="">FINGERPRINT</label>
                        </div>
                        <div className="col-md-4 ">
                            <input type="checkbox"
                                value={bluetooth}
                                onChange={(e) => setBluetooth(e.target.checked)}
                            />
                            <label htmlFor="">BLUETOOTH</label>
                        </div>
                    </div>

                </div>

                <div className="zone_update_options">
                    <h1>OPTIONS</h1>
                    <div className="row mt-3">
                        <div className="col-md-4 ml-5">
                            <input type="checkbox"
                                value={showLog}
                                onChange={(e) => setShowLog(e.target.checked)}
                            />
                            <label htmlFor="">SHOW LOGOS</label>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-4 ml-5">
                            <input type="checkbox"
                                value={showUserList}
                                onChange={(e) => setShowUserList(e.target.checked)}
                            />
                            <label htmlFor="">SHOW USER LIST</label>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-4 ml-5">
                            <input type="checkbox"
                                value={synchorizeSelfies}
                                onChange={(e) => setSynchorizeSelfies(e.target.checked)}
                            />
                            <label htmlFor="">SYNCHORONIZE SELFIES</label>
                        </div>

                    </div>

                </div>

                <div className="zone_update_lock">
                    <h1>LOCK</h1>
                    <div className="row mt-3 mb-3">
                        <div className="col-md-4 ml-5">
                            <label htmlFor="" className="label_unlink">UNLINK</label>
                            <Switch
                                // checked={checked}
                                // onChange={handleChangeSwitch}
                                value={unlink}
                                onChange={(e) => setUnlink(e.target.checked)}

                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <label htmlFor="" className="label_link">LINK</label>
                        </div>

                    </div>
                </div>
            </div>

            < div className="container-fluid"
                style={{ padding: "0rem 5rem" }}
            >
                <div className='smart_lock_setting'>
                    <h1>SMART-LOCK SETTINGS</h1>
                    <div className='form_field'>
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                fontSize: "20px",
                                height: "50px",
                            }}
                        >
                            <TextField
                                fullWidth
                                focused
                                placeholder=""
                                label="KEY"
                                id="KEY"
                                value={key}
                                onChange={(e) => setKey(e.target.value)}

                            />
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                fontSize: "20px",
                                height: "50px",
                            }}
                        >
                            <TextField
                                fullWidth
                                focused
                                placeholder="Coffe Shop"
                                label="S/N*"
                                id="S/N"
                                value={serialNumber}
                                onChange={(e) => setSerialNumber(e.target.value)}
                            // value={name}
                            // onChange={(e) => setName(e.target.value)}

                            />
                        </Box>
                    </div>
                    <div className='form_field'>
                        <Box
                            sx={{
                                width: "49%",
                                maxWidth: "100%",
                                fontSize: "20px",
                                height: "50px",
                            }}
                        >
                            <TextField
                                fullWidth
                                focused
                                placeholder=""
                                label="BATTERY TIME"
                                id="BATTERY TIME"
                                value={batteryTime}
                                onChange={(e) => setBatteryTime(e.target.value)}

                            />
                        </Box>

                    </div>

                </div>

            </div>

            <div className='create_device_footer'>
                <button className='cancel'>CANCEL</button>
                <button className='create' onClick={() => {
                    handelCreateDevice()
                }}>CREATE DEVICE</button>
            </div>

        </div>
    )
}

export default CreateDevice
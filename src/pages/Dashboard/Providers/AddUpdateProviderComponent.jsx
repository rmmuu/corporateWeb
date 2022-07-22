import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

import { Box } from "@mui/system";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CreateEmployeeProvider, CreateEmployeeProviderPreUser, GetEmployeeProviderByEmail, GetEmployeeProviderByPhoneNumber, GetGenderListProvider, GetStatusListProvider, UpdateEmployeeProviderCompany, UpdateEmployeeProviderInfo } from "../../../reduxToolkit/EmployeeProviders/EmployeeProvidersApi";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiInstance from "../../../Apis/Axios";
const AddUpdateProviderComponent = ({
  addProviderFlag,
  addContractorFlag,
  updateProviderFlag,
  updateContractorFlag,
}) => {


  const { getEmployeeProviderByEmail } = useSelector(state => state.EmployeeProviderSlice)
  console.log(getEmployeeProviderByEmail)
  const { getEmployeeProviderByPhoneNumber } = useSelector(state => state.EmployeeProviderSlice)
  console.log(getEmployeeProviderByPhoneNumber)
  const { getEmployeeProviderById } = useSelector(state => state.EmployeeProviderSlice);
  console.log(getEmployeeProviderById);


  const { getStatusListProvider } = useSelector(state => state.EmployeeProviderSlice);
  console.log(getStatusListProvider);

  const { getGnderListProvider } = useSelector(state => state.EmployeeProviderSlice);
  console.log(getGnderListProvider);

  const dispatch = useDispatch()
  const [acronym, setAcronym] = useState();
  const [companyName, setCompanyName] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [statusprovider, setStatusProvider] = useState();
  const [gender, setGender] = useState();
  const [updateProvider, setUpdateProvider] = useState(false);
  const [addContractor, setaddContractor] = useState(false);
  const [updateContractor, setupdateContractor] = useState(false);
  const [addProvider, setaddProvider] = useState(false);

  const [checkEmail, setCheckEmail] = useState();
  const [checkPhone, setCheckphone] = useState();

  let navigate = useNavigate();



  // let ph = +524427065909

  // let ph = +524427011111

  useEffect(() => {
    console.log(
      { addProviderFlag },
      { addContractorFlag },
      { updateProviderFlag },
      { updateContractorFlag }
    );
    setaddProvider(addProviderFlag);
    setaddContractor(addContractorFlag);
    setUpdateProvider(updateProviderFlag);
    setupdateContractor(updateContractorFlag);
  }, []);

  useEffect(() => {
    dispatch(GetStatusListProvider())
    dispatch(GetGenderListProvider())
  }, [])

  const formHandle = async () => {
    const body = {
      acronym,

      providerCompanyName: companyName,

      phoneNumber,
      name,
      email,
      gender: {
        id: gender
      },
    }
    const createprovider = {
      acronym,
      providerCompanyName: companyName,
      user: {
        id: getEmployeeProviderByPhoneNumber?.data?.id || ''
      },
      company: {
        id: localStorage.getItem('cId')
      }
    }


    // check with email
    let res = await fetch("http://38.65.139.14:8080/corporate-user-pre-prod-v1/user-service/get-by-email/" + email)
      .then(data => {
        console.log(data)
        return data
      })
      .catch(err => {

        // toast("email not exist")
      })

    let emailData = await res.json()
    // check with phone number 

    let phoneData = await apiInstance.get("user-service/get-by-phone-number/" + phoneNumber)
      .then(data => {

        console.log(data)
        return data
      })
      .catch(err => {
        console.log("phone", err)
        // toast("Phone number not use")
      })


    //case 1 both email and phone number not exsit (pre register)




    if (emailData?.success == false && phoneData == undefined) {
      // dispatch(CreateEmployeeProviderPreUser(body))
      let preUser = await apiInstance.post(`authentication-service/pre-register-user`, { email, name, phoneNumber }
      ).then(data => {

        console.log(data)
        return data
      })
        .catch(err => {
          console.log("phone", err)
          // toast("Phone number not use")
        })

      // setPreUser(preres?.data?.data)

      const createprovider = {
        acronym,
        providerCompanyName: companyName,
        user: {
          id: preUser?.data?.data?.id
        },
        company: {
          id: localStorage.getItem('cId')
        }
      }
      dispatch(CreateEmployeeProvider({ createprovider, navigate }))


    }
    console.log(emailData, phoneData)

    if (emailData?.success == true || phoneData?.status == 200) {

      const createprovider = {
        acronym,
        providerCompanyName: companyName,
        user: {
          id: phoneData?.data?.id || emailData?.data?.id || ''
        },
        company: {
          id: localStorage.getItem('cId')
        }
      }
      dispatch(CreateEmployeeProvider({ createprovider, navigate }))

    }


  }

  useEffect(() => {


    setAcronym(updateProvider && getEmployeeProviderById?.acronym || '')
    setCompanyName(updateProvider && getEmployeeProviderById?.providerCompanyName || '')
    setName(updateProvider && getEmployeeProviderById?.user?.name || '')
    setEmail(updateProvider && getEmployeeProviderById?.user?.email || '')
    setPhoneNumber(updateProvider && getEmployeeProviderById?.user?.phoneNumber || '')





  }, [getEmployeeProviderById])

  const formHandleUpdate = () => {

    const body = {
      id: getEmployeeProviderById?.user?.id,
      phoneNumber,
      name,
      email,
      password: "1234",
      gender: {
        id: gender
      },
      userType: {
        id: getEmployeeProviderById?.user?.userType?.id
      },
      status: {
        id: getEmployeeProviderById?.user?.status?.id
      }
    }
    const updprovider = {
      id: getEmployeeProviderById?.id,
      status: {
        id: statusprovider
      },
      acronym,
      providerCompanyName: companyName,
    }


    dispatch(UpdateEmployeeProviderInfo(body))
    dispatch(UpdateEmployeeProviderCompany(updprovider))
  }

  return (
    <>
      <div className="head">
        <h2>
          <Link to="">
            <ArrowBackIcon
              style={{
                color: "#146F62",
                fontSize: "30px",
                marginRight: "30px",
              }}
            />
          </Link>

          {addProvider && "ADD PROVIDER"}
          {addContractor && "ADD CONTRACTOR"}
          {updateContractor && "UPDATE CONTRACTOR"}
          {updateProvider && "UPDATE PROVIDER"}
        </h2>
        {/* <div style={{ display: "flex" }}>
          <Link to="/dashboard/uploademployeefile">
            <button className="btn btn-lg">
              {addProvider && "ADD PROVIDER"}
              {addContractor && "ADD CONTRACTOR"}
              {updateContractor && "UPDATE CONTRACTOR"}
              {updateProvider && "UPDATE PROVIDER"}
              <SaveIcon />
            </button>
          </Link>
        </div> */}
      </div>
      <div className="mt-5  add_provider">
        <div className="col-md-6 add_provider_content">
          <p className="provider_header">
            {/* {!updateProvider
              ? addContractor && "CONTRACTOR COMPANY"
              : "Provider Company"}
               */}

            {(addProvider || updateProvider) && "Company Information"}
            {(addContractor || updateContractor) && "CONTRACTOR COMPANY"}
          </p>

          <Box
            className="add_provider_text_field"
            style={{ marginTop: "28.5px" }}
            sx={{
              width: "100%",
              maxWidth: "100%",
              fontSize: "20px",
              height: "40px",
            }}
          >
            <TextField
              focused
              fullWidth
              placeholder="IBL"
              label="Acronym"
              id="Acronym"
              value={acronym}
              onChange={(e) => setAcronym(e.target.value)}
              className=""
            />
          </Box>
          <Box
            className="add_provider_text_field"
            sx={{
              width: "100%",
              maxWidth: "100%",
              fontSize: "20px",
              height: "40px",
            }}
          >
            <TextField
              focused
              fullWidth
              placeholder="Intelligence Bereau Laboratory"
              label="Company Name"
              id="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className=""
            />
          </Box>
          <Box
            className="add_provider_text_field"
            sx={{
              width: "100%",
              maxWidth: "100%",
              fontSize: "20px",
              height: "40px",
            }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={statusprovider}
                onChange={(e) => setStatusProvider(e.target.value)}
                label="Status"
              >
                {
                  getStatusListProvider?.map(item => {
                    if (item?.id == getEmployeeProviderById?.user?.gender?.id) {
                      return <MenuItem selected value={item?.id}>{getEmployeeProviderById?.user?.gender?.name}</MenuItem>
                    } else {
                      return <MenuItem value={item?.id}>{item?.name}</MenuItem>
                    }
                  })
                }

              </Select>
            </FormControl>
          </Box>
          <p className="provider_header">
            {(addProvider || updateProvider) && "Provider Company"}
            {(addContractor || updateContractor) && "CONTRACTOR COMPANY"}
          </p>
          <Box
            className="add_provider_text_field"
            style={{ marginTop: "28.5px" }}
            sx={{
              width: "100%",
              maxWidth: "100%",
              fontSize: "20px",
              height: "40px",
            }}
          >
            <TextField
              focused
              fullWidth
              placeholder="Luis Enrique Cornejo Arreola"
              label="NAME"
              id="NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=""
            />
          </Box>
          <Box
            className="add_provider_text_field"
            sx={{
              width: "100%",
              maxWidth: "100%",
              fontSize: "20px",
              height: "40px",
            }}
          >
            <TextField
              focused
              fullWidth
              placeholder="lcornejo@ibl.mx"
              label="Email"
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            className="add_provider_text_field"
            sx={{
              width: "100%",
              maxWidth: "100%",
              fontSize: "20px",
              height: "40px",
            }}
          >
            <TextField
              focused
              fullWidth
              placeholder="4427065906"
              label="Phone Number"
              id="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="NoShadowInput"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PhoneIphoneIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          {/* {!addContractor && ( */}

          {/* )} */}

          <Box
            style={{ padding: "0px 12px" }}
            sx={{
              width: "100%",
              maxWidth: "100%",
              fontSize: "20px",
              height: "40px",
            }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Age"
                onChange={(e) => setGender(e.target.value)}
              >
                {
                  getGnderListProvider?.map(item => (

                    <MenuItem value={item?.id}>{item?.name}</MenuItem>
                  ))
                }

              </Select>
            </FormControl>
          </Box>
          <div className="footer">
            <button className="cancel" >cancel</button>
            <button onClick={() => { addProvider && formHandle(); updateProvider && formHandleUpdate() }}> {updateProvider && "UPDATE "} {addProvider && "CREATE"}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUpdateProviderComponent;

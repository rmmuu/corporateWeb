import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation,useNavigate   } from "react-router-dom";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { debounce } from "lodash";
import { Box } from "@mui/system";
import { toast } from 'react-toastify';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import apiInstance from "../../../Apis/Axios";

const UpdateContractor = () => {
  const [acronym, setAcronym] = useState();
  const [companyName, setCompanyName] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [status, setStatus] = useState();
  const [gender, setGender] = useState();
  const [updateProvider, setUpdateProvider] = useState(false);
  const [addContractor, setaddContractor] = useState(false);
  const [updateContractor, setupdateContractor] = useState(false);
  const [addProvider, setaddProvider] = useState(false);
  
  const [findEmail, setFindEmail]=useState(false)
  
  const navigate = useLocation();
  let { state } = navigate;
  let contractId = state?.state?.id;
  
  const [contractDetail, setContractDetail] = useState();
  const [contractorData, setContractorData] = useState();


  const getContractorDetail = async () => {
    await apiInstance
      .get(`contractor-service/get-by-id/${contractId}`)
      .then(function (response) {
        if (response.status == 200) {
          setContractDetail(response?.data?.data);
        }
      })
      .catch(function (error) {
        toast(error?.response?.data?.message);
        document.getElementById("overlay").style.display = "none";
      });
  };

  const getContractorDocument = async () => {
    await apiInstance
      .get(`contractor-service/get-by-id/${contractId}`)
      .then(function (response) {
        setContractorData(response?.data?.data)
        setAcronym(response?.data?.data?.acronym)
        setCompanyName(response?.data?.data?.contractorCompanyName)
        setEmail(response?.data?.data.user?.email)
        setName(response?.data?.data.user?.name)
        setPhoneNumber(response?.data?.data.user?.phoneNumber)
        setStatus(response?.data?.data.status?.name)
        setGender(response?.data?.data.user?.gender?.name)
      })
      .catch(function (error) {
        toast(error?.response?.data?.message);
        document.getElementById("overlay").style.display = "none";
      });
  };

  const updateContractCompanyData=async()=>{
    const updateCont = {
      id: contractorData?.id,
      status: {
        id: contractorData?.status?.id
      },
      acronym,
      contractorCompanyName: companyName,
    }
     await apiInstance.put(`contractor-service/update`,updateCont
  ).then(function (response) {
    toast("contractor Company  updated successfully")
    navigate("dashboard/contractors-outlet", { replace: true });
  })
      .catch(function (error) {
        toast(error?.response?.data?.message)
        document.getElementById("overlay").style.display = "none"
      });
  }
  const updateContracUsertData=async()=>{
    const body = {
      id: contractorData?.user?.id,
      phoneNumber,
      name,
      email,
      password: "1234",
      gender: {
        id: gender
      },
      userType: {
        id: contractorData?.user?.userType?.id
      },
      status: {
        id: contractorData?.user?.status?.id
      }
    }
    await apiInstance.put(`user-service/update`,body
  ).then(function (response) {
    toast("contractor Updated successfully")
    navigate("dashboard/contractors-outlet", { replace: true });})
      .catch(function (error) {
        toast(error?.response?.data?.message)
        document.getElementById("overlay").style.display = "none"
      });
  }
  const handleSubmit=()=>{
    updateContractCompanyData();
    updateContracUsertData();
  }

  useEffect(()=>{
    getContractorDetail()
    getContractorDocument()
  },[])

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

         UPDATE CONTRACTOR
        </h2>
        <div style={{ display: "flex" }}>
        {/* <Link to="/dashboard/uploademployeefile"> */}

          
            <button className="btn btn-lg" onClick={handleSubmit}>
             UPDATE CONTRACTOR
              <SaveIcon />
            </button>
         
        </div>
      </div>
      <div className="mt-5  add_provider">
        <div className="col-md-6 add_provider_content">
          <p className="provider_header">
            CONTRACTOR COMPANY
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
          <p className="provider_header">
             CONTRACTOR COMPANY
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
              fullWidth
              placeholder="Luis Enrique Cornejo Arreola"
              label="NAME"
              id="NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=""
              focused 
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
              fullWidth
              placeholder="lcornejo@ibl.mx"
              label="Email"
              id="Email"
              value={email}
              focused 
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
              fullWidth
              placeholder="4427065906"
              label="Phone Number"
              id="Phone Number"
              value={phoneNumber}
              focused 
              onChange={(e) => {setPhoneNumber(e.target.value)
               }}
             
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
          {!addContractor && (
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
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  label="Status"
              focused 

                >
                  <MenuItem value="1">Active</MenuItem>
                  <MenuItem value="2">Vacations</MenuItem>
                  <MenuItem value="3">Locked</MenuItem>
                  <MenuItem value="4">Inactive</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}

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
                displayEmpty={false}
                label="Age"
                defaultValue={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value="1">Male</MenuItem>
                <MenuItem value="2">Female</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </>
  );
};

export default UpdateContractor;

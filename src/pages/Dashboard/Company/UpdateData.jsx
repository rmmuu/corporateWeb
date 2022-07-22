import React, { useEffect, useState } from 'react'
import { Box, TextField } from '@mui/material';
import submitupload from '../../../assets/images/upload.PNG'
import LefletMap from '../../../components/LefletMap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getComopanyRestructions, getCompanyData, updateComopanyImg, updateComopanyRestructions, updateCompanyData } from '../../../Apis/companydata';
import { toast } from 'react-toastify';
import { companyRestrictions } from '../../../reduxToolkit/EmployeeEvents/EmployeeEventsApi';


const UpdateData = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const companyId = "a6bd2887-0f4a-4e5f-b0b5-000d9817ab23";

  const [getCompany, setGetCompany] = useState();
  const [showMap, setShowMap] = useState(false);
  const [arrData, setarrData] = useState();
  const [updateCompanyImg, setUpdateCompanyImg] = useState();
  const [companyImg, setCompanyImg] = useState();
  const [updateres, setUpdateres] = useState();
  const [companyData, setCompanyData] = useState({
    id: getCompany?.id,
    status: {
      id: getCompany?.status.id
    },
    acronym: getCompany?.acronym,
    name: getCompany?.name,
    address: getCompany?.address,
    latitud: getCompany?.latitud,
    longitud: getCompany?.longitud,
    ip: getCompany?.ip
  });

  useEffect(() => {

    getCompanyData(companyId).then(({ data: { data } }) => {
      setGetCompany(data);
      setCompanyData({
        id: data?.id,
        status: {
          id: data?.status.id
        },
        acronym: data?.acronym,
        name: data?.name,
        address: data?.address,
        latitud: data?.latitud,
        longitud: data?.longitud,
        ip: data?.ip
      })

      getComopanyRestructions(data?.id).then(({ data: { data } }) => {
        const resObj = {
          id: data?.id,
          emailService: data?.emailService,
          smsService: data?.smsService,
          driveService: data?.driveService,
          isOnuEvent: data?.isOnuEvent,
          alertTimeIncomingEvent: data?.alertTimeIncomingEvent,
          alertTimeIncomingInvitation: data?.alertTimeIncomingInvitation,
          fireArmsModule: data?.fireArmsModule,
        }
        setUpdateres(resObj)
        const arrObj = [
          {
            res: "emailService",
            check: data?.emailService,
            data: "Email Service",
            info: "Send updates to User update through email.",
          },
          {
            res: "isOnuEvent",
            check: data?.isOnuEvent,
            data: "is ONU Event Type",
            info: "Change the design and add more data.",
          },
          {
            res: "alertTimeIncomingEvent",
            check: data?.alertTimeIncomingEvent,
            data: "Alert time incoming event",
            info: "Show an alert 1 hour before the event start.",
          },
          {
            res: "alertTimeIncomingInvitation",
            check: data?.alertTimeIncomingInvitation,
            data: "Alert time incoming invitation",
            info: "Show an alert 1 hour before the event start.",
          },
          {
            res: "smsService",
            check: data?.smsService,
            data: "SMS Service",
            info: " Send sms to actions, reset password, confirm account, etc.",
          },
          {
            res: "fireArmsModule",
            check: data?.fireArmsModule,
            data: "Fire Arms Module",
            info: "The Employees will have permissiion to has fire arms.",
          },
          {
            res: "driveService",
            check: data?.driveService,
            data: "Drive Service",
            info: "Storage image on the cloud.",
          },
        ]
        setarrData(arrObj);
      }).catch(error => {
        toast.error("something went wrong in company restructions!")
      })

    }).catch(error => {
      toast.error("something went wrong in company data!")
    })
  }, [])

  const onImageChange = (e) => {
    setUpdateCompanyImg(e.target.files[0])
    const [file] = e.target.files;
    setCompanyImg(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData({ ...companyData, [name]: value })
  }

  const handleCheckBox = (e, index) => {
    let checkboxList = arrData;
    checkboxList.forEach(chkItem => {
      if (chkItem === index) {
        chkItem.check = e.target.checked;
        setUpdateres({ ...updateres, [index.res]: e.target.checked })
      }
    })
    setarrData(checkboxList);
  }

  const handleSubmit = () => {
    updateComopanyRestructions(updateres).then(({ data: { data } }) => {

      dispatch(companyRestrictions(companyId));

      updateCompanyData(companyData).then(data => {

        let formData = new FormData();
        formData.append('id', companyId);
        formData.append('option', "company");
        formData.append('file', updateCompanyImg);

        if (updateCompanyImg !== undefined) {
          updateComopanyImg(formData).then((data) => {
            // console.log(data);
            toast.success("Company Data updated successfully!");
            navigate('/dashboard/company');

          }).catch(error => {
            toast.error("something went wrong in updating image company section")
          })
        } else {
          navigate('/dashboard/company');
        }

      }).catch(error => {
        toast.error("something went wrong in updating company profile section")
      })

    }).catch(error => {
      toast.error("something went wrong in company restruction section!")
    });

    // console.log(updateCompanyImg)



    // dispatch(updateCompanyAction(companyData, navigate));

  }



  return (
    <div>
      <div className='head'>
        <div className='headLeft'>
          <Link to="/dashboard/company">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </Link>
          <h2>Corporate data</h2>
        </div>
        <button onClick={handleSubmit}>
          <span>Update data</span>
          <i className="fa fa-file" aria-hidden="true"></i>
        </button>
      </div>
      <div className='mt-5 row dragdrop_row'>
        <div className="col-lg-6 col-md-6">
          <h4>data</h4>
          <div className="mt-1 gy-4 row">
            <div className="col-lg-6">
              <Box
                component="form"
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  fontSize: "20px",
                  height: "40px",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  fullWidth
                  placeholder="Inteligence Bereau Laboratory"
                  label="COMPANY NAME"
                  name="name"
                  id="outlined-size-normal"
                  defaultValue="Normal"
                  value={companyData.name}
                  onChange={handleChange}
                />
              </Box>
            </div>
            <div className="col-lg-6">
              <Box
                component="form"
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  fontSize: "20px",
                  height: "40px",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  fullWidth
                  placeholder="IBL"
                  label="ACRONYM"
                  name="acronym"
                  id="outlined-size-normal"
                  defaultValue="Normal"
                  value={companyData.acronym}
                  onChange={handleChange}
                />
              </Box>
            </div>
            <div className="col-lg-12">
              <Box
                component="form"
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  fontSize: "20px",
                  height: "40px",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  fullWidth
                  placeholder="Paseos de san miguel"
                  label="ADDRESS"
                  name="address"
                  id="outlined-size-normal"
                  defaultValue="Normal"
                  value={companyData.address}
                  onChange={handleChange}
                />
              </Box>
            </div>
          </div>
          <h4
            className="pull-right"
            onClick={() => setShowMap(!showMap)}
          >
            OR CLICK TO SHOW IN THE MAP
          </h4>
          {
            showMap ? <div className='my-5'>
              <LefletMap
                latlng={[31.5204, 74.3587]}
              // latlng={[companyData?.latitud, companyData?.longitud]}
              />
            </div> : null
          }
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="updata_img_m">
            <h5>images</h5>
            <label htmlFor="file-input" className="dottedborderbox">
              <img
                src={submitupload}
                alt="submitupload"
                className="submitupload"
              />
              <input
                type="file"
                id="file-input"
                accept="image/*, video/*"
                onChange={onImageChange}
              />
              <p>
                drag {"&"} drop <br /> your image <br /> size 20 mb max
              </p>
            </label>
            {
              companyImg ?
                <img
                  src={companyImg}
                  className="uploadedPath"
                /> : null
            }
          </div>
        </div>
        <div className="row restrictions_text">
          <h4>RESTRICTIONS</h4>
          {
            arrData && arrData?.map((value, index) => (
              <div className="col-md-6" key={index}>
                <div className="my-3 updateDataDiv">
                  <div className="checkBoxWithText">
                    <h6 id="updatedata">{value.data} </h6>
                    <label className="container">
                      <input
                        type="checkbox"
                        name="check"
                        checked={value.check}
                        onChange={(e) => handleCheckBox(e, value)}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <p><span>INFO: </span>{value.info}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default UpdateData
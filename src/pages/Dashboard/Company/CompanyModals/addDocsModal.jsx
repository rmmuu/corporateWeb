import React, { useState } from "react";
import { Box, TextField } from '@mui/material';
import Switch from "react-switch";
import { Modal } from "react-bootstrap";
import cancel from '../../../../assets/images/ic-cancel.svg'
import cloud from '../../../../assets/images/cloud.svg'
import { createEmployeeDocuments, createExternalDocuments } from "../../../../Apis/documents";
import { toast } from "react-toastify";
import { uploadImg } from "../../../../Apis/imageController";
import { useDispatch } from "react-redux";
import { createVehicles, getCompanyVehicles } from "../../../../reduxToolkit/CompanyDocuments/VehicleDocumentsApi";

const AddDocsModal = (props) => {
  const dispatch = useDispatch();
  const userdata = JSON.parse(sessionStorage.getItem("userdata"));
  const companyId = "a6bd2887-0f4a-4e5f-b0b5-000d9817ab23";

  const [checked, setChecked] = useState(false);
  const [documentName, setDocumentName] = useState();
  const [uploadFile, setUploadFile] = useState();
  const [loading, setLoading] = useState(false);


  const onFileChange = (e) => {
    setUploadFile(e.target.files[0])
  };

  const handleSwitch = (checked) => {
    setChecked(checked)
  }

  const handleUploadFile = () => {
    const body = {
      "document": documentName,
    }

    if (props.relation === "user") {
      if (checked === true) {
        setLoading(true);
        createExternalDocuments(body).then(({ data: { data } }) => {
          // console.log(data)
          if (data?.id) {
            let formData = new FormData();
            formData.append('id', data?.id);
            formData.append('option', "company_document_external");
            formData.append('file', uploadFile);

            uploadImg(formData).then(({ data: { data } }) => {
              toast.success("file uploaded successfully!");
              props.onHide();
              setLoading(false);
              // console.log(data)
            }).catch(error => {
              toast.error("something went wrong.");
              setLoading(false);
            })
          }

        }).catch(error => {
          toast.error("something went wrong.")
        })

      } else if (checked === false) {
        setLoading(true);
        createEmployeeDocuments(body).then(({ data: { data } }) => {
          // console.log(data);
          if (data?.id) {
            let formData = new FormData();
            formData.append('id', data?.id);
            formData.append('option', "company_document_employee");
            formData.append('file', uploadFile);

            uploadImg(formData).then(({ data: { data } }) => {
              toast.success("file uploaded successfully!");
              props.onHide();
              setLoading(false);
              console.log(data)
            }).catch(error => {
              toast.error("something went wrong.");
              setLoading(false);
            })
          }
        }).catch(error => {
          console.log(error)
          toast.error("something went wrong.")
        })

      }
    }
    if (props.modalrelation === "vehicle") {

      dispatch(createVehicles(body)).then(({ payload: { data: { data } } }) => {
        if (data?.id) {
          let formData = new FormData();
          formData.append('id', data?.id);
          formData.append('option', "company_document_external_vehicle");
          formData.append('file', uploadFile);

          uploadImg(formData).then(({ data: { data: { data } } }) => {
            toast.success("file uploaded successfully!");
            setDocumentName("")
            props.onHide();
            dispatch(getCompanyVehicles());
            setLoading(false);
          }).catch(error => {
            toast.error("something went wrong.");
            setLoading(false);
          })
        }

      })
    }
  }

  return (
    <Modal
      className="documents-panel-modal"
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          ADD DOCUMENT
        </Modal.Title>
        <img onClick={() => props.onHide()} className="modalClose" src={cancel} alt="" />
      </Modal.Header>
      <Modal.Body className="docsModalBody">
        {
          props.modalrelation === "user" ?
            <>
              <p>Type</p>
              <div className="d-flex align-items-center">
                <span
                  style={{
                    fontSize: "14px",
                    color: checked ? "#707070" : "#65ABA0",
                    textDecoration: checked ? "none" : "underline",
                    marginRight: "10px"
                  }}
                >EMPLOYEE</span>
                <Switch
                  checked={checked}
                  onChange={handleSwitch}
                  onColor="#65ABA0"
                  onHandleColor="#178A7B"
                  handleDiameter={14}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 2px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 2px rgba(0, 0, 0, 0.2)"
                  height={11}
                  width={26}
                  className="react-switch"
                  id="material-switch"
                />
                <span
                  style={{
                    fontSize: "14px",
                    color: checked ? "#65ABA0" : "#707070",
                    textDecoration: checked ? "underline" : "none",
                    marginLeft: "10px"
                  }}
                >EXTERNAL</span>
              </div>
            </> : null
        }
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
            label="DOCUMENT NAME"
            name="documentName"
            id="outlined-size-normal"
            defaultValue=""
            value={documentName}
            onChange={(e) => setDocumentName(e.target.value)}
          />
        </Box>
        <label htmlFor="file-input" className="dottedborderbox">
          <img
            src={cloud}
            alt="submitupload"
            className="submitupload"
          />
          <input
            type="file"
            id="file-input"
            accept="image/*, video/*, .pdf"
            onChange={onFileChange}
          />
          <div className="dragAndDrop">
            <p>DRAG & DROP YOUR IMAGE</p>
            <span>file size 20MB</span>
          </div>
        </label>
        {/* <label htmlFor="file-input" className="uploadImg">
          <img
            className="cloud"
            src={cloud} alt="cloud"
            accept="image/*, video/*"
            onChange={onFileChange}
          />
          <div className="dragAndDrop">
            <h2>DRAG & DROP YOUR IMAGE</h2>
            <p>file size 20MB</p>
          </div>
        </label> */}
        <div className="buttonArea">
          <button className="btns btn btn-light" onClick={() => props.onHide()}>Cancel</button>
          <button className="btn btn-success" onClick={handleUploadFile}>
            {
              loading ? "uploading...!" : "upload"
            }
          </button>
        </div>
      </Modal.Body>

    </Modal>
  );
};

export default AddDocsModal;
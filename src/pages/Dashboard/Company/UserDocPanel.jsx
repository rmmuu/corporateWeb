import React, { useEffect, useState } from 'react'
import pdfImg from '../../../assets/images/pdf.svg'
import ic_delete_red from '../../../assets/images/ic-delete-red.svg'
import download_Img from '../../../assets/images/ic-download-file.svg'
import { Link } from 'react-router-dom'
import { getAllEmployeesDocuments, getAllExternalDocuments } from '../../../Apis/documents';
import { toast } from 'react-toastify'
import { deleteImg, downloadImg } from '../../../Apis/imageController';
import { override } from "../../../Helpers/spinnercss";
import { HashLoader } from 'react-spinners'
import AddDocsModal from './CompanyModals/addDocsModal'



const UserDocPanel = () => {
  const userdata = JSON.parse(sessionStorage.getItem("userdata"));
  const companyId = "bc9789f1-3f16-4759-851d-5501cc37ec97";

  const [show, setShow] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  const [allEmployeesDocs, setAllEmployeesDocs] = useState();
  const [allExternalDocs, setAllExternalDocs] = useState();
  const [status, setStatus] = useState();

  const toggleTab = (index) => {
    setToggleState(index);
  }



  useEffect(() => {
    const body = {
      companyId: companyId,
      userId: userdata?.data.id,
      email: userdata?.data.email,
      userTypes: userdata?.data?.userType.name
    }

    getAllEmployeesDocuments(body).then(({ data: { data } }) => {
      setAllEmployeesDocs(data);
      console.log(data)
    }).catch(error => {
      toast.error("something went wrong.")
    })

    getAllExternalDocuments(body).then(({ data: { data } }) => {
      setAllExternalDocs(data);
      // console.log(data)
    }).catch(error => {
      toast.error("something went wrong.")
    })
  }, [status,show])

  const handleDeleteDoc = (selectedId) => {
    const body = {
      companyId: companyId,
      userId: userdata?.data.id,
      email: userdata?.data.email,
      userTypes: userdata?.data?.userType.name,
      id: selectedId,
      option: toggleState === 1 ? "company_document_employee" : "company_document_external"
    }

    deleteImg(body).then(({ data: { data } }) => {
      setStatus(data);
      toast.error("Deleted successfully!")
      console.log(data)
    }).catch(error => {
      toast.error("something went wrong.")
    })
  }

  const handleDownloadDoc = (selectedId) => {

    const bearerToken = sessionStorage.getItem("bearerToken");
    fetch(`http://182.176.161.38:8080/corporate-user-pre-prod-v1/image-service/download-by-id/${selectedId}/option/company_document_external`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/png',
        "Authorization": "Bearer " + bearerToken,
      }
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(
          new Blob([blob]),
        );
        console.log(url)
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
          'download',
          `FileName.png`,
        );

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });
  }

  return (
    <>
      <div className="userPanel">
        <div className='head'>
          <div className='headLeft'>
            <Link to="/dashboard/company">
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </Link>
            <h2>User Docments panel</h2>
          </div>
          <button
            onClick={() => setShow(true)}
          >
            ADD Document
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
          <AddDocsModal
            show={show}
            onHide={() => setShow(false)}
          />
        </div>

        {/* portfolio-grid */}
        <div className="row steps-row justify-content-between mt-5 mb-3" id="pills-tab" role="tablist">
          <div className="col-6 text-center" role="presentation">
            <a
              className={`steps btn ${toggleState === 1 ? 'btn-bordered' : ''}`}
              onClick={() => toggleTab(1)}
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <span>Employees</span>
            </a>
          </div>
          <div className="col-6 text-center" role="presentation">
            <a
              className={`steps btn ${toggleState === 2 ? 'btn-bordered' : ''}`}
              onClick={() => toggleTab(2)}
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <span>Contractor/Provider</span>
            </a>
          </div>
        </div>

        <div className="tab-content" id="pills-tabContent">
          <div
            className={`${toggleState === 1 ? 'tab-pane fade show active ' : 'tab-pane fade'}`}
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="col-6 mx-auto notifications">
              <div className='documents-detail-sec'>

                <div className="table-header">
                  <div>DOCUMENT NAME</div>
                  <div className='text-center'>ForM</div>
                  <div className='text-center'>DOWNLOAD</div>
                  <div className='text-end'>REMOVE</div>
                </div>
                {
                  allEmployeesDocs ?
                    allEmployeesDocs?.length === 0 ?
                      <div className='no-data'>No Documents in Employees Section!</div> :
                      allEmployeesDocs?.map(item => (
                        <div className='data-row first-row' key={item?.id}>
                          <div>{item?.document}</div>
                          <div className='text-center'>{item?.path}</div>
                          <div className='text-center'>
                            <img
                              className='cancel'
                              onClick={() => handleDownloadDoc(item?.id)}
                              src={download_Img}
                              alt="ic_delete_red"
                            />
                          </div>
                          <div className='text-end'>
                            <img
                              className='cancel'
                              onClick={() => handleDeleteDoc(item?.id)}
                              src={ic_delete_red}
                              alt="ic_delete_red"
                            />
                          </div>
                        </div>
                      )) :
                    <div className="overlay">
                      <HashLoader loading="true" css={override} size={50} color="#fff" />
                    </div>
                }
              </div>
            </div>
          </div>
          <div
            className={`${toggleState === 2 ? 'tab-pane fade show active ' : 'tab-pane fade'}`}
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="col-6 mx-auto notifications">
              <div className='documents-detail-sec'>

                <div className="table-header">
                  <div>DOCUMENT NAME</div>
                  <div className='text-center'>ForM</div>
                  <div className='text-center'>DOWNLOAD</div>
                  <div className='text-end'>REMOVE</div>
                </div>
                {
                  allExternalDocs ?
                    allExternalDocs?.length === 0 ?
                      <div className='no-data'>No Documents in External Section!</div> :
                      allExternalDocs?.map(item => (
                        <div className='data-row first-row' key={item?.id}>
                          <div>{item?.document}</div>
                          <div className='text-center'>{item?.path}</div>
                          <div className='text-center'>
                            <img
                              className='cancel'
                              onClick={() => handleDownloadDoc(item?.id)}
                              src={download_Img}
                              alt="ic_delete_red"
                            />
                          </div>
                          <div className='text-end'>
                            <img
                              className='cancel'
                              onClick={() => handleDeleteDoc(item?.id)}
                              src={ic_delete_red}
                              alt="ic_delete_red"
                            />
                          </div>
                        </div>
                      )) :
                    <div className="overlay">
                      <HashLoader loading="true" css={override} size={50} color="#fff" />
                    </div>
                }
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* contact-form */}

    </>
  )
}

export default UserDocPanel
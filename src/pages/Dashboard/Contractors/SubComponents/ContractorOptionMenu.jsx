import React from "react";
import threedotsicon from "../../../../assets/images/elipse.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import pencil from "../../../../assets/images/ic-pencil.png";
import del from "../../../../assets/images/ic-delete.png";
import listIcon from "../../../../assets/images/viewDetails.png"
import fileIcon from "../../../../assets/images/saveFile.png"
import viewDetail from "../../../../assets/images/viewDetails.png"

import { useNavigate } from 'react-router-dom';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => {

  return (
    <div
      className="text-center"
      ref={ref}
      onClick={(e) => {
        // e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <img
        src={threedotsicon}
        className="img-fluid providerThreeDots"
        alt="threedotsicon"
      />
    </div>
  );
});

const ContractorOptionMenu = ({ dropDownProps,data }) => {
  const navigate = useNavigate();
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} />
        <Dropdown.Menu size="sm" title="go to details" style={{width:"250px",padding:"10px",borderRadius:"20px"}}>
        {/* /dashboard/contractors-outlet/contractor-approve-document */}
        {data?.user?.status?.id == 3 ? 
          <Link to={'/dashboard/contractors-outlet/contractor-detail' } state={{state: data, approveDoc: "true" }}>
            <div className="dropdownDiv d-flex justify-content-between pt-2">
              <img src={fileIcon} alt="pencil" />
              APPROVE DOCUMENTS
            </div>
          </Link> : null }
         <Link to={'/dashboard/contractors-outlet/update-contractor'} state={{state: data}}>
            <div className="dropdownDiv d-flex justify-content-between pt-2">
              <img src={pencil} alt="pencil" />
              <span>UPDATE DATA</span>
            </div>
          </Link> 
          {/* <Link to="/dashboard/document-panel">
            <div className="dropdownDiv d-flex justify-content-between pt-2">
              <img src={del} alt="delete" />
              <span>DELETE CONTRACTOR</span>
            </div>
          </Link> */}
          <Link to={'/dashboard/contractors-outlet/contractor-detail'} state={{state: data}}>
            <div className="dropdownDiv d-flex justify-content-between pt-2">
              <img src={viewDetail} alt="delete" />
              <span>SHOW DETAIL</span>
            </div>
          </Link>
        </Dropdown.Menu>
    </Dropdown>
  );
};

export default ContractorOptionMenu;

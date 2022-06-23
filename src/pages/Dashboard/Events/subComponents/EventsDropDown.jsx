import React, { useState } from "react";
import threedotsicon from "../../../../assets/images/elipse.png";
import Dropdown from "react-bootstrap/Dropdown";
import listIcon from "../../../../assets/images/viewDetails.png"
import fileIcon from "../../../../assets/images/saveFile.png"
import { useNavigate } from 'react-router-dom';
import AllowDenyModal from "./AllowDenyModal";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => {

    return (
        <div
            ref={ref}
            onClick={(e) => {
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

const EventDropDown = ({ dropDownProps, eventid }) => {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleOptions = () => {
        if (dropDownProps.firstItem === "DOWNLOAD FILE") {
            fetch(`${URL}file-service/download-report-onu/${eventid}`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/form-data',
                    "Authorization": `Bearer ${sessionStorage.getItem("bearerToken")}`,
                    "responseType": "blob",
                },
            })
                .then((response) => response.blob())
                .then((blob) => {
                    // Create blob link to download
                    const url = window.URL.createObjectURL(
                        new Blob([blob]),
                    );
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute(
                        'download',
                        `FileName.pdf`,
                    );

                    // Append to html link element page
                    document.body.appendChild(link);

                    // Start download
                    link.click();

                    // Clean up and remove the link
                    link.parentNode.removeChild(link);
                });
        }
        if (dropDownProps.firstItem === "ALLOW EVENT") {
            setShow(true);
        }
    }

    return (
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle} >
                <Dropdown.Menu size="sm" title="go to details">
                    <div className="dropdownDiv" style={{ cursor: 'pointer' }}>
                        <img src={fileIcon} alt="fileIcon" />
                        <span onClick={handleOptions}>
                            {dropDownProps.firstItem}
                        </span>
                    </div>
                    <div className="dropdownDiv" style={{ cursor: 'pointer' }}>
                        <img src={listIcon} alt="viewDetails" />
                        <span
                            onClick={() => navigate(dropDownProps.panel === 'incoming' ? `/dashboard/events-panel/incomming-envent-detail/${eventid}` : `/dashboard/events-panel/validation-envent-detail/${eventid}`)}
                        >
                            {dropDownProps.secondItem}
                        </span>
                    </div>
                    <AllowDenyModal
                        eventid={eventid}
                        show={show}
                        onHide={() => setShow(false)}
                    />
                </Dropdown.Menu>
            </Dropdown.Toggle>
        </Dropdown>
    );
};

export default EventDropDown;

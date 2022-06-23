import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import photo from "../../.././assets/images/as.jpg"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const EmployeCard = () => {
  const navigate = useNavigate()
  return (
    <div className="viewcard-container">
      <span className="viewcard-container__status">Active <FiberManualRecordIcon/></span>
      {/* <span className="viewcard-container__status employe-status-documents">VALIDATING DOCUMENTS <FiberManualRecordIcon/></span>
      <span className="viewcard-container__status employe-status-Vacation">VACATIONS <FiberManualRecordIcon/></span> */}
      <img src={photo} className="viewcard-container__img" alt="hero image" />
      <Grid container>
        <Grid item xs={5}>
          <span className="viewcard-container__title">Name</span>
        </Grid>
        <Grid item xs={7}>
          <span className="viewcard-container__desc">Andrea Itzel González</span>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5}>
          <span className="viewcard-container__title">Job Title</span>
        </Grid>
        <Grid item xs={7}>
          <span className="viewcard-container__desc">Contador</span>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5}>
          <span className="viewcard-container__title">Gender</span>
        </Grid>
        <Grid item xs={7}>
          <span className="viewcard-container__desc">Female</span>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5}>
          <span className="viewcard-container__title">Email</span>
        </Grid>
        <Grid item xs={7}>
          <span className="viewcard-container__desc">aitzel.2125@gmail.com</span>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5}>
          <span className="viewcard-container__title">Number</span>
        </Grid>
        <Grid item xs={7}>
          <span className="viewcard-container__desc">442-568-89-41</span>
        </Grid>
      </Grid>
      <span className="viewcard-container__link mt-2" onClick={() => navigate('/dashboard/employee-contract-detail')}>EMPLOYEE DETAIL <KeyboardArrowRightIcon/></span>
    </div>
  );
};

export default EmployeCard;

import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import photo from "../../.././assets/images/as.jpg"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ViewCard = () => {
  const navigate = useNavigate()

  return (
    <div className="viewcard-container">
      <span className="viewcard-container__status">Active <FiberManualRecordIcon/></span>
      <img src={photo} className="viewcard-container__img" alt="hero image" />
      <Grid container>
        <Grid item xs={5}>
          <span className="viewcard-container__title">Brand</span>
        </Grid>
        <Grid item xs={7}>
          <span className="viewcard-container__desc">KIA</span>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5}>
          <span className="viewcard-container__title">Sub-Brand</span>
        </Grid>
        <Grid item xs={7}>
          <span className="viewcard-container__desc">RAM 5000</span>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5}>
          <span className="viewcard-container__title">MOdel</span>
        </Grid>
        <Grid item xs={7}>
          <span className="viewcard-container__desc">2021</span>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5}>
          <span className="viewcard-container__title">Color</span>
        </Grid>
        <Grid item xs={7}>
          <span className="viewcard-container__desc">White</span>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5}>
          <span className="viewcard-container__title">Plates</span>
        </Grid>
        <Grid item xs={7}>
          <span className="viewcard-container__desc">S9-SLA-65</span>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5}>
          <span className="viewcard-container__title">Type</span>
        </Grid>
        <Grid item xs={7}>
          <span className="viewcard-container__desc">Double Tratin</span>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5}>
          <span className="viewcard-container__title">Corperates</span>
        </Grid>
        <Grid item xs={7}>
          <span className="viewcard-container__desc">Grupo Tepeyao</span>
        </Grid>
      </Grid>
      <span className="viewcard-container__link" onClick={() => navigate('/dashboard/vehicle-contract-detail')}>VEHICLE DETAILS <KeyboardArrowRightIcon/></span>
    </div>
  );
};

export default ViewCard;

import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ContractCard = () => {
  const navigate = useNavigate()
  return (
    <div className="contract-card">
      <Grid container>
        <Grid item xs={5}>
          <spna className="contract-card__heading">Contracts</spna>
          <spna className="contract-card__no"> #102</spna>
        </Grid>
        <Grid item xs={7}>
          <span className="viewcard-container__status">
            Active <FiberManualRecordIcon />
          </span>
          {/* <span className="viewcard-container__status employe-status-documents">VALIDATING DOCUMENTS <FiberManualRecordIcon/></span>
            <span className="viewcard-container__status employe-status-Vacation">VACATIONS <FiberManualRecordIcon/></span> */}
        </Grid>
        <span className="contract-card__name">
          Luis Enrique Cornejo Arreola
        </span>
        <span className="contract-card__contractor">Contractor</span>
        <div className="contract-card__detail">
          <Grid container>
            <Grid item xs={6}>
              <span className="contract-card__title">Start contract</span>
            </Grid>
            <Grid item xs={6}>
              <span className="contract-card__desc">25/05/2021</span>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <span className="contract-card__title">End contract</span>
            </Grid>
            <Grid item xs={6}>
              <span className="contract-card__desc">25/05/2021</span>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <span className="contract-card__title">Corporate</span>
            </Grid>
            <Grid item xs={6}>
              <span className="contract-card__desc">IBL Corporate</span>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <span className="contract-card__title">No employees</span>
            </Grid>
            <Grid item xs={6}>
              <span className="contract-card__desc">12 / 43</span>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <span className="contract-card__title">Vehicles</span>
            </Grid>
            <Grid item xs={6}>
              <span className="contract-card__desc">4</span>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <span className="viewcard-container__link mt-2 d-flex" onClick={() => navigate('/dashboard/user-contract-detail')}>VIEW DETAILS <KeyboardArrowRightIcon/></span>

    </div>
  );
};

export default ContractCard;

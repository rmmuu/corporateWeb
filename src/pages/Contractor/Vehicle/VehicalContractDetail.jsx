import { Grid } from '@mui/material'
import React from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SaveIcon from "@mui/icons-material/Save";
import { useNavigate } from 'react-router-dom';


const VehicalContractDetail=()=>{
  let navigate=useNavigate();
  return (
      <>
       <Grid container sx={{ my: "30px" }}>
        <Grid item xs={12}>
          <span className="add-new-employe__heading"><ArrowBackIcon />VEHICLE CONTRACT DETAIL</span>
        </Grid>
      </Grid>
      
    <div className='vehicle-contract-detail'>
      <span className="viewcard-container__status">Active <FiberManualRecordIcon/></span>
        <img src="" alt="Vehicle Image" className='vehicle-contract-detail__img'/>
        <Grid container sx={{ mt: "70px" }}>
        <Grid item xs={6} sx={{mt:"20px"}}>
          <span className='vehicle-contract-detail__title'>BRAND</span>
          <span className='vehicle-contract-detail__desc'>KIA</span>
        </Grid>
        <Grid item xs={6} sx={{mt:"20px"}}>
          <span className='vehicle-contract-detail__title'>SUB-BRAND</span>
          <span className='vehicle-contract-detail__desc'>RIO</span>
        </Grid> <Grid item xs={6} sx={{mt:"20px"}}>
          <span className='vehicle-contract-detail__title'>COLOR</span>
          <span className='vehicle-contract-detail__desc'>RED</span>
        </Grid> <Grid item xs={6} sx={{mt:"20PX"}}>
          <span className='vehicle-contract-detail__title'>MODAL</span>
          <span className='vehicle-contract-detail__desc'>2018</span>
        </Grid> <Grid item xs={6} sx={{mt:"20px"}}>
          <span className='vehicle-contract-detail__title'>PLATES</span>
          <span className='vehicle-contract-detail__desc'>SS-568-45D</span>
        </Grid> <Grid item xs={6} sx={{mt:"20px"}}>
          <span className='vehicle-contract-detail__title'>VEHICLE TYPE</span>
          <span className='vehicle-contract-detail__desc'>SEDAN</span>
        </Grid> <Grid item xs={6} sx={{mt:"20px"}}>
          <span className='vehicle-contract-detail__title'>DRIVER</span>
          <span className='vehicle-contract-detail__desc'>Luis Enrique Cornejo Arreola</span>
        </Grid> <Grid item xs={6} sx={{mt:"20px"}}>
          <span className='vehicle-contract-detail__title'>STATUS</span>
          <span className='vehicle-contract-detail__desc'>ACTIVE</span>
        </Grid>
       
      </Grid>
        <button className="veh-update-btn" onClick={()=> navigate('/dashboard/addvehical')}>UPDATE INFORMATION <span>
            <SaveIcon  style={{marginLeft:"20px",fontSize:"20px"}}/>
          </span></button>
    </div>
    </>
  )
}

export default VehicalContractDetail
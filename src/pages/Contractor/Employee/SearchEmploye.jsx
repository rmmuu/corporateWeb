import {Box, FormControl, Grid, InputLabel, MenuItem, Select  } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SaveIcon from "@mui/icons-material/Save";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Popover from "@mui/material/Popover";

import EmployeCard from "./EmployeCard";


const SearchEmploye = () => {
  let navigate = useNavigate();

  const [employee, setEmployee] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="search-container">
      <Grid container sx={{ my: "30px" }}>
        <Grid item xs={5}>
          <span className="search-container__heading">EMPLOYEES</span>
        </Grid>
        <Grid item xs={7}>
          <div className="head">
            <div style={{ marginLeft: "auto", display: "flex" }}>
              <div className="ml-2" onClick={()=>( navigate(`/dashboard/add-new-employe`))}>
                <button className="btn btn-lg">
                  ADD EMPLOYEE
                  <SaveIcon />
                </button>
              </div>
              <button
                className="p-2    ms-2 "
                style={{ width: "100%", height: "100%" }}
              >
                <i class="fa fa-filter" aria-hidden="true"  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick} style={{fontSize:"30px"}}></i>
              </button>
            </div>
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}


            sx={{ zIndex: 9999 }}
          >
            <div className="user-dropdown" style={{width:"222px"}}>
              
                <div className="user-dropdown__name d-flex flex-column border-0">
                  <h3 style={{ borderBottom: "2px solid green" }}>FILTER</h3>
                  <h4 className="mt-3">ATTRIBUTES</h4>
                  <Grid container>
                    <Grid item xs={12}>
                      <Box sx={{ mt: "20px" }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            STATUS
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue="employe"
                            value={employee}
                            label="EMPLOYEE"
                            onChange={(e) => setEmployee(e.target.value)}
                            sx={{
                              fontSize: "16px",
                              padding: "3px 3px 3px 10px",
                            }}
                          >
                            <MenuItem
                              value={10}
                              sx={{
                                fontSize: "16px",
                              }}
                            >
                              Active
                            </MenuItem>
                            <MenuItem
                              value={20}
                              sx={{
                                fontSize: "16px",
                              }}
                            >
                              In-active
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ mt: "30px" }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            ORDER BY
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue="employe"
                            value={employee}
                            label="EMPLOYEE"
                            onChange={(e) => setEmployee(e.target.value)}
                            sx={{
                              fontSize: "16px",
                              padding: "3px 3px 3px 10px",
                            }}
                          >
                            <MenuItem
                              value={10}
                              sx={{
                                fontSize: "16px",
                              }}
                            >
                              xyz
                            </MenuItem>
                            <MenuItem
                              value={20}
                              sx={{
                                fontSize: "16px",
                              }}
                            >
                              abc
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>
                  </Grid>
                </div>
             
            </div>
          </Popover>
        </Grid>
      </Grid>
      <Grid container sx={{ my: "30px", position: "relative" }}>
        <Grid item xs={12}>
          <input
            placeholder="Type a name to filter"
            className="search-container__input"
          ></input>
          <span className="search-container__icon">
            <SearchIcon />
          </span>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ overFlow: "hidden" }}>
        <Grid item xs={3}>
          <EmployeCard />
        </Grid>
        <Grid item xs={3}>
          <EmployeCard />
        </Grid>
        <Grid item xs={3}>
          <EmployeCard />
        </Grid>
        <Grid item xs={3}>
          <EmployeCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchEmploye;

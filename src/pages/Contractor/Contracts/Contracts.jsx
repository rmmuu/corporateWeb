import React, { useState } from "react";
import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import Popover from "@mui/material/Popover";

import ContractCard from "./ContractCard";
const Contracts = () => {
  const [modalShow, setModalShow] = useState(false);
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
    <div className="contracts-main-container">
      <Grid container sx={{ my: "30px" }}>
        <Grid item xs={6} >
          <span className="add-new-employe__heading">Contracts</span>
        </Grid>
        <Grid item xs={6}>
          <div className="head m-0">
            <div style={{ marginLeft: "auto", display: "flex" }}>
              <button
                className="p-2"
                style={{ width: "100%", height: "100%" }}
              >
                <i
                  class="fa fa-filter"
                  aria-hidden="true"
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                  style={{ fontSize: "30px" }}
                ></i>
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
      <div className="contracts-container">
        <Grid container sx={{ my: "30px" }} spacing={3}>
          <Grid item xs={3}>
            <ContractCard />
          </Grid>
          <Grid item xs={3}>
            <ContractCard />
          </Grid>
          <Grid item xs={3}>
            <ContractCard />
          </Grid>
          <Grid item xs={3}>
            <ContractCard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Contracts;

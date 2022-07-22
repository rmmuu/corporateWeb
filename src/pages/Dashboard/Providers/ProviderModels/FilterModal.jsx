import { Box, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { FormControl } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { GetEmployeeProviderOrdersSortList } from "../../../../reduxToolkit/EmployeeProviders/EmployeeProvidersApi";
;


const FilterModal = ({ setShowFilter, handlFilters }) => {
    const dispatch = useDispatch();
    const { getEmployeeProviderOrdersSortList } = useSelector(state => state?.EmployeeProviderSlice);
    console.log(getEmployeeProviderOrdersSortList)


    const [orderby, setOrderby] = useState();
    const [sort, setSort] = useState();

    useEffect(() => {
        handlFilters(orderby, sort);
        // orderByApi();
        dispatch(GetEmployeeProviderOrdersSortList())
    }, [orderby, sort])

    return (
        <div
            className="col-md-3 filter_parent_provider">
            <p className="filter_header">
                FILTERS
                <CloseIcon
                    style={{ marginTop: "10px", color: "red", cursor: "pointer" }}
                    onClick={() => setShowFilter(false)}
                />
            </p>
            <div className="filter_body d-flex justify-content-between py-3">
                {/* <div className="col-md-6 dates_week_part">
                    <p>Dates</p>
                    <ButtonGroup
                        className="filter_btn_group"
                        style={{ width: "100%", margin: "20px", padding: "0px 40px" }}
                        variant="outlined"
                        aria-label="outlined button group"
                    >
                        <Button>Day</Button>
                        <Button>Month</Button>
                        <Button>Week</Button>
                        <Button>Year</Button>
                    </ButtonGroup>

                    <div
                        className="week_year_inputfield"
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "20px",
                            marginLeft: "30px",
                        }}
                    >
                        <Box
                            className="mt-2"
                            style={{ marginRight: "10px" }}
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                fontSize: "20px",
                                height: "40px",
                            }}
                        >
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">WEEK</InputLabel>
                                <Select
                                    value={week}
                                    label="WEEK"
                                    onChange={(e) => setWeek(e.target.value)}
                                >
                                    <MenuItem value={10}>WEEK 1</MenuItem>
                                    <MenuItem value={20}>WEEK 2</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box
                            className="mt-2"
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                fontSize: "20px",
                                height: "40px",
                            }}
                        >
                            <FormControl fullWidth>
                                <InputLabel>YEAR</InputLabel>
                                <Select
                                    value={year}
                                    label="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                >
                                    <MenuItem value={10}>2021</MenuItem>
                                    <MenuItem value={20}>2022</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div> */}
                <div className="col-md-12">
                    <p>Attributes</p>
                    <Box
                        style={{ marginTop: "20px !important" }}
                        className="mt-2"
                        sx={{
                            width: "100%",
                            maxWidth: "100%",
                            fontSize: "20px",
                            height: "40px",
                        }}
                    >
                        <FormControl fullWidth>
                            <InputLabel>ORDER BY</InputLabel>
                            <Select
                                value={orderby}
                                label="ORDER BY"
                                onChange={(e) => setOrderby(e.target.value)}
                            >
                                {
                                    getEmployeeProviderOrdersSortList?.map(value => (
                                        <MenuItem value={value}>{value}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Box>
                    <Box
                        className="mt-2"
                        sx={{
                            width: "100%",
                            maxWidth: "100%",
                            fontSize: "20px",
                            height: "40px",
                        }}
                    >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">sort</InputLabel>
                            <Select
                                value={sort}
                                label="SORT"
                                onChange={(e) => setSort(e.target.value)}
                            >
                                <MenuItem value={10}>ASC</MenuItem>
                                <MenuItem value={20}>DES</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
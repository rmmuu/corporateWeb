import { Box, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { FormControl } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { GetEventFilters, GetIncomingEventsPageable } from "../../../reduxToolkit/EmployeeEvents/EmployeeEventsApi";
import { handlePagination } from "../../../reduxToolkit/EmployeeEvents/EmployeeEventsSlice";


const IncomingModel = ({ setShowIncome }) => {
    const dispatch = useDispatch();
    const eventFilterData = useSelector(state => state?.EmployeeEventsSlice?.eventFilters);
    const pageableObj = useSelector(state => state?.EmployeeEventsSlice?.pageableObj);
    console.log(eventFilterData)
    console.log(pageableObj)
    let body;
    const d = new Date();
    let time_in_miliseconds = Math.round(d.getTime());


    // const [week, setWeek] = useState();
    // const [year, setYear] = useState();
    const [orderby, setOrderby] = useState();
    const [sort, setSort] = useState();

    useEffect(() => {
        dispatch(GetEventFilters());
    }, [])

    const handleSortBy = (e) => {
        setOrderby(e.target.value);
        dispatch(handlePagination({
            name: "sortBy",
            value: e.target.value
        }));
        body = {
            date: time_in_miliseconds,
            pagination: pageableObj
        }
        dispatch(GetIncomingEventsPageable(body));
    }

    const handleOrderBy = (e) => {
        setSort(e.target.value);
        dispatch(handlePagination({
            name: "order",
            value: e.target.value
        }));
        body = {
            date: time_in_miliseconds,
            pagination: pageableObj
        }
        dispatch(GetIncomingEventsPageable(body));
    }


    return (
        <div
            className="col-md-3 filter_parent"
            style={{
                right: "20.8%",
                zIndex: "101",
            }}>
            <p className="filter_header">
                FILTERS
                <CloseIcon
                    style={{ marginTop: "10px", color: "red", cursor: "pointer" }}
                    onClick={() => setShowIncome(false)}
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
                                onChange={handleSortBy}
                            >
                                {
                                    eventFilterData?.map((item, index) => (
                                        <MenuItem key={index} value={item}>{item}</MenuItem>
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
                                onChange={handleOrderBy}
                            >
                                <MenuItem value="ASC">ASC</MenuItem>
                                <MenuItem value="DES">DES</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default IncomingModel;
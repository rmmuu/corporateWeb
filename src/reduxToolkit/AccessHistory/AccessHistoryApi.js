import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from '../../Apis/Axios';


export const GetUserAccessList = createAsyncThunk("accessHistory/getUserAccessList", async (body, { dispatch, getState }) => {

    let result = await apiInstance.post(`user-access/get-all-pageable`, body).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result

    return { data, status }
});


export const GetVehicleAccessList = createAsyncThunk("accessHistory/getVehicleAccessList", async (body, { dispatch, getState }) => {

    let result = await apiInstance.post(`vehicle-access/get-all-pageable`, body).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result

    return { data, status }
});

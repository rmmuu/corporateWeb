import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiInstance } from '../../Config/AxiosInstances';

export const GetLocations = createAsyncThunk("employeeContractor/getEmployeeContractor", async (params, { dispatch, getState }) => {

    const { user } = params || {};
    letresult = await apiInstance.post('/api/admin/user/locations/get',

        {
            user,
            // default:defaults
        }).then(function (response) {
            returnresponse
        }).catch(function (error) {
            returnerror.response
        })
    const { data, status } = result

    return { data, status }
});
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../Apis/Axios";
import { endpoints } from "../../Apis/Constants";


export const loginMiddleware = createAsyncThunk('users/loginMiddleware', async (authValues, thunkAPI) => {
    try {
        let response = await apiInstance.post(endpoints.LOGIN, authValues.values);
        if (response.status === 200) {
            sessionStorage.setItem("userdata", JSON.stringify(response))
            authValues.navigate('/login-option');
            return { ...response.data };
        } else {
            return thunkAPI.rejectWithValue(response.data);
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response);
    }
});

export const authenticationSlice = createSlice({
    name: "authenticationSlice",
    initialState: {
        user: {},
    },
    extraReducers: {
        [loginMiddleware.fulfilled]: (state, { payload }) => {
            state.user = payload;
        },

        [loginMiddleware.pending]: (state) => {
            // console.log(state)
        },

        [loginMiddleware.rejected]: (state, { payload }) => {
            // console.log(payload)
        }
    },

})

export default authenticationSlice.reducer;
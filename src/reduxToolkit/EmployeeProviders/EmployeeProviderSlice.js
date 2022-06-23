import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const employeeProviderSlice = createSlice({
    name: "employeeProvider",
    initialState: {
        projects: [],

    },
    reducers: {
        // setProjects: (state, action) => {
        //     state.projects = action.payload
        // }

    },
    extraReducer: {
        ['employeeProvider/getEmployeeProvider/fulfilled']: (state, action) => {
            const { data } = action.payload
            state.projects.push(data)
        }
    }
})

export const { } = employeeProviderSlice.actions;

export default employeeProviderSlice.reducer;
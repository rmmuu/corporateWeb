import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const employeeContractorSlice = createSlice({
    name: "employeeContractor",
    initialState: {
        projects: [],

    },
    reducers: {
        // setProjects: (state, action) => {
        //     state.projects = action.payload
        // }

    },
    extraReducer: {
        ['employeeContractor/getEmployeeContractor/fulfilled']: (state, action) => {
            const { data } = action.payload
            state.projects.push(data)
        }
    }
})

export const { } = employeeContractorSlice.actions;

export default employeeContractorSlice.reducer;
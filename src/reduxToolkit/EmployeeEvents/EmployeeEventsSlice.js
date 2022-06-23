import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const employeeEventsSlice = createSlice({
    name: "employeeEvents",
    initialState: {
        eventFilters: [],
        incomingEvents: [],
        validationEvents: [],
        recordsEvents: [],
        zonesList: [],
        allEmployees: [],
        selectedEmployees: [],
        emailPhoneSearchData: [],
        emailPhoneSearchList: [],
        normalEventDetails: {
            name: "",
            date: "",
            time: "",
            duration: "",
        },
        normalEventCreatedData: [],
        eventDetail: [],
        userInvitationsData: [],
        vehiclesInvitationsData: [],
        pageableObj: {
            order: true,
            page: 0,
            size: 10,
            sortBy: "id"
        }

    },
    reducers: {
        saveNormalEventDetail: (state, action) => {
            state.normalEventDetails = action.payload
        },
        updateZonesList: (state, action) => {
            state.zonesList = action.payload
        },
        updateAllEmployees: (state, action) => {
            state.allEmployees = action.payload
        },
        updateSelectedEmployees: (state, action) => {
            state.selectedEmployees = action.payload
        },
        SaveEmailPhoneSearchList: (state, action) => {
            state.emailPhoneSearchList = [...state.emailPhoneSearchList, action.payload]
        },
        handlePagination: (state, { payload }) => {
            state.pageableObj = { ...state.pageableObj, [payload.name]: payload.value }
        },
        updateEmailPhoneSearchList: (state, action) => {
            state.emailPhoneSearchList = action.payload
        },

    },
    extraReducers: {
        ['employeeEvents/getEventFilters/fulfilled']: (state, action) => {
            const { data: { data }, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                // toast(data.message)
                state.eventFilters = data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in eventFilters")
            }
        },
        ['employeeEvents/incomingEvents/fulfilled']: (state, action) => {
            const { data: { data }, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                // toast(data.message)
                state.incomingEvents = data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in incomingEvents")
            }
        },
        ['employeeEvents/validationEvents/fulfilled']: (state, action) => {
            const { data: { data }, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                // toast(data.message)
                state.validationEvents = data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in validationEvents")
            }
        },
        ['employeeEvents/recordsEvents/fulfilled']: (state, action) => {
            const { data: { data }, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                // toast(data.message)
                state.recordsEvents = data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in recordsEvents")
            }
        },
        ['employeeEvents/zonesList/fulfilled']: (state, action) => {
            const { data: { data }, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                // toast(data.message)
                state.zonesList = data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in zonesList")
            }
        },
        ['employeeEvents/allEmployees/fulfilled']: (state, action) => {
            const { data: { data }, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                // toast(data.message)
                state.allEmployees = data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in allEmployees")
            }
        },
        ['employeeEvents/searchByEmail/fulfilled']: (state, action) => {
            const { data: { data }, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.emailPhoneSearchData = data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in emailPhoneSearchData")
            }
        },
        ['employeeEvents/searchByPhone/fulfilled']: (state, action) => {
            const { data: { data }, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.emailPhoneSearchData = data
            } else if (status === 400) {
                toast("phone_number not exists")
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in emailPhoneSearchData")
            }
        },
        ['employeeEvents/createNormalEvent/fulfilled']: (state, action) => {
            const { data: { data }, status } = action.payload || {}
            // console.log(data)
            if (status >= 200 && status < 300) {
                state.normalEventCreatedData = data
                toast.success("Event Created Successfully..!");
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in createNormalEvent")
            }
        },
        ['employeeEvents/createUserInvitation/fulfilled']: (state, action) => {
            const { data: { data }, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                toast.success("Invitation Succeed..!")
            } else if (status >= 400 && status < 500) {
                // toast("Something went wrong in createUserInvitation")
            }
        },
        ['employeeEvents/getEventDetail/fulfilled']: (state, action) => {
            const { data: { data }, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.eventDetail = data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in getEventDetail")
            }
        },
        ['employeeEvents/getUserInvitations/fulfilled']: (state, action) => {
            const { data: { data }, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.userInvitationsData = data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in getUserInvitations")
            }
        },
        ['employeeEvents/getVehiclesInvitations/fulfilled']: (state, action) => {
            const { data: { data }, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.vehiclesInvitationsData = data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in getVehiclesInvitations")
            }
        },
        ['employeeEvents/deleteUserInvitation/fulfilled']: (state, action) => {
            const { data: { data }, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                toast.success("user invitation was removed")
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in deleteUserInvitation")
            }
        },
        ['employeeEvents/cancelEvent/fulfilled']: (state, action) => {
            const { data: { data }, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                toast.success("event deleted")
            } else if (status === 400) {
                toast("event was already been canceled")
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in cancelEvent")
            }
        },
        ['employeeEvents/allowDenyEvent/fulfilled']: (state, action) => {
            const { data: { data }, status } = action.payload || {}
            // console.log(data)
            if (status >= 200 && status < 300) {
                toast.success(data?.status?.name)
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in allowDenyEvent")
            }
        }
    }
})

export const {
    saveNormalEventDetail,
    updateZonesList,
    updateAllEmployees,
    updateSelectedEmployees,
    SaveEmailPhoneSearchList,
    handlePagination,
    updateEmailPhoneSearchList
} = employeeEventsSlice.actions;

export default employeeEventsSlice.reducer;
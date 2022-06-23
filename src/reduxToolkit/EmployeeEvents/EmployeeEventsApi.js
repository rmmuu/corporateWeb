import { createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from "../../Apis/Axios";


export const GetEventFilters = createAsyncThunk("employeeEvents/getEventFilters", async () => {

    let response = await apiInstance.get('assets-service/event/get-filters').then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

export const GetIncomingEventsPageable = createAsyncThunk("employeeEvents/incomingEvents", async (body) => {

    let response = await apiInstance.post(`event-service/get-all-pageable/after-date/${body.date}`, body.pagination).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

export const GetValidationEventsPageable = createAsyncThunk("employeeEvents/validationEvents", async (body) => {

    let response = await apiInstance.post(`event-service/get-all-pageable/after-date/${body.date}/to-validate`, body.pagination).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

export const GetRecordsEventsPageable = createAsyncThunk("employeeEvents/recordsEvents", async (body) => {

    let response = await apiInstance.post(`event-service/get-all-pageable/before-date/${body.date}`, body.pagination).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

export const allZonesList = createAsyncThunk("employeeEvents/zonesList", async (body) => {

    let response = await apiInstance.post(`work-shift-service/app/v1/reservation/get-all-free-common-areas-by-dates`, body).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

export const getAllEmployees = createAsyncThunk("employeeEvents/allEmployees", async () => {

    let response = await apiInstance.get(`employee-service/get-all/only-user-data`).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

export const searchByEmail = createAsyncThunk("employeeEvents/searchByEmail", async (email) => {

    let response = await apiInstance.get(`user-service/get-by-email/zafar99@gmail.com`).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

export const searchByPhone = createAsyncThunk("employeeEvents/searchByPhone", async (phone) => {

    let response = await apiInstance.get(`user-service/get-by-phone-number/${phone}`).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

export const createNormalEvent = createAsyncThunk("employeeEvents/createNormalEvent", async (body) => {

    let response = await apiInstance.post(`event-service/create`, body).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

export const createUserInvitation = createAsyncThunk("employeeEvents/createUserInvitation", async (body) => {

    let response = await apiInstance.post(`event-service/create-user-invitations`, body).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

export const getEventDetail = createAsyncThunk("employeeEvents/getEventDetail", async (eventId) => {

    let response = await apiInstance.get(`event-service/get-by-id/${eventId}`).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

export const getUserInvitations = createAsyncThunk("employeeEvents/getUserInvitations", async (eventId) => {

    let response = await apiInstance.get(`event-service/get-all-user-invitations/by-event-id/${eventId}`).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

export const getVehiclesInvitations = createAsyncThunk("employeeEvents/getVehiclesInvitations", async (eventId) => {

    let response = await apiInstance.get(`event-service/get-all-vehicle-invitations/by-event-id/${eventId}`).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

export const deleteUserInvitation = createAsyncThunk("employeeEvents/deleteUserInvitation", async (invitId) => {

    let response = await apiInstance.delete(`event-service/delete-user-invitation-by-invitation-id/${invitId}`).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

export const cancelEvent = createAsyncThunk("employeeEvents/cancelEvent", async (id) => {

    let response = await apiInstance.put(`event-service/cancel-event/${id}`).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

export const allowDenyEvent = createAsyncThunk("employeeEvents/allowDenyEvent", async (body) => {

    let response = await apiInstance.put(`event-service/validate-event/${body.id}/validation/${body.option}`).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});


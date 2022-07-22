import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from '../../Apis/Axios';


//List all the father zones ( pagination) (done)
export const GetListFatherZones = createAsyncThunk("employeeZones/getListFatherZones", async (params, { dispatch, getState }) => {

    let result = await apiInstance.post(`zone-service/get-zones-and-children`, params?.pagination).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

// display all the status in the dropdown (done)
export const GetListStatusZone = createAsyncThunk("employeeZones/getListStatusZone", async (params, { dispatch, getState }) => {

    let result = await apiInstance.get(`status-service/get-all-to-zone`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

// Create Father Zone (done)
export const CreateFatherZone = createAsyncThunk("employeeZones/createFatherZone", async (params, { dispatch, getState }) => {

    let result = await apiInstance.post(`zone-service/create-father`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

// Create Child Zone (done)
export const CreateChildZone = createAsyncThunk("employeeZones/createChildZone", async (params, { dispatch, getState }) => {

    let result = await apiInstance.post(`zone-service/create-child`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

// Retrieve the information (Zone Detail) Details Common Area Sub Zones Total Access Devices and the list ( company-module zone-controller) (done)
export const ZoneDetailFatherAndChild = createAsyncThunk("employeeZones/zoneDetailFatherAndChild", async (params, { dispatch, getState }) => {
    const { zoneId } = params
    let result = await apiInstance.post(`zone-service/get-zone-father-and-children/by-zone-id/${zoneId}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

// Retrieve the information (Zone Detail) Autorized Employees (done)
export const ZoneDetailAuthorizedEmployee = createAsyncThunk("employeeZones/zoneDetailAuthorizedEmployee", async (params, { dispatch, getState }) => {
    const { zoneId } = params
    let result = await apiInstance.post(`zone-service/get-all/authorized-employees/${zoneId}`, params?.pagination).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

// Retrieve the information (Zone Detail) List of devices (done)
export const ZoneDetailListDevice = createAsyncThunk("employeeZones/zoneDetailListDevice", async (params, { dispatch, getState }) => {
    const { zoneId } = params
    let result = await apiInstance.get(`zone-service/zone-plane/get-all/by-zone-id/${zoneId}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

//update zone /update company-module zone-controller (done)

export const UpdateZone = createAsyncThunk("employeeZones/updateZone", async (params, { dispatch, getState }) => {

    let result = await apiInstance.put(`zone-service/update`, params?.updateZoneFormData).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result

    if (status == 200) {
        params?.navigate("/dashboard/singlezonedetails")
    }
    console.log(result)

    return { data, status }
});

//common-area/create company-module zone-controller (done)
export const CreateCommonAreaZone = createAsyncThunk("employeeZones/createCommonAreaZone", async (params, { dispatch, getState }) => {

    let result = await apiInstance.post(`zone-service/common-area/create`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

//common-area/update company-module zone-controller (done)
export const UpdateCommonAreaZone = createAsyncThunk("employeeZones/updateCommonAreaZone", async (params, { dispatch, getState }) => {

    let result = await apiInstance.put(`zone-service/common-area/update`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

//access-type/get-all company-module device-controller
export const GetAccessType = createAsyncThunk("employeeZones/getAccessType", async (params, { dispatch, getState }) => {

    let result = await apiInstance.get(`device-service/access-type/get-all`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)
    return { data, status }

})

//device-type/get-all company-module device-controller

export const GetDeviceType = createAsyncThunk("employeeZones/getDeviceType", async (params, { dispatch, getState }) => {

    let result = await apiInstance.get(`device-service/device-type/get-all`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)
    return { data, status }

})

//create device in Zone /create company-module device-controller

export const CreateDeviceZone = createAsyncThunk("employeeZones/createDeviceZone", async (params, { dispatch, getState }) => {

    let result = await apiInstance.post(`zone-service/create`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

//Call API, remove the user /user-zone/delete-by-user-id/{userId}/by-zone-id/{zoneId} company-module zone-controller

export const DeleteZoneUser = createAsyncThunk("employeeZones/deleteZoneUser", async (params, { dispatch, getState }) => {
    const { userId, zoneId } = params
    let result = await apiInstance.delete(`zone-service/user-zone/delete-by-user-id/${userId}/by-zone-id/${zoneId}`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

//Create list with user zone relationships


export const CreateUserZoneList = createAsyncThunk("employeeZones/createUserZoneList", async (params, { dispatch, getState }) => {

    let result = await apiInstance.post(`zone-service/user-zone/create-list`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});


// display all the zone map in the dropdown (done)
export const GetListZoneMap = createAsyncThunk("employeeZones/getListZoneMap", async (params, { dispatch, getState }) => {

    const { zoneId } = params
    let result = await apiInstance.get(`zone-service/zone-plane/get-all/by-zone-id/${zoneId}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

// zone-plane/create company-module zone-controller (done)
export const CreateZonePlane = createAsyncThunk("employeeZones/createZonePlane", async (params, { dispatch, getState }) => {

    const { name, zone, file, option } = params

    let result = await apiInstance.post(`zone-service/zone-plane/create`, { name, zone }).then(function (response) {
        console.log(response)
        // const payload = {
        //     file,
        //     option,
        //     id: response?.data?.data?.id
        // }
        let formData = new FormData();
        formData.append('id', response?.data?.data?.id);
        formData.append('option', "zone");
        formData.append('file', file);
        dispatch(UploadImgZonePlane(formData))

        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

// upload image zone(done)
export const UploadImgZonePlane = createAsyncThunk("employeeZones/uploadImgZonePlane", async (params, { dispatch, getState }) => {

    let result = await apiInstance.put(`image-service/upload`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

// delele image zone plane(done)
export const DeleteimgZonePlane = createAsyncThunk("employeeZones/deleteImgZonePlane", async (params, { dispatch, getState }) => {

    const { id } = params
    let option = "zone"
    let result = await apiInstance.delete(`image-service/delete-by-id/${id}/option/${option}`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

// set-coordinates company-module device-controller
export const SetZoneImageCoordinate = createAsyncThunk("employeeZones/setZoneImageCoordinate", async (params, { dispatch, getState }) => {

    let result = await apiInstance.put(`device-service/set-coordinates`, params?.data).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    // if (status === 200) {
    //     params?.setMarkers({})
    // }

    console.log(result)

    return { data, status }
});

//device-server/zone-plane/get-all/by-zone-plane-id/{zonePlaneId}

export const GetZoneDevicesLists = createAsyncThunk("employeeZones/getZoneDevicesLists", async (params, { dispatch, getState }) => {

    const { zonePlaneId } = params
    let result = await apiInstance.get(`device-server/zone-plane/get-all/by-zone-plane-id/${zonePlaneId}`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result

    return { data, status }
});




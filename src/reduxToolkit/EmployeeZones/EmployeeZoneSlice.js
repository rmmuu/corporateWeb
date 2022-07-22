import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const employeeProviderSlice = createSlice({
    name: "employeeZones",
    initialState: {
        getListFatherZones: [],
        getListStatusZone: [],
        createFatherZone: null,
        createChildZone: [],
        zoneDetailFatherAndChild: [],
        zoneDetailAuthorizedEmployee: [],
        zoneDetailListDevice: [],
        createCommonAreaZone: null,
        updateZone: null,
        updateCommonAreaZone: null,
        getAccessType: [],
        getDeviceType: [],
        createDeviceZone: null,
        deleteZoneUser: null,
        createUserZoneList: [],
        getListZoneMap: [],
        createZonePlane: {},
        uploadImgZonePlane: null,
        deleteImgZonePlane: null,
        setZoneImageCoordinate: null,
        getZoneDevicesLists: [],

    },
    reducers: {},
    extraReducers: {
        ["employeeZones/getListFatherZones/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from getListFatherZones slice ", data)
            if (status >= 200 && status < 300) {
                // toast(data.message)
                state.getListFatherZones = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to fetch data")
            }
        },
        ["employeeZones/getListStatusZone/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from getListStatusZone slice", data)
            if (status >= 200 && status < 300) {
                // toast(data.message)
                state.getListStatusZone = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to fetch Zone Status")
            }
        },
        ["employeeZones/createFatherZone/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from createFatherZone slice", data)
            if (status >= 200 && status < 300) {
                toast(data.message)
                state.createFatherZone = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to Create Father Zone")
            }
        },
        ["employeeZones/createChildZone/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from createChildZone slice", data)
            if (status >= 200 && status < 300) {
                toast(data.message)
                state.createChildZone = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to Create Child Zone")
            }
        },
        ["employeeZones/zoneDetailFatherAndChild/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from zoneDetailFatherAndChild slice", data)
            if (status >= 200 && status < 300) {
                // toast(data.message)
                state.zoneDetailFatherAndChild = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to Fetch Zone Detail")
            }
        },
        ["employeeZones/zoneDetailAuthorizedEmployee/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from zoneDetailAuthorizedEmployee slice", data)
            if (status >= 200 && status < 300) {
                // toast(data.message)
                state.zoneDetailAuthorizedEmployee = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to Fetch Zone Detail Authorized Employee")
            }
        },
        ["employeeZones/zoneDetailListDevice/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from zoneDetailListDevice slice", data)
            if (status >= 200 && status < 300) {
                // toast(data.message)
                state.zoneDetailListDevice = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to Fetch Zone Detail List Device")
            }
        },
        ["employeeZones/updateZone/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from updateZone slice", data)
            if (status >= 200 && status < 300) {
                toast(data.message)
                state.updateZone = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to update Zone Data")
            }
        },
        ["employeeZones/createCommonAreaZone/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from createCommonAreaZone slice", data)
            if (status >= 200 && status < 300) {
                toast(data.message)
                state.createCommonAreaZone = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to update Zone Data")
            }
        },
        ["employeeZones/updateCommonAreaZone/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from updateCommonAreaZone slice", data)
            if (status >= 200 && status < 300) {
                toast(data.message)
                state.updateCommonAreaZone = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to update Zone Data")
            }
        },

        ["employeeZones/getAccessType/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from getAccessType slice", data)
            if (status >= 200 && status < 300) {
                // toast(data.message)
                state.getAccessType = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to update Zone Data")
            }
        },

        ["employeeZones/getDeviceType/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from getDeviceType slice", data)
            if (status >= 200 && status < 300) {
                // toast(data.message)
                state.getDeviceType = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to update Zone Data")
            }
        },

        ["employeeZones/createDeviceZone/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from createDeviceZone slice", data)
            if (status >= 200 && status < 300) {
                toast(data.message)
                state.createDeviceZone
                    = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to Create Device Zone")
            }
        },

        ["employeeZones/deleteZoneUser/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from deleteZoneUser slice", data)
            if (status >= 200 && status < 300) {
                toast(data.message)
                state.deleteZoneUser
                    = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to Delete User")
            }
        },

        ["employeeZones/createUserZoneList/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from createUserZoneList slice", data)
            if (status >= 200 && status < 300) {
                toast(data.message)
                state.createUserZoneList
                    = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to create User Zone List")
            }
        },
        ["employeeZones/getListZoneMap/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from getListZoneMap slice", data)
            if (status >= 200 && status < 300) {
                // toast(data.message)
                state.getListZoneMap = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to Get Zone map")
            }
        },
        ["employeeZones/createZonePlane/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from createZonePlane slice", data)
            if (status >= 200 && status < 300) {
                toast(data.message)
                state.createZonePlane = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to Create Zone Plane")
            }
        },
        ["employeeZones/uploadImgZonePlane/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from uploadImgZonePlane slice", data)
            if (status >= 200 && status < 300) {
                toast(data.message)
                state.uploadImgZonePlane = data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to Create Zone Plane")
            }
        },
        ["employeeZones/deleteImgZonePlane/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from deleteImgZonePlane slice", data)
            if (status >= 200 && status < 300) {
                toast(data.message)
                state.deleteImgZonePlane = data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to Delete Zone Plane")
            }
        },
        ["employeeZones/setZoneImageCoordinate/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from setZoneImageCoordinate slice", data)
            if (status >= 200 && status < 300) {
                toast(data.message)
                state.setZoneImageCoordinate = data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to Delete Zone Plane")
            }
        },
        ["employeeZones/getZoneDevicesLists/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from getZoneDevicesLists slice", data)
            if (status >= 200 && status < 300) {
                // toast(data.message)
                state.getZoneDevicesLists = data
            }
            else if (status >= 400 && status < 500) {
                console.log("Fail to Get Zone Devices Lists")
                // toast("Fail to fetch Zone Devices Lists")
            }
        },



    },

})

export const { } = employeeProviderSlice.actions;

export default employeeProviderSlice.reducer;
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from '../../Apis/Axios';
import { toast } from "react-toastify";

// Create Contract Api's
export const CreateContract = createAsyncThunk("employeeContractor/CreateContract", async (getVal) => {
    let result = await apiInstance.post('contract-service/create',getVal).then(function (response) {
      if(response.status == 201 || response.status == 200){
      toast("Contract Added SuccessFully");
      }
       return response
        }).catch(function (error) {
            return error.response
        }) 
    const { data, status } = result
    return { data, status }
});

export const CreateContractWithCustom = createAsyncThunk("employeeContractor/CreateContractWithCustom", async (val) => {
    let customSchdule = JSON.stringify(val);
  let result = await apiInstance.post(`work-shift-service/contract-work/create-list`, customSchdule, {
    headers: {
      "content-Type": "application/json",
    },
  }).then(function (response) {
    if(response.status == 201 || response.status == 200){
    toast("Custom Schdule Added SuccessFully");
    }
     return response
      }).catch(function (error) {
          return error.response
      }) 
  const { data, status } = result
  return { data, status }
});

export const CreateContractWorkSchdule = createAsyncThunk("employeeContractor/CreateContract", async (params) => {
  const {WorkShift, val}=params
  let result = await apiInstance.post(`work-shift-service/contract-work/create/by-workshift-id/${WorkShift}/by-contract-id/${val}`).then(function (response) {
    if(response.status == 201 || response.status == 200){
    toast("Contract With Work Schdule Added SuccessFully");
    }
     return response
      }).catch(function (error) {
          return error.response
      })  
  const { data, status } = result
  document.getElementById("overlay").style.display = "none";

  return { data, status }
});

export const GetZoneTree = createAsyncThunk("employeeContractor/GetZoneTree", async () => {
  let result = await apiInstance.post(`zone-service/get-tree/father-zones`).then(function (response) {
    if(response.status == 201 || response.status == 200){
      toast.success("Zones Added SuccessFully");
    }
     return response
      }).catch(function (error) {
          return error.response
      }) 
  const { data, status } = result
  return { data, status }
});

export const GetAllContractors = createAsyncThunk("employeeContractor/GetAllContractors", async () => {
  let result = await apiInstance.get("contractor-service/get-all").then(function (response) {
    if(response.status == 201 || response.status == 200){
    toast.success("All Contractors get Successfully");
    }
     return response
      }).catch(function (error) {
          return error.response
      }) 
  const { data, status } = result
  return { data, status }
});

export const GetAllWorkSchdule = createAsyncThunk("employeeContractor/GetAllWorkSchdule", async () => {
  let result = await apiInstance.get("work-shift-service/get-all").then(function (response) {
    if(response.status == 201 || response.status == 200){
    }
     return response
      }).catch(function (error) {
          return error.response
      }) 
  const { data, status } = result
  return { data, status }
});

export const GetWorkTimeAccess = createAsyncThunk("employeeContractor/GetWorkTimeAccess", async (params) => {
  const {id,contractPagination}=params
  let result = await apiInstance.post(`work-shift-service/schedule/get-all-pageable/by-work-shift-id/${id}`,contractPagination).then(function (response) {
    if(response.status == 201 || response.status == 200){
    toast("Work Time Added SuccessFully");
    }
     return response
      }).catch(function (error) {
          return error.response
      }) 
  const { data, status } = result
  return { data, status }
});

export const GetAllEmployeeContractors = createAsyncThunk("employeeContractor/GetAllEmployeeContractors", async (params, { dispatch, getState }) => {
    const { pagination } = params || {};
      const result = await apiInstance.post("contractor-service/get-all-pageable",pagination)
        .then(function (response) {
          return response;
        })
        .catch(function (error) {
          return error.response;
        });
    
    const { data, status } = result
    return { data, status }
});

export const GetAllEmployeeContracts = createAsyncThunk("employeeContractor/getAllEmployeeContracts", async (param) => {
    const {inCommingActive, contractPagination}=param
      const result = await apiInstance.post(`contract-service/company/get-all-pageable/${inCommingActive}`,contractPagination)
        .then(function (response) {
          return response;
        })
        .catch(function (error) {
          return error.response;
        });
    
    const { data, status } = result
    return { data, status }
});



// CONTRACTOR DOCUMENTS DETAIL

export const ContractorDownloadDocuments = createAsyncThunk("employeeContractor/ContractorDownloadDocuments", async(params) => {
  const { id, option } = params || {};
  const result = await apiInstance.get(`image-service/download-by-id/${id}/option/${option}`)
    .then(function (response) {
        return response;
    })
    .catch(function (error) {
      toast(error?.response?.data?.message);
      document.getElementById("overlay").style.display = "none";
      return error.response;
    });

    const { data, status } = result
    return { data, status }
});



//UPDATE CONTRACT
export const GetStatus = createAsyncThunk("employeeContractor/GetStatus", async (getVal) => {
  let result = await apiInstance.get('status-service/get-all-to-contract').then(function (response) {
    if(response.status == 201 || response.status == 200){
   
    }
     return response
      }).catch(function (error) {
          return error.response
      }) 
  const { data, status } = result
  return { data, status }
});

export const UpDateContract = createAsyncThunk("employeeContractor/CreateContract", async (getVal) => {
  let result = await apiInstance.put('contract-service/update',getVal).then(function (response) {
    if(response.status == 201 || response.status == 200){
    toast("Contract Updated SuccessFully");
    }
     return response
      }).catch(function (error) {
          return error.response
      }) 
  const { data, status } = result
  return { data, status }
});

export const GetWorkShiftByContractID = createAsyncThunk("employeeContractor/GetWorkShiftByContractID", async (params) => {
  const {contractId,contractPagination}=params
  let result = await apiInstance.post(`work-shift-service/contract-work/get-all-pageable/by-contract-id/${contractId}`,contractPagination).then(function (response) {
    if(response.status == 201 || response.status == 200){
    toast("Work Time Added SuccessFully");
    }
     return response
      }).catch(function (error) {
          return error.response
      }) 
  const { data, status } = result
  return { data, status }
});

//Delete Access Time

export const DeleteAccessTime = createAsyncThunk("employeeContractor/GetWorkShiftByContractID", async (accessID) => {
  let result = await apiInstance.delete(`work-shift-service/contract-work/delete-by-id/${accessID}`).then(function (response) {
    if(response.status == 201 || response.status == 200){
    toast("Work Access Time Delete SuccessFully");
    }
     return response
      }).catch(function (error) {
          return error.response
      }) 
  const { data, status } = result
  return { data, status }
});

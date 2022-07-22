import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from '../../Apis/Axios';

//   @create order flow start

// Display orders list with pagination 
export const GetEmployeeProviderOrders = createAsyncThunk("employeeProvider/getEmployeeProviderOrders", async (params, { dispatch, getState }) => {

    // const { user } = params || {};
    // alert("hi")
    const date = 1654119668000
    const providerEmployeeId = "34483be8-8e88-4749-b55d-6f16c9a4c721"

    let result = await apiInstance.get(`order-service/app/v1/provider-employee/get-all/by-provider-employee-id/${providerEmployeeId}/by-after-date/${date}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

// create order  (provider-module order-controller) (done)
export const CreateEmployeeProviderOrders = createAsyncThunk("employeeProvider/createEmployeeProviderOrders", async (params, { dispatch, getState }) => {


    console.log(params)
    try {


        let result = await apiInstance.post(`order-service/create`, params?.data).then(function (response) {
            return response
        }).catch(function (error) {
            console.log(error)
            return error.response

        })
        const { data, status } = result
        console.log(result)

        if (status == 201) {
            params.navigate('/dashboard/providers-outlet', { replace: true })
        }

        return { data, status }
    } catch (error) {
        console.log(error)
    }


});

// updae order  (provider-module order-controller) (not found in api diagram and swagger)
export const UpdateEmployeeProviderOrders = createAsyncThunk("employeeProvider/updateEmployeeProviderOrders", async (params, { dispatch, getState }) => {

    const { description, item, delivery_date, is_delivery, providerList } = params || {};

    let result = await apiInstance.get(`end point here`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }

});

// see detials order  (provider-module order-controller)  (done  (but need to fix status))
export const DetailsEmployeeProviderOrder = createAsyncThunk("employeeProvider/detailsEmployeeProviderOrders", async (params, { dispatch, getState }) => {



    let result = await apiInstance.get(`order-service/get-by-id/${params}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }

});

// in order detail page wanna see detail of  employees   (done but no document found need to fix document mapping)
export const DetailsEmployeeProviderEmployee = createAsyncThunk("employeeProvider/detailsEmployeeProviderEmployee", async (params, { dispatch, getState }) => {

    let result = await apiInstance.get(`provider-employee-service/company/get-by-user-id/${params}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }

});
// in order detail page of employeee provider details wanna download files      (done but need to test)
export const DownloadEmployeeProviderOrderFiles = createAsyncThunk("employeeProvider/downloadEmployeeProviderOrderFiles", async (params, { dispatch, getState }) => {

    const { id, option } = params || {};

    let result = await apiInstance.get(`image-service/download-by-id/${id}/option/${option}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }

});
//in order detail page wanna see vehicle deatils    (done by need to fix with real data name)
export const DetailsEmployeeProviderVehicle = createAsyncThunk("employeeProvider/detailsEmployeeProviderVehicle", async (params, { dispatch, getState }) => {

    let result = await apiInstance.get(`provider-vehicle-service/get-by-vehicle-id/${params}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    return { data, status }
});

// see detials providers (provider-module order-controller)
export const DetailsEmployeeProvider = createAsyncThunk("employeeProvider/detailsEmployeeProvider", async (params, { dispatch, getState }) => {

    const { description, item, delivery_date, is_delivery, providerList } = params || {};

    let result = await apiInstance.get(`end point here`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }

});

// Get list of provider (done)
export const GetEmployeeProviderLists = createAsyncThunk("employeeProvider/getEmployeeProviderLists", async (params, { dispatch, getState }) => {

    let result = await apiInstance.get(`provider-service/get-all`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

//Get all orders requested by employee after date with pagination (incoming) (done )
export const GetIncomingProvidersPaginable = createAsyncThunk("employeeProvider/getIncomingProvidersPaginable", async (params, { dispatch, getState }) => {

    let result = await apiInstance.post(`order-service/company/get-all-pageable/incoming/${params?.date}`, params?.pagination).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

//Get all orders requested by employee after date with pagination (Records)   (done)
export const GetRecordsProvidersPaginable = createAsyncThunk("employeeProvider/getRecordsProvidersPaginable", async (params, { dispatch, getState }) => {

    let result = await apiInstance.post(`order-service/company/get-all-pageable/records/${params?.date}`, params?.pagination).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

//Get list of sort /order/get-filters (assets-module assets-shift-controller) (done)
export const GetEmployeeProviderOrdersSortList = createAsyncThunk("employeeProvider/getEmployeeProviderOrdersSortList", async (params, { dispatch, getState }) => {

    let result = await apiInstance.get(`assets-service/order/get-filters`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

//   @create order flow end

// @create provider flow start  (done)

//get list of gender
export const GetGenderListProvider = createAsyncThunk("employeeProvider/getGnderListProvider", async (params, { dispatch, getState }) => {

    let result = await apiInstance.get(`gender-service/get-all`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)
    return { data, status }

})
// Get provider by email  (user-module user-controller) (done )
export const GetEmployeeProviderByEmail = createAsyncThunk("employeeProvider/getEmployeeProviderByEmail", async (params, { dispatch, getState }) => {

    // const { email } = params || {};


    // let result = await apiInstance.get(`user-service/get-by-email/${params?.email}`, { "Access-Control-Allow-Origin": "http://localhost:3000" }).then(function (response) {
    //     return response
    // }).catch(function (error) {
    //     console.log(error)
    //     return error.response

    // })
    // // const { data, code } = result
    // console.log(result)

    // // return { data, code }
    let result = await fetch(`http://38.65.139.14:8080/corporate-user-pre-prod-v1/user-service/get-by-email/${params?.email}`)
        .then(data => {
            return data
        })
        .catch(err => {
            console.log(err)
            return err.response
        })
    const response = await result.json()
    const { data } = response
    console.log(response)
    return { data }

});

// Get provider by phoneNumber (user-module user-controller) (done)
export const GetEmployeeProviderByPhoneNumber = createAsyncThunk("employeeProvider/getEmployeeProviderByPhoneNumber", async (params, { dispatch, getState }) => {

    const { phoneNumber } = params || {};

    let result = await apiInstance.get(`user-service/get-by-phone-number/${phoneNumber}`).then(function (response) {
        return response
    }).catch(function (error) {
        console.log(error)
        return error.response

    })
    const { data, status } = result
    console.log(result)

    return { data, status }

});

//Pre-register a user  (first-access-module authentication-controller) (done)
export const CreateEmployeeProviderPreUser = createAsyncThunk("employeeProvider/EmployeeProviderPreUser", async (params, { dispatch, getState }) => {


    const { email, name, phoneNumber } = params || {};

    let result = await apiInstance.post(`authentication-service/pre-register-user`, { email, name, phoneNumber }).then(function (response) {
        return response
    }).catch(function (error) {
        console.log(error)
        return error.response

    })
    const { data, status } = result
    console.log(result)

    return { data, status }


});

//create  a provider user  (provider-module provider-controller) (done)
export const CreateEmployeeProvider = createAsyncThunk("employeeProvider/createEmployeeProvider", async (params, { dispatch, getState }) => {


    // const { email, name, phoneNumber } = params || {};

    let result = await apiInstance.post(`provider-service/create`, params?.createprovider).then(function (response) {
        return response
    }).catch(function (error) {
        console.log(error)
        return error.response

    })
    const { data, status } = result
    console.log(result)

    if (status == 201) {
        params.navigate('/dashboard/providers-outlet', { replace: true })
    }

    return { data, status }


});


//@update provider flow start
//get list of status provider (user-module status controller) (done)
export const GetStatusListProvider = createAsyncThunk("employeeProvider/getStatusListProvider", async (params, { dispatch, getState }) => {

    let result = await apiInstance.get(`status-service/get-all-to-provider`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)
    return { data, status }

})

// get single provider data  (provider-module provider-controller) (done)
export const GetEmployeeProviderById = createAsyncThunk("employeeProvider/getEmployeeProviderById", async (params, { dispatch, getState }) => {

    const { id } = params || {};

    let result = await apiInstance.get(`provider-service/get-by-id/${id}`).then(function (response) {
        return response
    }
    ).catch(function (error) {
        return error.response
    }
    )
    const { data, status } = result
    console.log(result)
    return { data, status }
})

//update provider information data (user-module user-controller) (pendding)
export const UpdateEmployeeProviderInfo = createAsyncThunk("employeeProvider/updateEmployeeProviderInfo", async (params, { dispatch, getState }) => {



    let result = await apiInstance.put(`user-service/update`, params).then(function (response) {
        return response
    }
    ).catch(function (error) {
        return error.response
    }
    )
    const { data, status } = result
    console.log(result)
    return { data, status }
})

//update provider company data  (provider-module provider-controller) (done)
export const UpdateEmployeeProviderCompany = createAsyncThunk("employeeProvider/updateEmployeeProviderCompany", async (params, { dispatch, getState }) => {



    let result = await apiInstance.put(`provider-service/update`, params).then(function (response) {
        return response
    }
    ).catch(function (error) {
        return error.response
    }
    )
    const { data, status } = result
    console.log(result)
    return { data, status }

})
//@update provider flow end
// @create provider flow End

//@listing provider flow start
//Get All Pageable Provider /get-all-pageable (provider-module provider-controller) (done)
export const GetAllPageableProvider = createAsyncThunk("employeeProvider/getAllPageableProvider", async (params, { dispatch, getState }) => {

    let result = await apiInstance.post(`provider-service/get-all-pageable`, params.pagination).then(function (response) {
        return response
    }
    ).catch(function (error) {
        return error.response
    }
    )
    const { data, status } = result
    console.log(result)
    return { data, status }

})



// Approve document

//  /external/get-all/by-user-id/{userId} company-module document-controller (done)

export const GetAllProviderDocuments = createAsyncThunk("employeeProvider/getAllProviderDocuments", async (params, { dispatch, getState }) => {

    let result = await apiInstance.get(`document-service/external/get-all/by-user-id/${params}`).then(function (response) {
        return response
    }
    ).catch(function (error) {
        return error.response
    }
    )
    const { data, status } = result
    console.log(result)
    return { data, status }

})

// /get-all-pageable/company/by-provider-id/{providerId}

export const GetAllCompanybyProviderId = createAsyncThunk("employeeProvider/getAllCompanybyProviderId", async (params, { dispatch, getState }) => {


    let result = await apiInstance.post(`provider-employee-service/get-all-pageable/company/by-provider-id/${params?.providerId}`, params?.pagination).then(function (response) {
        return response
    }
    ).catch(function (error) {
        return error.response
    }
    )
    const { data, status } = result
    console.log(result)
    return { data, status }

})




// /corporate-user-pre-prod-v1/document-service/approve-external-document (done)
export const ApproveExternalDocument = createAsyncThunk("employeeProvider/approveExternalDocument", async (params, { dispatch, getState }) => {

    let result = await apiInstance.post(`document-service/approve-external-document`, params).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

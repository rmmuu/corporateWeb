import axios from "axios";
import apiInstance from "./Axios";
import { endpoints, URL } from "./Constants";
const {
    CREATE_COMPANY_DATA,
    UPDATE_COMPANY_DATA,
    GET_COMPANY_DATA,
    GET_COMPANY_RESTRUCTIONS,
    UPDATE_COMPANY_RESTRUCTIONS,
    UPDATE_COMPANY_IMG
} = endpoints;


export const createCompanyData = (body) => apiInstance.get(CREATE_COMPANY_DATA, body);

export const updateCompanyData = (body) => apiInstance.put(UPDATE_COMPANY_DATA, body);

export const getCompanyData = (id) => apiInstance.get(GET_COMPANY_DATA + id);

export const getAllCompaniesData = () => apiInstance.get(GET_COMPANY_DATA);

export const getComopanyRestructions = (id) => apiInstance.get(GET_COMPANY_RESTRUCTIONS + id);

export const updateComopanyRestructions = (body) => apiInstance.put(UPDATE_COMPANY_RESTRUCTIONS, body);

export const updateComopanyImg = (formData) => {
    return axios.put(`${URL + UPDATE_COMPANY_IMG}`, formData, {
        headers: {
            "Accept": "application/json",
            "Content-type": "multipart/form-data",
            "Authorization": `Bearer ${sessionStorage.getItem("bearerToken")}`,
        },
    }
    );
}
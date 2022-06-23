
import axios from "axios";
import apiInstance from "./Axios";
import { endpoints, URL } from "./Constants";


const config = {
    headers: {
        "Accept": "application/json",
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

export const getToken = (params) => {
    return axios.post(URL + endpoints.TOKEN, params, config);
}

// export function runLogoutTimer(dispatch, timer, navigate) {
//     setTimeout(() => {
//         dispatch(logout(navigate));
//     }, timer);
// }

export const logoutUser = (navigate) => {
    sessionStorage.removeItem("userdata");
    sessionStorage.removeItem("bearerToken");
    navigate('/')
}



export const checkAutoLogin = (navigate) => {
    const tokenDetailsString = sessionStorage.getItem('bearerToken');
    // let tokenDetails = '';
    if (!tokenDetailsString) {
        logoutUser(navigate);
    }

    // tokenDetails = JSON.parse(tokenDetailsString);
    // let expireDate = new Date(tokenDetails.expireDate);
    // let todaysDate = new Date();

    // if (todaysDate > expireDate) {
    //     dispatch(logout(navigate));
    //     return;
    // }
    // dispatch(loginConfirmedAction(tokenDetails));

    // const timer = expireDate.getTime() - todaysDate.getTime();
    // runLogoutTimer(dispatch, timer, navigate);
}
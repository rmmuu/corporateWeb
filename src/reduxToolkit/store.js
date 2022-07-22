

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import authenticatioauthennSlice from './authentication/authenticationSlice';
import EmployeeEventsSlice from './EmployeeEvents/EmployeeEventsSlice';
import EmployeeProviderSlice from './EmployeeProviders/EmployeeProviderSlice';
import EmployeeContractorsSlice from './EmployeeContractors/EmployeeContractorsSlice';
import EmployeeZonesSlice from './EmployeeZones/EmployeeZoneSlice';
import vehicleDocumentSlice from './CompanyDocuments/vehicleDocumentSlice';
import CompanyWorkShiftSlice from './CompanyWorkShift/CompanyWorkShiftSlice';
import NotificationsSlice from './Notifications/NotificationsSlice';
import AccessHistorySlice from './AccessHistory/AccessHistorySlice';
import LogSlice from './Logs/LogSlice'



const reducers = combineReducers({
    authenticatioauthennSlice,
    vehicleDocumentSlice,
    EmployeeContractorsSlice,
    EmployeeEventsSlice,
    EmployeeProviderSlice,
    EmployeeZonesSlice,
    CompanyWorkShiftSlice,
    NotificationsSlice,
    AccessHistorySlice,
    LogSlice
});


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authenticatioauthennSlice']
};

const persistedReducer = persistReducer(persistConfig, reducers);



const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
})


export default store;

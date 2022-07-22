import React, { lazy, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { checkAutoLogin } from "./Apis/Authentication";

import { Dashboard } from "./pages/Dashboard/Dashboard";
import SideBar from './pages/Dashboard/SideBar';

import { Company } from "./pages/Dashboard/Company/Company";
import { CompanyDetails } from "./pages/Dashboard/Company/CompanyDetails";
import UserDocPanel from "./pages/Dashboard/Company/UserDocPanel";
import WorkShiftPanel from "./pages/Dashboard/Company/WorkShift/WorkShiftPanel";
import AllEmployees from "./pages/Dashboard/Company/Employees/AllEmployees";
import UpdateEmployee from "./pages/Dashboard/Company/Employees/UpdateEmployee";
import AddEmployeeRecord from "./pages/Dashboard/Company/Employees/AddEmployeeRecord";
import UploadEmployeeFile from "./pages/Dashboard/Company/Employees/UploadEmployeeFile";
import UpdateData from "./pages/Dashboard/Company/UpdateData";
import { Vehicles } from "./pages/Dashboard/Company/Vehicles/Vehicles";

import Zones from "./pages/Dashboard/Zones/Zones";
import SingleZoneDetails from "./pages/Dashboard/Zones/SingleZoneDetails"
import ShowDevices from "./pages/Dashboard/Zones/ShowDevices"
import AuthorizedEmployees from "./pages/Dashboard/Zones/Modal/AuthorizedEmployees"
import UpdateZone from "./pages/Dashboard/Zones/UpdateZone";

import { ContractorOutlet } from "./pages/Dashboard/Contractors/ContractorOutlet";
import ContractorDetails from './pages/Dashboard/Contractors/contractorDetails';
import UploadContractorFile from "./pages/Dashboard/Contractors/UploadContractorFile";
import ContractorPanel from "./pages/Dashboard/Contractors/contractorPanel";
import AddContractor from "./pages/Dashboard/Contractors/AddContractor";
import { CreateContractor } from "./pages/Dashboard/Contractors/CreateContract";
import EmployeeContractorDetails from "./pages/Dashboard/Contractors/EmployeeContractorDetails";
import ContractorApproveDocument from "./pages/Dashboard/Contractors/contractorApproveDocument"
import UpdateContractor from "./pages/Dashboard/Contractors/UpdateContractor";
import ProviderDetailsApproveDocuments from "./pages/Dashboard/Providers/ProviderDetailsApproveDocuments";
import VehicleProviderDetails from "./pages/Dashboard/Providers/VehicleProviderDetails";

import { EmployeeProviderOutlet } from "./pages/Dashboard/Providers/EmployeeProviderOutlet";
import EmployeeProvidersPanel from "./pages/Dashboard/Providers/ProvidersPanel";
import { CreateOrder } from "./pages/Dashboard/Providers/CreateOrder";
import RolesPanel from "./pages/Dashboard/Company/RolesPanel";
import CreateNewRole from "./pages/Dashboard/Company/CreateNewRole";
import AddUpdateRole from "./pages/Dashboard/Company/AddUpdateRole";
import AllVehicles from "./pages/Dashboard/Company/Vehicles/AllVehicles";
import AddUpdateVehicle from "./pages/Dashboard/Company/Vehicles/AddUpdateVehicle";
import OrderDetails from "./pages/Dashboard/Providers/OrderDetails";
import AddProviders from "./pages/Dashboard/Providers/AddProviders";
import UpdateProvider from "./pages/Dashboard/Providers/UpdateProvider";
import ProviderDetails from "./pages/Dashboard/Providers/ProviderDetails";
import ApproveDocument from "./pages/Dashboard/Providers/ApproveDocument";
import UploadProviderFile from "./pages/Dashboard/Providers/UploadProviderFile";
import NotificationPanel from "./pages/Dashboard/Company/NotificationPanel/NotificationPanel";
import VehicleDocPanel from "./pages/Dashboard/Company/VehicleDocPanel";



import Events from "./pages/Dashboard/Events/Events";
import EventsPanel from "./pages/Dashboard/Events/EventsPanel";
import CreateNormalEvent from "./pages/Dashboard/Events/CreateNormalEvent";
import CreateOnuEvent from "./pages/Dashboard/Events/CreateOnuEvents/CreateOnuEvent";
import EventDetailIcomming from "./pages/Dashboard/Events/EventDetailIcomming";
import EventDetailValidation from "./pages/Dashboard/Events/EventDetailValidation";


// import provide component
import AllVehiclesProvider from "./pages/Provider/AllVehiclesProvider";
import NotificationProvider from "./pages/Provider/NotificationProvider";
import ProfileProvider from "./pages/Provider/ProfileProvider";
import ProviderOrderDetail from './pages/Provider/ProviderDetailsApproveDocuments';
import VehicleDetail from "./pages/Provider/VehicleDetail";
import CompleteOrder from "./pages/Provider/CompleteOrder";
import OrderDetail from "./pages/Provider/OrderDetail";
import CreateEmployeeProvider from "./pages/Provider/CreateEmployeeProvider";
import AddVehicle from "./pages/Provider/AddVehicle";
import UpdateEmployeeProvider from "./pages/Provider/UpdateEmployeeProvider";
import UpdateOrder from "./pages/Provider/UpdateOrder";
import DocumentUpload from "./pages/Provider/DocumentUpload";
import AllOrderProvider from "./pages/Provider/AllOrderProvider";
import { ProviderOutlet } from "./pages/Provider/ProviderOutlet";
import ProvidersPanel from "./pages/Provider/ProvidersPanel";
import AllEmploeesProvider from "./pages/Provider/AllEmploeesProvider";

// import contractor component
import Profile from "./pages/Contractor/Profile/Profile";
import NotificationTab from "./pages/Contractor/Profile/NotificationTab"
import EditProfile from "./pages/Contractor/Profile/EditProfile";
import AddVehical from "./pages/Contractor/Profile/AddVehical";
import SearchVehicle from "./pages/Contractor/Vehicle/SearchVehicle";
import SearchEmploye from "./pages/Contractor/Employee/SearchEmploye";
import AddNewEmploye from "./pages/Contractor/Employee/AddNewEmploye"
import AddVehicleDocuments from "./pages/Contractor/Vehicle/AddVehicleDocuments";
import EmployeContractDetail from "./pages/Contractor/Employee/EmployeContractDetail";
import ProfileNotifications from "./pages/Contractor/Employee/ProfileNotifications";
import VehicalContractDetail from "./pages/Contractor/Vehicle/VehicalContractDetail";
import UserContractDetail from "./pages/Contractor/Employee/UserContractDetail";
import Contracts from "./pages/Contractor/Contracts/Contracts";
import { useDispatch, useSelector } from "react-redux";
import { companyRestrictions, getAllEmployees } from "./reduxToolkit/EmployeeEvents/EmployeeEventsApi";
import ProviderEmployeeDetails from "./pages/Dashboard/Providers/ProviderEmployeeDetails";
import CreateNotifications from "./pages/Dashboard/Company/CreateNotifications";


// lazyLoading import
const Home = lazy(() => import('./pages/Home/Home'));
const LoginOption = lazy(() => import('./pages/LoginOption/LoginOption'));


const DashboardRoutes = () => {

  const companyId = "a6bd2887-0f4a-4e5f-b0b5-000d9817ab23";
  let routes;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const user = useSelector((state) => state?.userData?.user?.data);
  const isAuthenticated = sessionStorage.getItem('bearerToken');

  useEffect(() => {
    // checkAutoLogin(navigate);
    if (isAuthenticated) {
      dispatch(companyRestrictions(companyId));
      dispatch(getAllEmployees());
    }
  }, [isAuthenticated]);

  if (isAuthenticated) {
    routes = (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 p-0">
            <div className="position-fixed">
              <SideBar />
            </div>
          </div>
          <div className="col-md-10">
            <Routes>
              <Route path="/dashboard/*" element={<Dashboard />} >

                <Route index path="company" element={<CompanyDetails />} />
                <Route path="company" element={<Company />} >

                  <Route path="user-doc-panel" element={<UserDocPanel />} />
                  <Route path="update-data" element={<UpdateData />} />
                  <Route path="workshift-panel" element={<WorkShiftPanel />} />
                  <Route path="roles-panel" element={<RolesPanel />} />
                  <Route path="add-new-role" element={<CreateNewRole />} />
                  <Route path="add-update-role/:id" element={<AddUpdateRole />} />
                  <Route path="vehicle-doc-panel" element={<VehicleDocPanel />} />
                  <Route path="notification-panel" element={<NotificationPanel />} />
                  <Route path="create-notification" element={<CreateNotifications />} />

                  <Route path="employees" element={<AllEmployees />} />
                  <Route path="updateemployee" element={<UpdateEmployee />} />
                  <Route path="addemployee" element={<AddEmployeeRecord />} />
                  <Route path="addemployee/:id" element={<AddEmployeeRecord />} />
                  <Route path="uploademployeefile" element={<UploadEmployeeFile />} />

                  <Route path="allvehicles" element={<AllVehicles />} />
                  <Route path="addupdatevehicle" element={<AddUpdateVehicle />} />
                  <Route path="addupdatevehicle/:id" element={<AddUpdateVehicle />} />

                </Route>


                <Route path="zones" element={<Zones />} />
                <Route path="singlezonedetails" element={<SingleZoneDetails />} />
                <Route path="showdevices" element={<ShowDevices />} />
                <Route path="authmodal" element={<AuthorizedEmployees />} />
                <Route path="updatezone" element={<UpdateZone />} />


                <Route index path="contractors-outlet" element={<ContractorPanel />} />
                <Route path="contractors-outlet" element={<ContractorOutlet />}>
                  <Route path="contractor-panel" element={<ContractorPanel />} />
                  <Route path="create-order" element={<CreateContractor />} />
                  <Route path="add-contractor" element={<AddContractor />} />
                  <Route path="update-contractor" element={<UpdateContractor />} />
                  <Route path="employee-contractor-details" element={<EmployeeContractorDetails />} />
                  <Route path="contractor-approve-document" element={<ContractorApproveDocument />} />
                  <Route path="upload-contractor" element={<UploadContractorFile />} />
                  <Route path="contractor-details" element={<ContractorDetails />} />
                  <Route path="provider-detail" element={<ProviderDetailsApproveDocuments />} />
                  <Route path="vehicle-detail" element={<VehicleProviderDetails />} />
                </Route>


                <Route path="events-panel" element={<Events />} />
                <Route path="events-panel" element={<EventsPanel />} >
                  <Route path="events" element={<Events />} />
                  <Route path="normal-events" element={<CreateNormalEvent />} />
                  <Route path="onu-events" element={<CreateOnuEvent />} />
                  <Route path="incomming-envent-detail/:id" element={<EventDetailIcomming />} />
                  <Route path="validation-envent-detail/:id" element={<EventDetailValidation />} />
                </Route>

                <Route index path="providers-outlet" element={<EmployeeProvidersPanel />} />
                <Route path="providers-outlet" element={<EmployeeProviderOutlet />}>
                  <Route path="providers-panel" element={<EmployeeProvidersPanel />} />
                  <Route path="create-order" element={<CreateOrder />} />
                  <Route path="upload-contractor" element={<UploadContractorFile />} />
                  <Route path="order-details" element={<OrderDetails />} />
                  <Route path="provider-detail" element={<ProviderDetailsApproveDocuments />} />
                  <Route path="vehicle-detail" element={<VehicleProviderDetails />} />
                  <Route path="add-providers" element={<AddProviders />} />
                  <Route path="update-providers" element={<UpdateProvider />} />
                  <Route path="employee-providers-details" element={<ProviderDetails />} />
                  <Route path="approve-documents" element={<ApproveDocument />} />
                  <Route path="upload-provider" element={<UploadProviderFile />} />
                  <Route path='providers_deatail_page' element={<ProviderEmployeeDetails />} />
                </Route>

                {/* [provider work flow pages route start] */}
                <Route path="provider" element={<ProviderOutlet />} >
                  <Route index path="providers-outlet" element={<ProvidersPanel />} />
                  <Route path="orders" element={<AllOrderProvider />} />
                  <Route path="employees" element={<AllEmploeesProvider />} />
                  <Route path="vehicles" element={<AllVehiclesProvider />} />
                  <Route path="vehicles-details" element={<VehicleDetail />} />
                  <Route path="complete-order" element={<CompleteOrder />} />
                  <Route path="provider-order-detail" element={<ProviderOrderDetail />} />
                  <Route path="order-detail" element={<OrderDetail />} />
                  <Route path="create-employee" element={<CreateEmployeeProvider />} />
                  <Route path="add-vehicles" element={<AddVehicle />} />
                  <Route path="update-employee" element={<UpdateEmployeeProvider />} />
                  <Route path="update-order" element={<UpdateOrder />} />
                  <Route path="upload-doc" element={<DocumentUpload />} />
                </Route>
                <Route path="notification_provider" element={<NotificationProvider />} />
                <Route path="profile_provider" element={<ProfileProvider />} />
                {/* [provider work flow pages route end] */}

                {/* [contractor work flow pages route start] */}
                <Route path="profile" element={<Profile />} />
                <Route path="notificationtab" element={<NotificationTab />} />
                <Route path="edit-profile" element={<EditProfile />} />
                <Route path="addvehical" element={<AddVehical />} />
                <Route path="search-vehicle" element={<SearchVehicle />} />
                <Route path="search-employe" element={<SearchEmploye />} />
                <Route path="add-new-employe" element={<AddNewEmploye />} />
                <Route path="add-vehicle-docs" element={<AddVehicleDocuments />} />
                <Route path="employee-contract-detail" element={<EmployeContractDetail />} />
                <Route path="notification-panel" element={<ProfileNotifications />} />
                <Route path="vehicle-contract-detail" element={<VehicalContractDetail />} />
                <Route path="user-contract-detail" element={<UserContractDetail />} />
                <Route path="contracts" element={<Contracts />} />
                {/* [contractor work flow pages route end] */}
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* {
          isAuthenticated ? */}
        <Route path="/login-option" element={<LoginOption />} /> :
        <Route path="/" element={<Home />} />
        {/* } */}
      </Routes>
      {routes}
    </>
  );
}

export default DashboardRoutes;
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Company } from "./pages/Dashboard/Company/Company";
import { CompanyDetails } from "./pages/Dashboard/Company/CompanyDetails";
import { Employees } from "./pages/Dashboard/Company/Employees/Employees";
import UpdateData from "./pages/Dashboard/Company/UpdateData";
import { Vehicles } from "./pages/Dashboard/Company/Vehicles/Vehicles";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Zones } from "./pages/Dashboard/Zones/Zones";
import Home from "./pages/Home/Home";
import LoginOption from "./pages/LoginOption/LoginOption";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-option" element={<LoginOption />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route index element={<Company />} />
          <Route path="company" element={<Company />} />
          <Route path="company-details" element={<CompanyDetails />} />
          <Route path="employees" element={<Employees />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="updatedata" element={<UpdateData />} />
          <Route path="zones" element={<Zones />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import DashboardRoutes from "./DashboardRoutes";

import BounceLoader from "react-spinners/BounceLoader";
import { override } from "./Helpers/spinnercss";

const App = () => {
  return (
    <>
      <Suspense fallback={<BounceLoader loading="true" css={override} size={50} />}>
        <DashboardRoutes />
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;

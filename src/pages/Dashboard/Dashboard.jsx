import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Dashboard = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 p-0">
                        <div className=" position-fixed">
                            <SideBar />
                        </div>
                    </div>
                    <div className="col-md-10">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;
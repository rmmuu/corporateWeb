import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../Apis/Authentication";
import bglogout from "../../assets/images/bglogout.png";
import logouticon from "../../assets/images/logouticon.svg";

const LoginOption = () => {
    const navigate = useNavigate();
    const users = [1, 2]
    return (
        <>
            <div className="home_bg_m">
                <div className="p-3 logout_m d-flex">
                    <img src={logouticon} alt="logout_img" />
                    <span onClick={() => logoutUser(navigate)}>LOG OUT</span>
                </div>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="card loginop_card ">
                            <h3>CHOOSE A COMPANY</h3>
                            <div className="container">
                                <div className="row justify-content-center">
                                    {
                                        users.map(item => (
                                            <div className="col-lg-5" key={item}>
                                                <div className="mb-4 card loginop_child_card ">
                                                    <a href="/dashboard/company">
                                                        <div className="p-2">
                                                            <img
                                                                src={bglogout}
                                                                className=" img-fluid w-100"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="text-center login_crad_body ">
                                                            <p>COMPANY</p>
                                                            <h6>
                                                                <span>IBL |</span> Intelligence Bureau
                                                                Laboratory
                                                            </h6>
                                                            <p className="pt-2">ROLE</p>
                                                            <h6>General Employee</h6>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginOption;

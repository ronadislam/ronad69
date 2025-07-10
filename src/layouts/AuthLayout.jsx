import React from "react";
import { Outlet } from "react-router";
import Authimg from "../assets/authImage.png";
import ProFirstLogo from "../pages/profirstLogo/ProFirstLogo";
const AuthLayout = () => {
  return (
    <div className=" bg-base-200 ">
      <div>
        <ProFirstLogo></ProFirstLogo>
      </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <img src={Authimg} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

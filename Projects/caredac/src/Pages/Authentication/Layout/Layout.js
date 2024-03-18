import React from "react";
import { Login } from "../Login/Login";
import { Registration } from "../Registration/Registration";
import { SelectLanguage } from "../SelectLanguage/SelectLanguage";
import { ForgotPassword } from "../ForgotPassword/ForgotPassword";
import { ResetPassword } from "../ResetPassword/ResetPassword";
import { OTPverification } from "../OTPverification/OTPverification";
import { Route, Routes } from "react-router-dom";

import bgImage from "../../../Assets/Images/Bg.png";
import { RegisterPatient } from "../RegisterPatient/RegisterPatient";
import { RegisterPatientInfo } from "../RegisterPatientInfo/RegisterPatientInfo";
import { RegisterServiceNeeded } from "../RegisterServiceNeeded/RegisterServiceNeeded";
import { RegisterMemberDetails } from "../RegisterMemberDetails/RegisterMemberDetails";
import { RegisterPatientDetails } from "../RegisterPatientDetails/RegisterPatientDetails";

export const Layout = () => {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundSize: "100% 100%",
          fontFamily: "",
        }}
      >
        <Routes>
          <Route exact path="/selectlanguage" element={<SelectLanguage />} />
          <Route exact path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/otp-verification" element={<OTPverification />} />
          <Route path="/register-patient" element={<RegisterPatient />} />
          <Route path="/register-patient-info" element={<RegisterPatientInfo />} />
          <Route path="/register-service-needed" element={<RegisterServiceNeeded />} />
          <Route path="/register-member-details" element={<RegisterMemberDetails />} />
          <Route path="/register-patient-details" element={<RegisterPatientDetails />} />
        </Routes>
      </div>
    </>
  );
};

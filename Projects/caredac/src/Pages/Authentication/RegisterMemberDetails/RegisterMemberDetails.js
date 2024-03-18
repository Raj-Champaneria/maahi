import React from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import lineImg from "../../../Assets/Images/Line 29.png";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";

export const RegisterMemberDetails = () => {
  const [selected, setSelected] = useState("");
  const stateOptions = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
  ];
  const [selectedState, setSelectedState] = useState("");

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Full name is required")
      .matches(/^[a-zA-Z]*$/, "Full name must contain only letters")
      .min(2, "Full name must be at least 2 characters"),
    phoneNo: yup
      .string()
      .required("Mobile number is required")
      .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits long"),
    dateOfBirth: yup.string().required("Date of birth is required"),
    genderOption: yup.string().required("Please select an option"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="wrapper">
        <div>
          <h1 className="form-title">Enter Member Details</h1>
          <div className="form-description">Need to add perfect details</div>
        </div>
        <img src={lineImg} />
        <div className="from-wrapper mt-2">
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "450px" }}>
            <div>
              <label htmlFor="fullName" className="login-form-label">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter Full name"
                className="form-control"
                style={{ border: "1px solid #475467", borderRadius: "12px" }}
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="text-danger">{errors.fullName.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="dateOfBirth" className="login-form-label">
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                placeholder=""
                className="form-control"
                style={{ border: "1px solid #475467", borderRadius: "12px" }}
                {...register("dateOfBirth")}
              />
              {errors.dateOfBirth && (
                <p className="text-danger">{errors.dateOfBirth.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="phoneNo" className="login-form-label">
                Phone Number
              </label>
              <input
                type="number"
                id="phoneNo"
                placeholder="Enter mobile number"
                className="form-control"
                style={{ border: "1px solid #475467", borderRadius: "12px" }}
                {...register("phoneNo")}
              />
              {errors.phoneNo && (
                <p className="text-danger">{errors.phoneNo.message}</p>
              )}
            </div>
            {/* Radio-buttons? */}
            <div className="mt-3">
              <div>Gender</div>
              <div className="d-flex align-items-center mt-1">
                <div className="">
                  <input
                    type="radio"
                    id="male"
                    className="form-check-input"
                    value="male"
                    {...register("genderOption")}
                  />
                  <label htmlFor="male" className="login-form-label ms-2">
                    Male
                  </label>
                </div>
                <div className="ms-2 ">
                  <input
                    type="radio"
                    id="female"
                    className="form-check-input"
                    value="female"
                    {...register("genderOption")}
                  />
                  <label htmlFor="female" className="login-form-label ms-2">
                    Female
                  </label>
                </div>
                <div className="ms-2">
                  <input
                    type="radio"
                    id="non-binary"
                    className="form-check-input"
                    value="non-binary"
                    {...register("genderOption")}
                  />
                  <label htmlFor="non-binary" className="login-form-label ms-2">
                    Non-Binary
                  </label>
                </div>
              </div>
              {errors.genderOption && (
                <p className="text-danger" style={{ maxWidth: "450px" }}>
                  {errors.genderOption.message}
                </p>
              )}
            </div>
            <img src={lineImg} />
            <div className="mt-2">
              <input
                placeholder="Use my current location"
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="address1" className="login-form-label">
                Address Line 1
              </label>
              <input
                type="text"
                id="address1"
                placeholder="Enter address"
                className="form-control"
                style={{ border: "1px solid #475467", borderRadius: "12px" }}
                {...register("addressLine1")}
              />
            </div>
            <div>
              <label htmlFor="address2" className="login-form-label">
                Address Line 2
              </label>
              <input
                type="text"
                id="address2"
                placeholder="Enter address"
                className="form-control"
                style={{ border: "1px solid #475467", borderRadius: "12px" }}
                {...register("addressLine2")}
              />
            </div>
            {/* COUNTRY AND STATE */}
            <div className="d-flex align-items-center justify-content-around mt-3">
              <div>
                <label htmlFor="country-dropdown" className="mb-1">
                  Country
                </label>
                <ReactFlagsSelect
                  selected={selected}
                  onSelect={(code) => setSelected(code)}
                  placeholder="Select Country"
                  style={{ border: "1px solid #475467", borderRadius: "12px" }}
                  {...register("country")}
                />
              </div>
              <div>
                <label htmlFor="state-dropdown" className="mb-1">
                  State
                </label>
                <select
                  className="form-select"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  style={{ border: "1px solid #475467", borderRadius: "12px" }}
                  {...register("state")}
                >
                  <option value="">Select State</option>
                  {stateOptions.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* COUNTRY AND STATE */}
            {/* CITY AND PINCODE */}
            <div className="d-flex align-items-center justify-content-around mt-3">
              <div>
                <label htmlFor="city" className="login-form-label">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter city"
                  className="form-control"
                  style={{ border: "1px solid #475467", borderRadius: "12px" }}
                  {...register("city")}
                />
              </div>
              <div>
                <label htmlFor="pincode" className="login-form-label">
                  Pin Code
                </label>
                <input
                  type="text"
                  id="pincode"
                  placeholder="Enter pin code"
                  className="form-control"
                  style={{ border: "1px solid #475467", borderRadius: "12px" }}
                  {...register("pincode")}
                />
              </div>
            </div>
            {/* CITY AND PINCODE */}
            <div className="mt-3">
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{
                  borderRadius: "40px",
                  backgroundColor: "#024FAA",
                  fontSize: "16px",
                  textTransform: "none",
                }}
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

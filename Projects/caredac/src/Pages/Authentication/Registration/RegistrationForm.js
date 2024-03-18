import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@mui/material";

export const RegistrationForm = () => {
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Full name is required")
      .matches(/^[a-zA-Z]*$/, "Full name must contain only letters")
      .min(2, "Full name must be at least 2 characters"),

    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    mobileNo: yup
      .string()
      .required("Mobile number is required")
      .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits long"),
    dateOfBirth: yup.string().required("Date of birth is required"),
    genderOption: yup.string().required("Please select an option"),
    termsAndConditions: yup
      .bool()
      .oneOf([true], "You must agree to the terms and conditions"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
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
      <form style={{ width: "500px" }} onSubmit={handleSubmit(onSubmit)}>
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
          <label htmlFor="email" className="login-form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            className="form-control"
            style={{ border: "1px solid #475467", borderRadius: "12px" }}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="mobileNo" className="login-form-label">
            Mobile Number
          </label>
          <input
            type="number"
            id="mobileNo"
            placeholder="Enter mobile number"
            className="form-control"
            style={{ border: "1px solid #475467", borderRadius: "12px" }}
            {...register("mobileNo")}
          />
          {errors.mobileNo && (
            <p className="text-danger">{errors.mobileNo.message}</p>
          )}
        </div>

        <div className="mt-2">
          <label htmlFor="password" className="login-form-label">
            Password
          </label>
          <input
            type="text"
            id="password"
            placeholder="Enter password"
            className="form-control"
            style={{ border: "1px solid #475467", borderRadius: "12px" }}
            {...register("password")}
          />
          {errors.password && (
            <p className="text-danger" style={{ maxWidth: "450px" }}>
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="mt-2">
          <label htmlFor="confirmPassword" className="login-form-label">
            Confirm Password
          </label>
          <input
            type="text"
            id="confirmPassword"
            placeholder="confirm password"
            className="form-control"
            style={{ border: "1px solid #475467", borderRadius: "12px" }}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-danger" style={{ maxWidth: "450px" }}>
              {errors.confirmPassword.message}
            </p>
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
        <div className="mt-2">
          <input
            type="checkbox"
            id=""
            placeholder="confirm"
            className="form-check-input"
            {...register("termsAndConditions", { required: true })}
          />
          <label htmlFor="" className="login-form-label ms-2">
            By Continuing, you agree to our Terms and conditions
          </label>
          {errors.termsAndConditions && (
            <p className="text-danger" style={{ maxWidth: "450px" }}>
              {errors.termsAndConditions.message}
            </p>
          )}
        </div>
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
            Sign Up
          </Button>
        </div>
      </form>
    </>
  );
};

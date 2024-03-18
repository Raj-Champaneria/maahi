import React from "react";
import "../Registration/Registration.css";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";

export const Registration = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    userName: yup
      .string()
      .required("Username is required")
      .min(4, "Username must be at least 4 characters")
      .max(20, "Username must not exceed 20 characters")
      .matches(
        /^[a-zA-Z0-9_]*$/,
        "Username must contain only letters, numbers, and underscores"
      ),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
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
  const registerData = (data) => {
    console.log(data);
    navigate("/home");
  };
  return (
    <div className="d-flex align-items-center justify-content-center form-wrapper">
      <form
        className="p-5 registration-form"
        onSubmit={handleSubmit(registerData)}
      >
        <h5 className="text-center mb-4 ">REGISTER</h5>
        <div className="mb-3">
          <label for="exampleInputUserName" class="form-label">
            User Name{" "}
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputUserName"
            {...register("userName")}
          />
          {errors.userName && (
            <div className="mt-1 text-danger">{errors.userName.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email{" "}
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            {...register("email")}
          />
          {errors.email && (
            <div className="mt-1 text-danger">{errors.email.message}</div>
          )}
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            {...register("password")}
          />
          {errors.password && (
            <div className="mt-1 text-danger">{errors.password.message}</div>
          )}
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword2" class="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword2"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <div className="mt-1 text-danger">
              {errors.confirmPassword.message}
            </div>
          )}
        </div>
        <div className="d-flex align-items-center justify-content-center ">
          <button type="submit" class="btn  btn-secondary px-5 mt-3">
            Register
          </button>
        </div>
        <div className="mt-3 text-center">
          Already have an account?<Link to="/">Log in</Link>{" "}
        </div>
      </form>
    </div>
  );
};

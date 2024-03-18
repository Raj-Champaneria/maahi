import "./App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function App() {
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required("First name is required")
      .matches(/^[a-zA-Z]*$/, "First name must contain only letters")
      .min(2, "First name must be at least 2 characters"),
    lastName: yup
      .string()
      .required("Last name is required")
      .matches(/^[a-zA-Z]*$/, "First name must contain only letters")
      .min(2, "Last name must be at least 2 characters"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNo: yup
      .string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits long"),
    dateOfBirth: yup.string().required("Date of birth is required"),
    address: yup
      .string()
      .required("Address is required")
      .min(10, "Address must be at least 10 characters")
      .max(100, "Address must not exceed 100 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitData = (data) => {
    console.log(data);
  };

  return (
    <div className="form-wrapper p-5">
      <form onSubmit={handleSubmit(submitData)}>
        <h1 className="text-center">Personal Details</h1>
        <div className="mb-3">
          <label for="exampleInputFirstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputFirstName"
            {...register("firstName")}
          />
          {errors.firstName && (
            <div className="error-msg">{errors.firstName.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label for="exampleInputLastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputLastName"
            {...register("lastName")}
          />
          {errors.lastName && (
            <div className="error-msg">{errors.lastName.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            {...register("email")}
          />
          {errors.email && (
            <div className="error-msg">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label for="exampleInputPhoneNo" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPhoneNo"
            {...register("phoneNo")}
          />
          {errors.phoneNo && (
            <div className="error-msg">{errors.phoneNo.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label for="exampleInputDOB" className="form-label">
            Date Of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleInputDOB"
            {...register("dateOfBirth")}
          />
          {errors.dateOfBirth && (
            <div className="error-msg">{errors.dateOfBirth.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label for="exampleInputAddress" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
            id="exampleInputAddress"
            {...register("address")}
          ></textarea>
          {errors.address && (
            <div className="error-msg">{errors.address.message}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;

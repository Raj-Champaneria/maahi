import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [formErrs, setFormErrs] = useState({});
  const submitDetails = (e) => {
    e.preventDefault();
    validateForm();
    if (formErrs.length === 0) {
      console.log(
        `Name : ${firstName} ${lastName} , Email : ${email} , Phone No : ${phoneNo} , Address : ${address}`
      );
    }
  };
  const errors = {};
  const validateForm = () => {
    if (firstName.length == 0) {
      errors.firstName = "First Name is required";
    }
    if (lastName.length == 0) {
      errors.lastName = "Last Name is required";
    }
    if (email.length == 0) {
      errors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      errors.email = "Invalid Email";
    }
    if (phoneNo.length == 0) {
      errors.phoneNo = "Phone Number is required";
    } else if (phoneNo.length > 10 || phoneNo.length < 10) {
      errors.phoneNo = "Phone Number should be of 10 digits";
    }
    if (address.length == 0) {
      errors.address = "Address is required";
    }
    if (Object.keys(errors).length > 0) {
      setFormErrs(errors);
    }
  };

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={submitDetails}>
        <h3 className="form-heading">Personal Details</h3>
        {/* FIRSTNAME */}
        <div className="name-field mt-20">
          <label>
            First Name :
            <input
              type="text"
              placeholder="First Name"
              className="name-input input-field"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          {formErrs.firstName && (
            <div className="err-msg">{formErrs.firstName}</div>
          )}
        </div>
        {/* LASTNAME */}
        <div className="name-field mt-20">
          <label>
            Last Name :
            <input
              type="text"
              placeholder="Last Name"
              className="name-input input-field"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </label>
          {formErrs.lastName && (
            <div className="err-msg">{formErrs.lastName}</div>
          )}
        </div>
        {/* EMAIL */}
        <div className="email-field mt-20">
          <label>
            Email :
            <input
              type="text"
              placeholder="Email"
              className="email-input input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          {formErrs.email && <div className="err-msg">{formErrs.email}</div>}
        </div>
        {/* PHONE_NUMBER */}
        <div className="number-field mt-20">
          <label>
            Phone No :
            <input
              type="number"
              placeholder="Phone No."
              className="phone-input input-field"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </label>
          {formErrs.phoneNo && (
            <div className="err-msg">{formErrs.phoneNo}</div>
          )}
        </div>
        {/* ADDRESS */}
        <div className="add-field mt-20">
          <label>
            Address:
            <textarea
              placeholder="Address"
              className="address-input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          {formErrs.address && (
            <div className="err-msg">{formErrs.address}</div>
          )}
        </div>

        <div className="mt-20 btn-wrapper">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;

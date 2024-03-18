import React from 'react'
import "../ContactUs/Contact.css"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Navbar } from '../Navbar/Navbar';

export const Contact = () => {
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
    help: yup
      .string()
      .required("This field is required")
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
   reset()
  };
  
  return (
    <div>
      <Navbar/>
      <div className='contact-us-container d-flex align-items-center justify-content-evenly mt-5'>
      <div className='contact-desc'>
        <h1 className='contact-title'>Contact Us</h1>
        <p className='contact-description mt-3'>Need to get in touch with us? Either fill out the form with your inquiry or find the below email address to contact. </p>
        <div className='text-primary'>abc@gmail.com</div>
      </div>

      {/* Contact-Us Form */}
      <div className='contact-form'>
      <form className="p-5 contact-form" 
      
      onSubmit={handleSubmit(onSubmit)}
      >
        
        <div className="mb-3">
          <label for="exampleInputFirstName" class="form-label">
            First Name{" "}
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputFirstName"
            {...register("firstName")}
          />
          {errors.firstName && (
            <div className="mt-1 text-danger">{errors.firstName.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label for="exampleInputLastName" class="form-label">
            Last Name{" "}
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputLastName"
            {...register("lastName")}
          />
          {errors.lastName && (
            <div className="mt-1 text-danger">{errors.lastName.message}</div>
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
        <div className="mb-3">
          <label for="exampleInput" class="form-label">
            What can we help you with?{" "}
          </label>
          <textarea
            
            class="form-control"
            id="exampleInput"
            {...register("help")}
          ></textarea>
          {errors.help && (
            <div className="mt-1 text-danger">{errors.help.message}</div>
          )}
        </div>
        
        <div className="d-flex align-items-center justify-content-center ">
          <button type="submit" class="btn  btn-primary px-5 mt-3">
            Submit
          </button>
        </div>
       
      </form>
      </div>

    </div>
    </div>
    
  )
}

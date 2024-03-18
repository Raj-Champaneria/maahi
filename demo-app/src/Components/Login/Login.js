import React from 'react'
import '../Login/Login.css'
import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form"
import * as yup from 'yup';


export const Login = () => {
  const navigate = useNavigate();
const schema =  yup.object().shape({
  email: yup
  .string()
  .email("Invalid email address")
  .required("Email is required"),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
})
const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm({
  resolver: yupResolver(schema),
});
const submitData = (data) => {
  console.log(data);
  reset()
  navigate('/home');
};

  

  
  return (
    <div className='d-flex align-items-center justify-content-center form-wrapper '>

<form  className='p-5 form ' onSubmit={handleSubmit(submitData)}>
  <h5 className='text-center mb-4 '>LOGIN</h5> 
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email </label>
    <input type="email" class="form-control" id="exampleInputEmail1" {...register("email")}/>
    {errors.email && (
            <div className="mt-1 text-danger">{errors.email.message}</div>
          )}
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" {...register("password")}/>
    {errors.password && (
            <div className="mt-1 text-danger">{errors.password.message}</div>
          )}
  </div>
  <div className='d-flex align-items-center justify-content-center '>
  <button type="submit" class="btn  btn-secondary px-5 mt-3">Login</button>
  </div>
  <div className='mt-3'>
  <Link to="/registration" className=' text-secondary text-decoration-none'>Register</Link>
  </div>
  
</form>
      
    </div>
  )
}

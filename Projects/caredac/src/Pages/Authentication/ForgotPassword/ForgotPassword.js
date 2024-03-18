import React from 'react'
import { Link } from 'react-router-dom';
import './ForgotPassword.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from "@mui/material"

export const ForgotPassword = () => {
    const schema = yup.object().shape({
        email: yup.string().email('Invalid email address').required('Email is required'),
        
      });
      const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });
    
      const onSubmit = (data) => {
        console.log(data);
      };
  return (
    <>
    
        <div>
            <div className=''>
            <h1 className='form-title'>Forgot your password?</h1>
            <p className='mb-0 form-description'>Get a secure one-time link to log in </p>
            <p className='form-description'>without needing to enter a password.</p>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} style={{width:"450px"}}>
                <div>
            <label htmlFor="email" className='login-form-label'>Email</label>
            <input type="email" id="email" placeholder='Enter email' className='form-control mt-1' style={{border:'1px solid #475467',borderRadius:'12px'}} {...register('email')} />
            {errors.email && <p className='text-danger'>{errors.email.message}</p>}
          </div>
          <div className='mt-4'>
          <Button variant="contained" type="submit" fullWidth sx={{borderRadius:'40px' , backgroundColor:'#024FAA' ,fontSize:'16px' ,textTransform:"none"}}>
            <Link to='/otp-verification' className='text-decoration-none text-light'>Submit</Link>
          
          </Button>
          </div>
         <div className='text-center forgot-password-color mt-3 ' >
        <Link to='/' className='text-decoration-none'> Back to Login </Link>
         </div>
                </form>
            </div>
            
        </div>

    
    </>
    
  )
}

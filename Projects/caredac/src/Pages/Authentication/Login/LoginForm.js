import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from "@mui/material"
import { Link } from 'react-router-dom';

export const LoginForm = () => {
    const schema = yup.object().shape({
        email: yup.string().email('Invalid email address').required('Email is required'),
        password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),
      });
      const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });
    
      const onSubmit = (data) => {
        console.log(data);
      };
    
      return (
        <>
        <form onSubmit={handleSubmit(onSubmit)} style={{width:"450px"}}>
          <div>
            <label htmlFor="email" className='login-form-label'>Email</label>
            <input type="email" id="email" placeholder='Enter email' className='form-control' style={{border:'1px solid #475467',borderRadius:'12px'}} {...register('email')} />
            {errors.email && <p className='text-danger'>{errors.email.message}</p>}
          </div>
          <div className='mt-2'>
            <label htmlFor="password" className='login-form-label'>Password</label>
            <input type="text" id="password" placeholder='Enter password' className='form-control' style={{border:'1px solid #475467',borderRadius:'12px'}} {...register('password')} />
            {errors.password && <p className='text-danger' style={{maxWidth:"450px"}}>{errors.password.message}</p>}
          </div>
          <div className='d-flex align-items-center justify-content-center mt-2 mb-3'>
            <Link to='forgot-password' className='login-forgot-password text-primary text-decoration-none'>Forgot Password?</Link>
          </div>
          <Button variant="contained" type="submit" fullWidth sx={{borderRadius:'40px' , backgroundColor:'#024FAA' ,fontSize:'16px' ,textTransform:"none"}}>
          Log In
          </Button>
        </form>
        </>
        
      );
}

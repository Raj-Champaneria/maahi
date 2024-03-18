import React from 'react'
import { Button } from "@mui/material"
import '../OTPverification/OTPverification.css'
import { Link } from 'react-router-dom'

export const OTPverification = () => {
  return (
    <div>
      <div>
      <h1 className='form-title'>OTP Verification </h1>
                <div className='form-description'>Enter the OTP sent to your email here </div>
      </div>
      <form >
        
        <div className='mt-2'>
          <div>
          <label className='mb-2'>OTP code</label>
          </div>
          
        <input type="text" className='otp-input text-center' /> 
        <input type="text" className='otp-input text-center ms-2' />
        <input type="text" className='otp-input text-center ms-2' />
        <input type="text" className='otp-input text-center ms-2' />
        </div>
        <div className='mt-4'>
        <Button variant="contained" type="submit" fullWidth sx={{borderRadius:'40px' , backgroundColor:'#024FAA' ,fontSize:'16px' ,textTransform:"none", paddingY:'15px'}}>
          <Link to='/reset-password' className='text-decoration-none text-light'>Verify</Link>
          </Button>
        </div>
        <div className='mt-4 d-flex align-items-center justify-content-center'>
          <p>Didn't receive OTP?<span className='ms-1 text-primary'>Resend</span></p>
        </div>
      </form>
    </div>
  )
}

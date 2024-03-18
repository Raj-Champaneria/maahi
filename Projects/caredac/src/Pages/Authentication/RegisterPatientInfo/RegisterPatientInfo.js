import React from 'react'
import { Button } from "@mui/material";


export const RegisterPatientInfo = () => {
  return (
    <>
     <div>
     <h1 className='form-title'>Info</h1>
                <div className='form-description'>Enter patient details</div>
                <div className='mt-4'>
                    <form style={{width:"450px"}}>
                    <div>
            <label htmlFor="email" className='login-form-label'>Age</label>
            <input type="email" id="email" placeholder='Enter email' className='form-control mt-2' style={{border:'1px solid #475467',borderRadius:'12px'}}  />
            {/* {errors.email && <p className='text-danger'>{errors.email.message}</p>} */}
          </div>
          <div className='mt-2'>
            <label htmlFor="password" className='login-form-label'>Postcode</label>
            <input type="text" id="password" placeholder='Enter password' className='form-control mt-2' style={{border:'1px solid #475467',borderRadius:'12px'}}  />
            {/* {errors.password && <p className='text-danger' style={{maxWidth:"450px"}}>{errors.password.message}</p>} */}
          </div>

          <div className="mt-3">
          <div>Need help to</div>
          <div className="mt-1">
            <div className="">
              <input
                type="radio"
                id="male"
                className="form-check-input"
                value="Find a Provider"
                
              />
              <label htmlFor="male" className="login-form-label ms-2">
              Find a provider
              </label>
            </div>
            <div className="mt-1">
              <input
                type="radio"
                id="female"
                className="form-check-input"
                value="Be ready for a plan"
               
              />
              <label htmlFor="female" className="login-form-label ms-2">
              Be ready for a plan
              </label>
            </div>
            <div className="mt-1">
              <input
                type="radio"
                id="non-binary"
                className="form-check-input"
                value="Apply for NDIS"
               
              />
              <label htmlFor="non-binary" className="login-form-label ms-2">
              Apply for NDIS"
              </label>
            </div>
          </div>
          {/* {errors.genderOption && (
            <p className="text-danger" style={{ maxWidth: "450px" }}>
              {errors.genderOption.message}
            </p>
          )} */}
        </div>
        <div className="mt-4">
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
            Next
          </Button>
        </div>
                    </form>
                </div>
</div>
    </>
   
  )
}

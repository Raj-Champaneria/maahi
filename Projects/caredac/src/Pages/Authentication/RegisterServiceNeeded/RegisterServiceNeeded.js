import React from 'react'
import { Button } from "@mui/material"

export const RegisterServiceNeeded = () => {
  return (
    <>
     <div>
     <h1 className='form-title'>Service I need</h1>
                <div className='form-description'>Enter patient details</div>
                <div className='mt-4'>
                    <form style={{width:"450px"}}>
                 

                    <div className="mt-2">
          <input
            type="checkbox"
            id=""
            placeholder="confirm"
            className="form-check-input"
            
          />
          <label htmlFor="" className="login-form-label ms-2">
          Personals care
          </label>
          
        </div>
        <div className="mt-2">
          <input
            type="checkbox"
            id=""
            placeholder="confirm"
            className="form-check-input"
            
          />
          <label htmlFor="" className="login-form-label ms-2">
          Domestic Assistance
          </label>
          
        </div>

        <div className="mt-2">
          <input
            type="checkbox"
            id=""
            placeholder="confirm"
            className="form-check-input"
            
          />
          <label htmlFor="" className="login-form-label ms-2">
          Social Support & Community Participation
          </label>
          
        </div>

        <div className="mt-2">
          <input
            type="checkbox"
            id=""
            placeholder="confirm"
            className="form-check-input"
            
          />
          <label htmlFor="" className="login-form-label ms-2">
          Domestic Assistance
          </label>
          
        </div>
        <div className="mt-2">
          <input
            type="checkbox"
            id=""
            placeholder="confirm"
            className="form-check-input"
            
          />
          <label htmlFor="" className="login-form-label ms-2">
          Specialist Care
          </label>
          
        </div>
        <div className="mt-2">
          <input
            type="checkbox"
            id=""
            placeholder="confirm"
            className="form-check-input"
            
          />
          <label htmlFor="" className="login-form-label ms-2">
          Out and About Transport
          </label>
          
        </div>
        <div className="mt-2">
          <input
            type="checkbox"
            id=""
            placeholder="confirm"
            className="form-check-input"
            
          />
          <label htmlFor="" className="login-form-label ms-2">
          Relief Respite Care
          </label>
          
        </div>
        <div className="mt-2">
          <input
            type="checkbox"
            id=""
            placeholder="confirm"
            className="form-check-input"
            
          />
          <label htmlFor="" className="login-form-label ms-2">
          Coaching & Counselling
          </label>
          
        </div>
        <div className="mt-2">
          <input
            type="checkbox"
            id=""
            placeholder="confirm"
            className="form-check-input"
            
          />
          <label htmlFor="" className="login-form-label ms-2">
          Disability Products
          </label>
          
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

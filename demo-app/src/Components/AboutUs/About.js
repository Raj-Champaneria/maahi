import React from 'react'
import '../AboutUs/About.css'
import { Navbar } from '../Navbar/Navbar'

export const About = () => {
  return (
    <div>
       <Navbar/>
 <div className='about-us-container'>
      
      <div className='d-flex align-items-center justify-content-center flex-column p-5'>
        <div className='about-container'>
        <h3 className='text-center'>About Us</h3>
        <img className='flower-img mt-3' src='/Assests/Images/flower-about-us.jpg'/>
        </div>
        
        <p className='text-center mt-4'>We are committed to offering only the finest and most beautiful floral arrangements and gifts, backed by service that is friendly, helpful and prompt. Our professional staff are dedicated to making your experience a pleasant one because all of our customers are important to us.  We always go the extra mile to make your floral gift perfect.

Our florists have original, creative and fun ideas about how to make any gift occasion something special for both you and the recipient, whoever they may be and for whatever purpose your gift is for. We also offer a wedding bouquet and wedding function flowers service guaranteed to please.

Our store allow local and international visitors to order flowers online Sydney Australia.  We are also a member of Interflora, worldwide.</p>
      </div>
    </div>
    </div>
   
  )
}

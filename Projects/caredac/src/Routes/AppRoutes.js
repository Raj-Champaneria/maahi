import React from 'react'
import {
    Route,
    Routes
  } from 'react-router-dom'
import { Home } from '../Pages/Home/Home'



export const AppRoutes = () => {
  return (
    <Routes>
       <Route  path="/home" element={<Home/>} />
        
       
      </Routes>
      
  )
}

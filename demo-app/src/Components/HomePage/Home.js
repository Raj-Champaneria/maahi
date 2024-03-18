import './Home.css'
import React from 'react'
import { Navbar } from '../Navbar/Navbar'

export const Home = () => {
  return (
    <div className=''>
      <Navbar/>
        <div className='home-page-container'>
          <div className='content'>
          <h1 className='title text-center'>Flower Shop</h1>
          <p className='mt-4 description text-center'>Flowers carry importance in each nook and corner of the world. They also come in use for making medicines. Similarly, we also make difference in fragrance perfumes from the flowers. Further, the butterflies, birds and bees take the flowers as food.</p>
          </div>
        </div>
    </div>
  )
}


import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div className='d-flex align-items-center'>
          <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link text-dark" to='/home'>
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-dark" to='/about'>
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-dark" to='/contact'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=''>
          <Link to="/">LogOut</Link>
        </div>
          </div>
       
      </nav>
    </div>
  )
}

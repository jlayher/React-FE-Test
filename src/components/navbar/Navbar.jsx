import { logDOM } from '@testing-library/react';
import React from 'react';
//icons from react icons
import {RiMenu3Line, RiCloseLine  } from 'react-icons/ri';
import './navbar.css';



// BEM -> Block Element Modifier

export default function Navbar() {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          {/* <img src={logo} alt="logo" /> */}
          </div>
      </div>
    </div>
  )
}
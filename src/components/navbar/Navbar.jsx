//import { logDOM } from '@testing-library/react';

import React, { useState }  from 'react';
//icons from react icons
import {RiMenu3Line, RiCloseLine  } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';


// BEM -> Block Element Modifier (what was this comment in reference to?)


// syntax?
const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>  
  <p><a href="#wgpt3">What is GPT3?</a></p>  
  <p><a href="#possibility">Open AI</a></p>  
  <p><a href="#features">Case Studies</a></p>  
  <p><a href="#blog">Library</a></p>  
  </>
)

export default function Navbar() {

  // toggleMenu is a var holding the false value to begin with.
  // setToggleMenu is a function that allows us to change the variable's value
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    // navbar container
    <div className='gpt3__navbar'>
      {/* left side. Contains Logo and Menu items */}
      <div className='gpt3__navbar-links'>
        {/* image container */}
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        {/* Container for menu items */}
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>


      {/* right side. Sign In and Sign Up button*/}
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>


      {/* menu icon */}
      <div className="gpt3__navbar-menu">
        {/* toggle whether menu toggle displays as sandwhich or X icon */}
        {toggleMenu
          /* if toggleMenu is true, display close line "X".  When Clicked, switch toggleMenu to false, and the menu line executes */
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {/* if toggleMenu = true, render the following dropdown menu*/}
        {toggleMenu && (
          /* container that appears like a dropdown from the sandwich */
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type="button">Sign up</button>
                </div>
            </div>
          </div>
        )}
      </div>
      {/* end menu icon */}


    </div>
  )
}
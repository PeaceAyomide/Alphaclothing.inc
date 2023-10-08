import React, { useState } from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai';
import {GiPriceTag} from 'react-icons/gi';
import {ImCompass2} from 'react-icons/im';
import { BiSolidTShirt } from 'react-icons/bi';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import ChangeTheme from './ChangeTheme/ChangeTheme';

const Navbar = () => {
   
   
  return (
      <header className='header' id='header'>
      <nav className='nav container'>
        <a href="#" className='nav__logo'>
          Alpha.
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <AiOutlineHome/>
                <span>Home</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#new" className="nav__link">
                 <GiPriceTag/>
                <span>New</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#collection" className="nav__link">
                <ImCompass2/>
                <span>Collection</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#products" className="nav__link">
                <BiSolidTShirt/>
                <span>Products</span>
              </a>
            </li>
          
          </ul>
        </div>
<ChangeTheme/>
      </nav>
      </header>
    );
  };
  
  export default Navbar;
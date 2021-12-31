import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';  

import logo from '../../assets/logo3.png';
import './navbar.css'; 

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#services">Services</a></p>
  <p><a href="#about">About</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className="navbar_links">
        <div className="navbar_links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar_links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar_sign">
        <button>Contact us</button>
      </div>
      <div className="navbar_menu">
        {toggleMenu
          ? <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="navbar_menu_container scale_up_center">
            <div className="navbar_menu_container_links">
               <Menu />
               <div className="navbar_menu_container_links_sign">
                <button type='button'>Contact us</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;

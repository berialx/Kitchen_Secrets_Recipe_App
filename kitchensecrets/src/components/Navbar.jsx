import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css"
import Logo from "../Assets/BackgroundImages/Logo.PNG";


  const Navbar = () => {
    return (
      <div className='navbar'>
        <div><img className="logo" src={ Logo } alt="logo"></img></div>
        <div className='title'><h3>KITCHEN SECRETS</h3></div>
        <div>
          <nav>
            <ul className='nav-links'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="../Recipes">Recipes</Link></li>
              <li><Link to="/About">About Us</Link></li>
              <li><Link to="/Contact">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }

export default Navbar;
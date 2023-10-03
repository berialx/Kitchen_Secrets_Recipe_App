import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css";
import { Component } from 'react';
import Logo from "../Assets/BackgroundImages/Logo.PNG";


  class Navbar extends Component {
    state={ clicked: false };
    handleClick = () =>{
      this.setState({clicked: !this.state.clicked})
    }
    render() {
    return (
      <div className='navbar'>
        <div><img className="logo" src={ Logo } alt="logo"></img></div>
        <div>
          <nav>
            <ul id="nav-links" className={this.state.clicked ? "#nav-links active" : "#nav-links"}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="../Recipes">Recipes</Link></li>
              <li><Link to="/About">About Us</Link></li>
              <li><Link to="/Contact">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
        <div id="mobile" onClick={this.handleClick}>
              <i id="mobile" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    )
  }
  }
export default Navbar;
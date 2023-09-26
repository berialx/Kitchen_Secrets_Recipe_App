import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import "../Styles/Footer.css"

    const Footer = () => {
        return (
            <div className='footer'>
                <div className='upper-footer'>
                    <div className='social-media'>
                        <FaFacebookF />
                        <BsYoutube />
                        <BsTwitter />
                    </div>
                    <div className="contact-info">
                        <p>Tel - +251-111-11-11</p>
                        <p>Email - Kitchensecrets@recipe.com</p>
                        <p>Website - www.kitchensecrets.com</p>
                    </div>
                </div>
                <div className='lower-footer'>
                    <p>&copy; 2023 KitchenSecrets by Bereket Abebe</p>
                </div>
            </div>
        );
    };

export default Footer;
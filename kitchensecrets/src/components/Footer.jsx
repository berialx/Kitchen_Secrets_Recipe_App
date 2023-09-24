import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import "../Styles/Footer.css"

    const Footer = () => {
        return (
            <div className='footer'>
                <div className='upper-footer'>
                    <div>
                        <FaFacebookF />
                        <BsYoutube />
                        <BsTwitter />
                    </div>
                    <div>
                        <span>Tel - +251-111-11-11</span>
                        <span>Email - Kitchensecrets@recipe.com</span>
                        <span>Website - www.kitchensecrets.com</span>
                    </div>
                </div>
                <div className='lower-footer'>
                    <p>&copy; 2023 KitchenSecrets by Bereket Abebe</p>
                </div>
            </div>
        );
    };

export default Footer;
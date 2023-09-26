import React from 'react';
import "./Styles/Home.css";
import Homepage from "./Assets/BackgroundImages/Homepage.jpg";

const Home = () => {
  return (
    <div className='full-home'>
      <div className="welcome-note">
        <h4>A platform for any recipes.</h4>
        <h2>Different types of tastes from all over the world!!</h2>
        <p>"Kitchen Secrets is a web application designed to offer users a diverse selction of food recipes customized to their preferences. The web app provides a user-friendly search feature that allows users to explore various categories of dishes easily. Each recipe is accompanied by a mouthwatering picture, and users can access detailed instructions for preparing their favorite meals.</p>
      </div>
      <div><img className="home-pic" src={ Homepage } alt="Recipe picture"></img></div>
    </div>
  );
};

export default Home;
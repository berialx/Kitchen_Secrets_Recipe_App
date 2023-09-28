import React from 'react'
import { Link } from 'react-router-dom';
import "../Styles/About.css"

const About = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>Welcome to our recipe web app! We are passionate about cooking and sharing delicious recipes with you.</p>
      <p>Our mission is to make cooking easy, fun, and accessible to everyone. Whether you're a seasoned chef or a beginner in the kitchen, you'll find a wide range of recipes to inspire your culinary adventures.</p>
      <p>Feel free to explore our collection of recipes, create your own recipe book, and connect with a community of food enthusiasts.</p>
      <p>If you have any questions or feedback, don't hesitate to <a href="/Contact">contact us</a>. Happy cooking!</p>
    </div>
  )
}

export default About;
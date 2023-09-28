import React from 'react'
import "../Styles/Contact.css"

const Contact = () => {
  return (
    <div className='contact-us-container'>
      <div><h1>Your message is important to us!</h1></div>
      <div>
        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="apikey" value="912bbd8e-862b-44a6-a1da-777064706a0f" />
          <label for="first-name">Enter Your Name: <input type="text" name="name" placeholder="Insert your name here" required /></label>
          <label for="email">Enter Your Email: <input type="email" name="email" placeholder="Insert your email here" required /></label>
          <label for="message">Enter Your Message: <textarea name="message" placeholder="Insert your message here" required></textarea></label>
          <div class="h-captcha" data-captcha="true"></div>
          <button type="submit">Submit Form</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
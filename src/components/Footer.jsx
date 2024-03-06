import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/FooterStyles.css"

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-links'>
          <div className='footer-logo'>
          <img src="images\logo.webp" alt="logo" />
        <p>It all starts with you</p>
        </div>
          </div>
          <div className='footer-main'>
            <ul>
            <li className='l1'>
              <Link to="/">Home</Link>
            </li>
            <li className='l1'>
              <Link to="/news">News</Link>
            </li>
            <li className='l1'>
              <Link to="/entertainment">Entertainment</Link>
            </li>
            <li className='l1'>
              <Link to="/influencer">Influencer</Link>
            </li>
            <li className='l1'>
              <Link to="/whatshot">What's Hot</Link>
            </li>
            <li className='l1'>
              <Link to="/fest">Fest</Link>
            </li>
          </ul>
            <div className="second">
              <p>CU Fest</p>
            </div>
            <div className="third">
              <p className='p3'>OFFICES</p>
              <span>
              B - 26/27, Ground Floor,<br></br>
              Sector 1, Noida,<br></br>
              201301.
              </span>
            </div>
            <div className="fourth">
              <p className='p3'> CONTACT US</p>  
              <form className='fm'>
            <label htmlFor='name'></label>
            <input type='text' id='name' name='name' placeholder='Name' />
            <label htmlFor='email'></label>
            <input type='email' id='email' name='email'  placeholder='Email'/>
            <input type='subject' id='subject' name='subject'  placeholder='Subject'/>
           
            <label htmlFor='message'></label>
            <textarea id='message' name='message' placeholder='Message'></textarea>
            <button type='submit'>Submit</button>
          </form>
            </div>
          </div>
          <div className='l12'></div>

<div className='cr'>
  <div className='n1'>
  All Copyright and Reserve © Creators United
  </div>
  <div className='n1'>
       <div>Cookie Policy & Privacy Policy</div>
       <div>Image User Policy</div>
       <div>Terms of Service</div>
  </div>
</div>
        </div>
     
    </footer>
  )
}

export default Footer

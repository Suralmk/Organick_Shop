import React from 'react'
import './Footer.css'
import { Logo, subscribe } from '../../assets/images'
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='footer_wrapper'>
        <div className='footer_subscription'>
          <img src={subscribe} alt='' />
          <h2>Subscribe to our Newsletter</h2>
          <div className='footer_subscription-form'>
            <form>
              <input type='email' placeholder='email' name='email' />
              <button className='button-one'>Subscribe</button>
            </form>
          </div>
        </div>
        <div className='footer_links'>
          <div className='footer-contact'>
            <h5>Contact Us</h5>
            <ul>
              <li>
                <h6>Email</h6>
                <p className='text'>needhelp@Organia.com</p>
              </li>
              <li>
                <h6>Phone</h6>
                <p className='text'>+251914719859</p>
              </li>
              <li>
                <h6>Adress</h6>
                <p className='text'>Aduss Ababa, Bole</p>
              </li>
            </ul>
          </div>
          <div className='space-line'></div>
          <div className='footer-organick'>
            <div className='footer-organick-logo'>
              <div className='organick-logo-image'>
                <img src={Logo} alt='' />
              </div>
              <h4>Organick</h4>
            </div>
            <p className='text'>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing
            </p>
            <div className='footer-social-links'>
              <ul>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  {' '}
                  <FaFacebook />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  {' '}
                  <FaPinterest />
                </li>
              </ul>
            </div>
          </div>
          <div className='space-line'></div>
          <div className='footer-pages'>
          <h5>Contact Us</h5>
            <ul>
              <li>
                <h6>Email</h6>
                <p className='text'>needhelp@Organia.com</p>
              </li>
              <li>
                <h6>Phone</h6>
                <p className='text'>+251914719859</p>
              </li>
              <li>
                <h6>Adress</h6>
                <p className='text'>Aduss Ababa, Bole</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

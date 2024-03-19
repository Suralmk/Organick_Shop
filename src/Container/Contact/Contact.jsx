import React from 'react'
import { sliced, veg12, veg19, vegs1, vegs7 } from '../../assets/images'
import { motion } from 'framer-motion'
import { quality, organic } from '../../assets/icons'
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa'

import './contact.css'
const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='blogpage-hero'>
        <img src={vegs1} alt='' />
        <div className='blogpage-hero-content'>
          <h2
            style={{
              width: 'max-content',
              color: 'white'
            }}
          >
            About Us
          </h2>
        </div>
      </div>
      {/*Contact informatiom */}
      <div className='contact-wrapper'>
        <div className='contact-info'>
          <img src={sliced} alt='' />
          <div className='contact-detail'>
            <motion.p
              className='curly-text'
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.1 }}
            >
              About Us
            </motion.p>
            <motion.h2
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              We'd love to talk about how we can work together.
            </motion.h2>
            <motion.p
              className='text'
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry s standard dummy text ever since
              the 1500s, when an unknown printer took a galley. Lorem had ceased
              to been the industry s standard dummy text ever
            </motion.p>
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
        </div>
        {/*contact farm */}
        <div className='contact-farm'>
          <div className='contact-farm-image'>
            <img src={veg19} alt='' />
          </div>
          <div className='farm-detail'>
            <p className='curly-text'>Locations</p>
            <h2>Our Farm</h2>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              deserunt dicta? Aspernatur doloremque eligendi ex, dicta corrupti,
              quis nemo quae voluptates aliquam, sint consectetur quaerat
              temporibus quo esse magnam quibusdam!
            </p>
          </div>
        </div>
        {/*contact f0rm */}
        <div className='contact-form'>
          <div style={{width:"100%"}}>
          <form action=''>
            <div className='input-field-flex'>
              <div className='input-field'>
                <label htmlFor='name'>Full Name</label>
                <input type='text' placeholder='Your full name' />
              </div>
              <div className='input-field'>
                <label htmlFor='email'>Your Email</label>
                <input type='email' placeholder='Your email' />
              </div>
            </div>
            <div className='input-field-flex'>
              <div className='input-field'>
                <label htmlFor='company'>Company</label>
                <input type='text' placeholder='your company name' />
              </div>
              <div className='input-field'>
                <label htmlFor='email'>Subject</label>
                <input type='text' placeholder='how can we help' />
              </div>
            </div>
            <div className='input-field'>
              <label htmlFor='message'>Message</label>
              <textarea
                placeholder='hello there i would like to talk about ...'
                name='message'
                id='message'
                cols='30'
                rows='10'
              ></textarea>
            </div>
            <button className='button-four'>Send Message</button>
          </form>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Contact

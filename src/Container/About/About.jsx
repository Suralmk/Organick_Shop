import React from 'react'
import { vegs4, fruits, vegs9, chooseus } from '../../assets/images'
import './About.css'
import { quality, organic } from '../../assets/icons'
import { motion } from 'framer-motion'
import { chooseReasons, teams } from '../../Constants/data'
import Reasons from '../../Components/Reasons/Reasons'
import Team from '../../Components/Team/Team'
const About = () => {
  return (
    <div className='about-container'>
      <div className='blogpage-hero'>
        <img src={vegs4} alt='' />
        <div className='blogpage-hero-content'>
          <h2
            style={{
              width: 'max-content'
            }}
          >
            About Us
          </h2>
        </div>
      </div>
      <div className='about-wrapper'>
        {/*About us Section*/}
        <div className='about-aboutus_container'>
          <div className='about-aboutus_wrapper'>
            <div className='aboutus-image'>
              <img src={vegs9} alt='' />
            </div>
            <div className='aboutus-description'>
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
                We Believe in Working Accredited Farmers
              </motion.h2>
              <motion.p
                className='text'
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry s standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </motion.p>
              <motion.p
                className='text'
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry s standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </motion.p>
              <div className='aboutus-services'>
                <motion.div
                  className='aboutus-service'
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                >
                  <div className='about-us-icon'>
                    <img src={organic} alt='' />
                  </div>
                  <div className='service_descriotion'>
                    <h5>Organic Foods Only</h5>
                  </div>
                </motion.div>

                <motion.div
                  className='aboutus-service'
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.9 }}
                >
                  <div className='about-us-icon'>
                    <img src={quality} alt='' />
                  </div>
                  <div className='service_descriotion'>
                    <h5>Quality Standards</h5>
                  </div>
                </motion.div>
              </div>
              <motion.button
                className='button-one'
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1.2 }}
              >
                Shop Now
              </motion.button>
            </div>
          </div>
        </div>

        {/*Why Choose Us section */}
        <div className='about-chooseus_container'>
          <div className='about-chooseus_wrapper'>
            <div className='chooseus-description'>
              <motion.p
                className='curly-text'
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.1 }}
              >
                Why Choose us?
              </motion.p>
              <motion.h2
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                We Believe in Working Accredited Farmers
              </motion.h2>
              <motion.p
                className='text'
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry s standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </motion.p>
              <div className='res-container'>
                <h6 className='res'>100% Natural Product</h6>
                <p className='text'>
                  Lorem ipsum dolor, sit ame adipisicingt consectetur a adipisicing dipisicing eli{' '}
                </p>
                <h6 className='res'>Increases Resistance</h6>
                <p className='text'>
                  Lorem ipsum dolor, sit amet cons adipisicing sit amet  ectetur adipisicing e
                  adipisicing li{' '}
                </p>
              </div>
            </div>
            <div className='chooseus-image'>
              <img src={chooseus} alt='' />
            </div>
          </div>
          <div className='chooseus-reasons'>
            {chooseReasons.map((reason, key) => (
              <Reasons
                reason={reason.reason}
                description={reason.description}
                key={key}
              />
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className='about-team_container'>
          <div className='about-team_wrapper'>
            <div className='about-team_header'>
              <p className='curly-text'>Our Team</p>
              <h2>Our Organic Experts</h2>
              <p className='text'>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley
              </p>
            </div>
            <div className='about-team_members'>
              {teams.map((team, key) => (
                <Team team={team} key={key} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

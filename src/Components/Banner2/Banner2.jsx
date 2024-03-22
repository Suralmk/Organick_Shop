import React from 'react'
import './banner2.css'
import { motion } from 'framer-motion'
const Banner2 = ({ image, content }) => {
  return (
    <motion.div
      className='banner2-container'
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.2 }}
    >
      <img src={image} alt='' />
      <p className='button-three'>{content}</p>
    </motion.div>
  )
}

export default Banner2

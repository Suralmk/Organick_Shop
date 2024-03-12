import React from 'react'
import { vegs4 } from '../../assets/images'
import './singleproject.css'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
const SingleProject = () => {
  return (
    <motion.div
      className='singleproject-container'
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.2 }}
    >
      <img src={vegs4} alt='' />
      <div className='singleproject-detail'>
        <h6>Grren Tasy Lemon</h6>
        <p className='curly-text'>Fruit</p>
      </div>
      <div className='project-review'>
        <Link to='/project-detail' className='review-link'>
          <FaChevronRight size={18} color='white' />
        </Link>
      </div>
    </motion.div>
  )
}

export default SingleProject

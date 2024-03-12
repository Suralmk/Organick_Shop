import React from 'react'
import { vegs4 } from '../../assets/images'
import './singleproject.css'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const SingleProject = () => {
  return (
    <div className='singleproject-container'>
      <img src={vegs4} alt='' />
      <div className='singleproject-detail'>
        <h6>Grren Tasy Lemon</h6>
        <p className='curly-text'>Fruit</p>
      </div>
      <div className='project-review'>
        <Link to="/project-detail" className='review-link'>
          <FaChevronRight size={18} color='white' />
        </Link>
      </div>
    </div>
  )
}

export default SingleProject

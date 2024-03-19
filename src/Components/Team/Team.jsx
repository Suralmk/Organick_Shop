import React from 'react'
import { man2 } from '../../assets/images'
import './Team.css'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
const Team = ({ team }) => {
  return (
    <div className='team-container'>
      <img src={team.image} alt='' />

      <div className='team-detail'>
        <h5>{team.name}</h5>
        <div className='team-role-link'>
          <p className='curly-text'>{team.role}</p>
          <div className='team-link'>
            <FaInstagram size={25} />
            <FaFacebook size={25} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team

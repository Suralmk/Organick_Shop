import React from 'react'
import './Reasons.css'
const Reasons = ({reason, description}) => {
  return (
    <div className='reasons-container'>
      <h5>{reason}</h5>
      <p className="text">{description}</p>
    </div>
  )
}

export default Reasons

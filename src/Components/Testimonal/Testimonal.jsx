import React from 'react'
import './testimonal.css'
const Testimonal = ({ testimonal }) => {
  return (
    <div className='testimonal'>
      <div className='testimonal-image'>
        <img src={testimonal.image} alt='' />
      </div>
      <div className='testimonal-rating'>* * * * *</div>
      <p className='text'>{testimonal.saying}</p>
      <h6>{testimonal.name}</h6>
    </div>
  )
}

export default Testimonal

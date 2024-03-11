import React from 'react'
import './banner2.css'
const Banner2 = ({image, content}) => {
  return (
    <div className='banner2-container'>
      <img src={image} alt="" />
      <p className="button-three">{content}</p>
    </div>
  )
}

export default Banner2

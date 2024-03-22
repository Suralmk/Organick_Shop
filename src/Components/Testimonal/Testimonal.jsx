import React from 'react'
import './testimonal.css'
import { IoIosStar } from "react-icons/io";
const Testimonal = ({ testimonal }) => {
  return (
    <div className='testimonal'>
      <div className='testimonal-image'>
        <img src={testimonal.image} alt='' />
      </div>
      <div className='rating'>          
      <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar /></div>
      <p className='text' style={{ width : "100%"}}>{testimonal.saying}</p>
      <h6>{testimonal.name}</h6>
    </div>
  )
}

export default Testimonal

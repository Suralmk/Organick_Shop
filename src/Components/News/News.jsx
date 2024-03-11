import React from 'react'
import './news.css'
import { Link } from 'react-router-dom'
import { IoMdPerson } from 'react-icons/io'

const News = ({ neww }) => {
  return (
    <div className='news_container'>
      <img src={neww.image} alt='' />
      <p className='news-date'>{neww.date}</p>
      <div className='news-content'>
        <p className='text' style={{
          display: "flex",
          alignItems: "center"
        }}>
          {' '}
          <IoMdPerson size={25} className='news-auth-icon'/>
          {neww.author}
        </p>
        <h5>{neww.title}</h5>
        <p className='text'>{neww.sub_title}</p>
        <a className='button-two'> Read More</a>
      </div>
    </div>
  )
}

export default News

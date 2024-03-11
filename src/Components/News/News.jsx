import React from 'react'
import './news.css'
import { Link } from 'react-router-dom'
const News = ({neww}) => {
  return (
    <div className='news_container'>
            <img src={neww.image} alt="" />
            <p>{neww.date}</p>
            <div className="news-content">
                <p>{neww.author}</p>
                <h2>{neww.title}</h2>
                <p>{neww.sub_title}</p>
                <a className='button-two'> Read Moew</a>
            </div>
    </div>
  )
}

export default News

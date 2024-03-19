import React from 'react'
import './blog.css'
import News from '../../Components/News/News'
import { news } from '../../Constants/data'
import { vegs4 } from '../../assets/images'
const Blog = () => {
  return (
    <div className='blog-container'>
        <div className="blogpage-hero">
            <img src={vegs4} alt="" />
            <div className="blogpage-hero-content">
                <h2 style={{
            width: "max-content"
          }}>Recent News</h2>
            </div>
        </div>
      <div className='blog-news'>
        {news.map((neww, index) => (
          <News key={index} neww={neww} />
        ))}
      </div>
    </div>
  )
}

export default Blog

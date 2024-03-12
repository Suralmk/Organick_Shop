import React from 'react'
import './news.css'
import { Link } from 'react-router-dom'
import { IoMdPerson } from 'react-icons/io'
import { motion } from 'framer-motion'
const News = ({ neww }) => {
  return (
    <div className='news_container'>
      <motion.img
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        src={neww.image}
        alt=''
      />
      <p className='news-date'>{neww.date}</p>
      <motion.div
        className='news-content'
        initial={{ y: -70, opacity: 0, x:"-50%" }}
        whileInView={{ y:0 , opacity: 1, x:"-50%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <p
          className='text'
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {' '}
          <IoMdPerson size={25} className='news-auth-icon ' />
          {neww.author}
        </p>
        <Link to='/blog-detail'>
          <h5>{neww.title}</h5>
        </Link>
        <p className='text'>{neww.sub_title}</p>
        <a className='button-two'> Read More</a>
      </motion.div>
    </div>
  )
}

export default News

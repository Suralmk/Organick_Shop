import React from 'react'
import './blogdetail.css'
import { man1 } from '../../assets/images'
import { motion } from 'framer-motion'
const BlogDetail = () => {
  return (
    <div className='blogdetail-container'>
      <motion.div
        className='blogdetail-heading'
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <img src={man1} alt='' />
        <motion.div
          className='blogdetail-header'
          initial={{ y: 150, opacity: 0, x: '-50%' }}
          whileInView={{ y: 0, opacity: 1, x: '-50%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          <div className='date-auth'>
            <p className='text'>
              {' '}
              <span>Posted on</span> February 6 2024
            </p>
            <p>By Surafel Melaku</p>
          </div>
          <h2>Research More organic Food</h2>
          <p className='text blog-header-text'>
            Established fact that a reader will be distracted by the readable
            content of a page when looking a layout. The point of using Lorem
            Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed
          </p>
        </motion.div>
      </motion.div>
      <div className='blogdetail-wrapper'>
        <motion.p
          className='text'
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          Uniquely matrix economically sound value through cooperative
          technology. Competently parallel task fully researched data and
          enterprise process improvements. Collaboratively expedite quality
          manufactured products via client-focused results quickly communicate
          enabled technology and turnkey leadership skills. Uniquely enable
          accurate supply chains rather than friction technolog
        </motion.p>
        <motion.div
          className='blogdetail-section'
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <h2>Preferred Form of Vitamin D?</h2>
          <p className='text'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking a layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English
          </p>
          <ul>
            <li className='text'>
              Publishing packages and web pageLorem Ipsum as their default
            </li>
            <li className='text'>
              Content here, content here', making it look like readable{' '}
            </li>
            <li className='text'>
              Packages and web pageLorem Ipsum as their default
            </li>
          </ul>
        </motion.div>
        <motion.p
          className='quote'
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
          nostrum, recusandae soluta aliquam nihil deserunt id cum corrupti nisi
          vero perspiciatis maiores minus quaerat at dolorem nam. Beatae,
          reprehenderit doloremque.
        </motion.p>
        <motion.div
          className='blogdetail-section'
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <h2>Preferred Form of Vitamin D?</h2>
          <p className='text'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking a layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English
          </p>
          <ul>
            <li className='text'>
              Publishing packages and web pageLorem Ipsum as their default
            </li>
            <li className='text'>
              Content here, content here', making it look like readable{' '}
            </li>
            <li className='text'>
              Packages and web pageLorem Ipsum as their default
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default BlogDetail

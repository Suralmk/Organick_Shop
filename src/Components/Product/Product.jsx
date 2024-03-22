import React from 'react'
import { fruits } from '../../assets/images'
import { Link } from 'react-router-dom'
import './product.css'
import { motion } from 'framer-motion'
import { IoIosStar } from "react-icons/io";
const Product = ({ product }) => {
  return (
    <motion.div
      className='product-container'
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.2 }}
    >
      <p className='product-catagory'>{product.catagory}</p>
      <div className='product-image'>
        <img src={product.image} alt='' />
      </div>
      <Link to={`/shop-detail/${product.id + 1}`} state={{ "image" : product.image, "name" : product.name, "price" :product.price, "prev_price" : product.prev_price }}>
        <h5 className='profuct-name'>{product.name}</h5>
      </Link>

      <hr />
      <div className='product-bottom-section'>
        <div className='product-price-container'>
          <p className='product-prev-price'>${product.prev_price}</p>
          <p className='product-price'>${product.price}</p>
        </div>
        <div className='rating'>
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          </div>
      </div>
    </motion.div>
  )
}

export default Product

import React from 'react'
import { fruits } from '../../assets/images'
import { Link } from 'react-router-dom'
import './product.css'
const Product = ({product}) => {
  return (
    <div className='product-container'>
      <p className='product-catagory'>{product.catagory}</p>
      <div className='product-image'>
        <img src={product.image} alt='' />
      </div>
      <Link to="/shop-detail"><h5 className='profuct-name'>{product.name}</h5></Link>

      <hr />
      <div className='product-bottom-section'>
        <div className='product-price-container'>
          <p className='product-prev-price'>${product.prev_price}</p>
          <p className='product-price'>${product.price}</p>
        </div>
        <div className='product-rating'>* * * * *</div>
      </div>
    </div>
  )
}

export default Product

import React from 'react'
import { veg17 } from '../../assets/images'
import './productdetail.css'


const ProductDetail = ({product}) => {
  return (
    <div className='product-detail-container'>
      <div className='product-detail-image'>
        <img src={product.image} alt='' />
      </div>
      <div className='product-detail-description'>
        <h4>{product.name}</h4>
        <div className='product-price-container'>
          <p className='product-prev-price'>${product.prev_price}</p>
          <p className='product-price'>${product.price}</p>
        </div>
        <p className='text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facere
          asperiores ad laborum aut at, doloribus quasi porro alias? Harum
          repellendus qui quas dolorem animi necessitatibus temporibus nulla
          incidunt at?
        </p>
        <div className="product-detail-actions">
            <h6>Quantity: </h6>
            <input type="number" className='button-three' style={{ width: 120, padding: 20}}/>
            <button className='button-one'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

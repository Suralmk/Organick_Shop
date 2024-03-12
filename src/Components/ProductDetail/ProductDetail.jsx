import React from 'react'
import { veg17 } from '../../assets/images'
import './productdetail.css'
const ProductDetail = () => {
  return (
    <div className='product-detail-container'>
      <div className='product-detail-image'>
        <img src={veg17} alt='' />
      </div>
      <div className='product-detail-description'>
        <h4>Dark Red Onions</h4>
        <div className='product-price-container'>
          <p className='product-prev-price'>$12</p>
          <p className='product-price'>$10</p>
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

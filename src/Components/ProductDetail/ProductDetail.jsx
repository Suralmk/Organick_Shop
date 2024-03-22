import React, { useRef, useState } from 'react'
import { veg17 } from '../../assets/images'
import './productdetail.css'

const ProductDetail = ({ product, addToCart }) => {
  const ItemRef = useRef()
  const [itemNumber, setItemNumber] = useState()

  const addProductToCart = product => {
    if (itemNumber === 0) {
      ItemRef.current.style.borderColor = 'blue';
    } else {
      addToCart(product, itemNumber)
    }
  }
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
        <div className='product-detail-actions'>
          <h6>Quantity: </h6>
          <input
            type='number'
            className='button-three'
            ref={ItemRef}
            onChange={e => setItemNumber(e.target.value)}
            style={{ width: 120, padding: 20 }}
          />
          <button
            className='button-one'
            onClick={
              addProductToCart(product)
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

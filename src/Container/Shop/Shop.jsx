import React from 'react'
import './shop.css'
import { vegs6 } from '../../assets/images'
import Product from '../../Components/Product/Product'
import { products } from '../../Constants/data'
const Shop = () => {
  return (
    <div className='shop-container'>
      <div className="blogpage-hero">
            <img src={vegs6} alt="" />
            <div className="blogpage-hero-content">
                <h2>Shop</h2>
            </div>
        </div>
        <div className='shop-products'>
        {products.map((pro, index) => (
          <Product key={index} product={pro} />
        ))}
      </div>
    </div>
  )
}

export default Shop

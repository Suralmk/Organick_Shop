import React from 'react'
import './shopdetail.css'
import { shop } from '../../assets/images'
import ProductDetail from '../../Components/ProductDetail/ProductDetail'
import Product from '../../Components/Product/Product'
import { products } from '../../Constants/data'
const ShopDetail = () => {
  return (
    <div className='shopdetail-container'>
      <div className='blogpage-hero'>
        <img src={shop} alt='' />
        <div className='blogpage-hero-content'>
          <h2
            style={{
              color: 'white'
            }}
          >
            Shop Now
          </h2>
        </div>
      </div>
      <div className='shopdetail-wrapper'>
        <ProductDetail />
        <div className='shopdetail-additional'>
          <div className='additional-btns'>
            <button className='button-one'>Additional Discription</button>
            <button className='button-two'>Additional Info</button>
          </div>
          <p className='text'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            deserunt numquam placeat eum ex inventore sapiente earum quibusdam
            quisquam, fugiat beatae voluptates, architecto doloribus. Officiis
            ipsa temporibus deleniti voluptatem veritatis? Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Eveniet sequi voluptatem,
            fugit, quo
          </p>
        </div>
        <div className='shopdetail-related'>
          <h3>Related Products</h3>
          <div className='related-container'>
            {products.map((product, key) => {
              if (key >= 4) return null
              return <Product key={key} product={product} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopDetail

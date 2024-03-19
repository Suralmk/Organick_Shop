import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './shopdetail.css'
import { shop, vegs7, vegs5 } from '../../assets/images'
import ProductDetail from '../../Components/ProductDetail/ProductDetail'
import Product from '../../Components/Product/Product'
import { products } from '../../Constants/data'
const ShopDetail = () => {
const prod_id = useParams()
const location = useLocation()
const [product, setProduct] = useState(location.state)
console.log(location)
  return (
    <div className='shopdetail-container'>
      <div className='blogpage-hero'>
        <img src={vegs5} alt='' />
        <div className='blogpage-hero-content'>
          <h2
            style={{
              color: 'white',
              padding:0
            }}
          >
            Shop Now
          </h2>
        </div>
      </div>
      <div className='shopdetail-wrapper'>
        <ProductDetail product={product} />
        <div className='shopdetail-additional'>
          <div className='additional-btns'>
            <button className='button-one'>Additional Discription</button>
            <button className='button-two'>Additional Info</button>
          </div>
          <p className='text' style={{
            width: "100%"
          }}>
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

import React from 'react'
import './homepage.css'
import { fruits, vegs6, vegs7, girl1, farm } from '../../assets/images'
import { FiAward } from 'react-icons/fi'
import Product from '../../Components/Product/Product'
import { products, testimonals, banner2, news } from '../../Constants/data'
import { organic, quality } from '../../assets/icons'
import Testimonal from '../../Components/Testimonal/Testimonal'
import Banner2 from '../../Components/Banner2/Banner2'
import News from '../../Components/News/News'
const Homepage = () => {
  return (
    <div className='homepage-container'>
      {/*Hero section */}
      <div className='homepage-hero_container'>
        <div className='homepage-hero_container-left'>
          <p className='curly-text'>100% Natural Food</p>
          <h1>Choose the best healthier way of life</h1>
          <button className='button-two'>Explore Now</button>
        </div>
        <div className='homepage-hero_container-right'>
          <img src={fruits} alt='' />
        </div>
      </div>

      {/*Banners section */}
      <div className='homepage-banner_container'>
        <div className='homepage-banner_wrapper'>
          <div className='homepage-banner'>
            <p className='curly-text'>Natural!!</p>
            <h2>Get Garden Dresh Fruits</h2>
            <img src={vegs6} alt='' />
          </div>
          <div className='homepage-banner'>
            <p className='curly-text'>Offer!!</p>
            <h2>Get 10% off on vegtables</h2>
            <img src={vegs7} alt='' />
          </div>
        </div>
      </div>

      {/* About us section */}
      <div className='homepage-aboutus_container'>
        <div className='homepage-aboutus_wrapper'>
          <div className='homepage-aboutus_wrapper-left'>
            <img src={fruits} alt='' />
          </div>
          <div className='homepage-aboutus_wrapper-right'>
            <p className='curly-text'>About Us</p>
            <h2>We Believe in Working Accredited Farmers</h2>
            <p className='text'>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry s standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className='aboutus-services'>
              <div className='aboutus-service'>
                <div className='about-us-icon'>
                  <img src={organic} alt='' />
                </div>
                <div className='service_descriotion'>
                  <h5>Organic Foods Only</h5>
                  <p
                    className='text'
                    style={{
                      maxWidth: 350,
                      flexWrap: 'wrap'
                    }}
                  >
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </div>
              </div>

              <div className='aboutus-service'>
                <div className='about-us-icon'>
                  <img src={quality} alt='' />
                </div>
                <div className='service_descriotion'>
                  <h5>Quality Standards</h5>
                  <p
                    className='text'
                    style={{
                      maxWidth: 350,
                      flexWrap: 'wrap'
                    }}
                  >
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
            <button className='button-one'>Shop Now</button>
          </div>
        </div>
      </div>

      {/* Product section */}
      <div className='homepage-products_container'>
        <div className='homepage-products_wrapper'>
          <div className='producst_catagory-header'>
            <p className='curly-text'>Catagories</p>
            <h2>Our Products</h2>
          </div>
          <div className='homepage-products_container'>
            {products.map((product, key) => (
              <Product product={product} key={key} />
            ))}
          </div>
          <button className='button-one'>Learn More</button>
        </div>
      </div>

      {/* Testiomonal section */}
      <div className='homepage-testimonal_container'>
        <div className='homepage-testimonal-wrapper'>
          <div className='testimonals-header'>
            <p className='curly-text'>Testimonals</p>
            <h2>What our customers saying?</h2>
          </div>
          {testimonals.map((testimonal, key) => (
            <Testimonal key={key} testimonal={testimonal} />
          ))}
        </div>
      </div>

      {/* offer Section */}
      <div className='homepage-offer_container'>
        <div className='homepage-offer_wrapper'>
          <div className='offer-header'>
            <div className='offer-title'>
              <p className='curly-text'>Offer</p>
              <h2>We offer organic for you</h2>
            </div>
            <button className='button-two'>Learn More</button>
          </div>
          <div className='offer-container'>
            {products.map((product, key) => {
              if (key >= 4) return null
              return <Product key={key} product={product} />
            })}
          </div>
        </div>
      </div>

      {/* Eco Section */}
      <div className='homepage-eco_container'>
        <div className='homepage-eco_wrapper'>
          <div className='eco-image'>
            <img src={farm} alt='' />
          </div>
          <div className='eco-brief'>
            <p className='curly-text'>Eco Friendly</p>
            <h2>Econis is a Friendly Organic Store</h2>
            <div className='eco-brief_content'>
              <h5>Start With Our Company First</h5>
              <p className='text'>
                ed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis
              </p>
            </div>
            <div className='eco-brief_content'>
              <h5>Start With Our Company First</h5>
              <p className='text'>
                ed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis
              </p>
            </div>
            <div className='eco-brief_content'>
              <h5>Start With Our Company First</h5>
              <p className='text'>
                ed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second banner  Section */}
      <div className="homepage-second-banner_container">
            <div className="homepage-second-banner_wrapper">
              {
                banner2.map((banner, key) => (
                  <Banner2 key={key} image={banner.image} content ={banner.content}/>
                ))
              }
            </div>
      </div>

      {/*Home News  Section */}
      <div className="homepage-news_container">
            <div className="homepage-news_wrapper">
              {
                news.map((neww, key) => 
                {
                  if (key >= 2) return null

                  return (
                  <News key={key} neww={neww} />
                )
                })
              }
            </div>
      </div>
    </div>
  )
}

export default Homepage

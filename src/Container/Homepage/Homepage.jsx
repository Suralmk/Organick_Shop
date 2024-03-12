import React, { useEffect, useRef } from 'react'
import './homepage.css'
import { fruits, vegs6, vegs7, girl1, farm } from '../../assets/images'
import { FiAward } from 'react-icons/fi'
import Product from '../../Components/Product/Product'
import { products, testimonals, banner2, news } from '../../Constants/data'
import { organic, quality } from '../../assets/icons'
import Testimonal from '../../Components/Testimonal/Testimonal'
import Banner2 from '../../Components/Banner2/Banner2'
import News from '../../Components/News/News'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Homepage = () => {
  var scrollRef = useRef(null)
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <div className='homepage-container'>
      {/*Hero section */}
      <div className='homepage-hero_container'>
        <motion.div className='homepage-hero_container-left'>
          <motion.p
            className='curly-text'
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            100% Natural Food
          </motion.p>
          <motion.h1
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            Choose the best healthier way of life
          </motion.h1>
          <motion.button
            className='button-two'
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.9 }}
          >
            Explore Now
          </motion.button>
        </motion.div>
        <div className='homepage-hero_container-right'>
          <motion.img
            src={fruits}
            alt=''
            initial={{ x: 300 }}
            transition={{
              ease: 'linear',
              duration: 3,
              x: { duration: 1 }
            }}
            animate={{
              x: 0,
              transitionEnd: {
                opacity: 1
              }
            }}
          />
        </div>
      </div>

      {/*Banners section */}
      <div className='homepage-banner_container' ref={scrollRef}>
        <div className='homepage-banner_wrapper'>
          <motion.div
            className='homepage-banner'
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className='curly-text'>Natural!!</p>
            <h2>Get Garden Dresh Fruits</h2>
            <img src={vegs6} alt='' />
          </motion.div>
          <motion.div
            className='homepage-banner'
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <p className='curly-text'>Offer!!</p>
            <h2>Get 10% off on vegtables</h2>
            <img src={vegs7} alt='' />
          </motion.div>
        </div>
      </div>

      {/* About us section */}
      <div className='homepage-aboutus_container'>
        <div className='homepage-aboutus_wrapper'>
          <motion.div
            className='homepage-aboutus_wrapper-left'
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <img src={fruits} alt='' />
          </motion.div>
          <div className='homepage-aboutus_wrapper-right'>
            <motion.p
              className='curly-text'
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.1 }}
            >
              About Us
            </motion.p>
            <motion.h2
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              We Believe in Working Accredited Farmers
            </motion.h2>
            <motion.p
              className='text'
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry s standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </motion.p>
            <div className='aboutus-services'>
              <motion.div
                className='aboutus-service'
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.7 }}
              >
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
              </motion.div>

              <motion.div
                className='aboutus-service'
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.9 }}
              >
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
              </motion.div>
            </div>
            <motion.button
              className='button-one'
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 1.2 }}
            >
              Shop Now
            </motion.button>
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
          <motion.div className='homepage-products_container'>
            {products.map((product, key) => (
              <Product product={product} key={key} />
            ))}
          </motion.div>
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
          <div className='testimonal-slider'>
            <Slider {...settings}>
              {testimonals.map((testimonal, key) => (
                <Testimonal key={key} testimonal={testimonal} />
              ))}
            </Slider>
          </div>
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
            <motion.img
              src={farm}
              alt=''
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2 }}
            />
          </div>
          <motion.div
            className='eco-brief'
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: '-50%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
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
          </motion.div>
        </div>
      </div>

      {/* Second banner  Section */}
      <div className='homepage-second-banner_container'>
        <div className='homepage-second-banner_wrapper'>
          {banner2.map((banner, key) => (
            <Banner2 key={key} image={banner.image} content={banner.content} />
          ))}
        </div>
      </div>

      {/*Home News  Section */}
      <div className='homepage-news_container'>
        <div className='homepage-news_wrapper'>
          <div className='news-header'>
            <div className='news-title'>
              <p className='curly-text'>Offer</p>
              <h2>Discover weekly content about organic food, & more</h2>
            </div>
            <button className='button-three'>More News</button>
          </div>
          <div className='homepage-news'>
            {news.map((neww, index) => {
              if (index >= 2) return null

              return <News key={index} neww={neww} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage

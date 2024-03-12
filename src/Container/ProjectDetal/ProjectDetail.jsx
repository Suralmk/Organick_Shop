import React from 'react'
import './projectdetail.css'
import { project2, organic, farm4 } from '../../assets/images'
import { motion } from 'framer-motion'
const ProjectDetail = () => {
  return (
    <div className='projectdetail-container'>
      <motion.div
        className='blogdetail-heading'
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <img src={farm4} alt='' />
        <motion.div
          className='projectdetail-header'
          initial={{ y: 150, opacity: 0, x: '-50%' }}
          whileInView={{ y: 0, opacity: 1, x: '-50%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          <div className='projectdetail-header-base'>
            <h2>Research More organic Food</h2>
            <p
              className='text'
              style={{
                width: 600
              }}
            >
              Established fact that a reader will be distracted by the readable
              content of a page when looking a layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed
            </p>
          </div>
          <div className='projectdetail-header-detail'>
            <ul>
              <li>
                <span>
                  <h6>Date : </h6>
                </span>{' '}
                December 2, 2023
              </li>
              <li>
                <span>
                  <h6>Client : </h6>
                </span>
                Kevin Durant
              </li>
              <li>
                <span>
                  <h6>Catagory : </h6>
                </span>
                Fruits
              </li>
              <li>
                <span>
                  <h6>Service : </h6>
                </span>
                Organic Products
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      <div className='projectdetail-wrapper'>
        <motion.div
          className='projectdetail-content'
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <h4>About The Farm</h4>
          <p className='text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            nobis ipsam incidunt in ipsum alias voluptatibus repellat commodi
            quo magni quisquam esse illum eligendi eos iure ea, ipsa repudiandae
            fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quidem debitis magnam laudantium vitae ullam officia doloremque,
            adipisci iste facilis id ipsa in, odit et aspernatur tenetur
            mollitia at, ad ipsam.
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            corrupti ipsa, mollitia eos, quasi inventore a nisi ad totam,
            incidunt molestias illum velit autem quas consequatur veniam facere.
            Error, fugit.
          </p>
        </motion.div>
        <motion.img
          src={organic}
          alt=''
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        <motion.div
          className='projectdetail-content'
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <h4>How To Farm</h4>
          <p className='text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            nobis ipsam incidunt in ipsum alias voluptatibus repellat commodi
            quo magni quisquam esse illum eligendi eos iure ea, ipsa repudiandae
            fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quidem debitis magnam laudantium vitae ullam officia doloremque,
            adipisci iste facilis id ipsa in, odit et aspernatur tenetur
            mollitia at, ad ipsam.
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            corrupti ipsa, mollitia eos, quasi inventore a nisi ad totam,
            incidunt molestias illum velit autem quas consequatur veniam facere.
            Error, fugit.
          </p>
        </motion.div>
        <motion.div
          className='projectdetail-content'
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <h4>Conclusion</h4>
          <p className='text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            nobis ipsam incidunt in ipsum alias voluptatibus repellat commodi
            quo magni quisquam esse illum eligendi eos iure ea, ipsa repudiandae
            fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quidem
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            corrupti ipsa, mollitia eos, quasi inventore a nisi ad totam,
            incidunt molestias illum velit autem quas consequatur veniam facere.
            Error, fugit.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetail

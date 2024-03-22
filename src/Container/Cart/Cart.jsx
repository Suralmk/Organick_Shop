import React from 'react'
import './cart.css'
import { PiXLight } from 'react-icons/pi'
import { motion } from 'framer-motion'
import './cart.css'
import { fruits } from '../../assets/images'
const Cart = ({ showCart, closeCart }) => {
  return (
    <motion.div
      className={`cart-container ${showCart ? 'modal-open' : ''}`}
    >
      <div className='cart-wrapper'>
        <div
          to=' '
          className='close-modal'
          onClick={() => closeCart(!showCart)}
        >
          <PiXLight size={30} />
        </div>
        <h4 style={{ marginTop: 20, marginBottom: 20 }}>Cart</h4>
        <div className='items'>
          <div class='item'>
            <img src={fruits} alt="" />
            <div className="item__detail">
              <h6>Banana</h6>
              <p>banas is best for human healtiad</p>
              <h6>$15</h6>
              <PiXLight className='item__remove' size={20} />
            </div>
          </div>
        </div>
        <button className='button-one'>Checkout</button>
      </div>
    </motion.div>
  )
}

export default Cart

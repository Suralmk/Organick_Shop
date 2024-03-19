import React from 'react'
import './cart.css'
import { PiXLight, PiMagnifyingGlassLight } from 'react-icons/pi'
import './cart.css'
const Cart = ({ showCart, closeCart }) => {
  return (
    <div className={`cart-container ${showCart ? 'modal-open' : ''}`}>
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
          <div className='item'>apple</div>
        </div>
        <button className='button-one'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart

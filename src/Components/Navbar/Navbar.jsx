import React, { useRef, useState } from 'react'
import './navbar.css'
import { Logo } from '../../assets/images'
import { BiSearch, BiCart } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'
import { GrMenu, GrClose } from 'react-icons/gr'
import Cart from '../../Container/Cart/Cart'

const Navbar = () => {
  const navbarRef = useRef(null)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar-container')
    navbar.classList.toggle('sticky', this.window.scrollY > 1)
  })

  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <Link to='/'>
          <img src={Logo} alt='' />
          <p>Organick</p>
        </Link>
      </div>

      <div className='navbar-menus' ref={navbarRef}>
        <GrClose
          size={30}
          className='mobile-menu-close'
          onClick={() => {
            navbarRef.current.classList.remove('show_mobile')
          }}
        />
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about-us'>About</Link>
          </li>
          <li className='pages-link'>
            <a id='pages'>
              Pages <FaChevronDown size={15} style={{ marginLeft: 5 }} />
            </a>
            <ul className='links'>
              <li>
                <Link to='/projects'>Projects</Link>{' '}
              </li>
              <li>
                <Link to='/news'>News</Link>{' '}
              </li>
              <li>
                <Link to='/contact'>Contact</Link>{' '}
              </li>
              <li>
                <Link to='/licence'>Licence</Link>{' '}
              </li>
            </ul>
          </li>
          <li>
            <Link to='/shop'>Shop</Link>
          </li>
          <li>
            <Link to='/projects'>Project</Link>
          </li>
          <li>
            <Link to='/news'>News</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-search_cart'>
        <div className='navbar-search'>
          <input type='text' />
          <BiSearch className='search_icon' size={10} />
        </div>
        <div className='navbar-cart'>
          <a
            onClick={() => {
              setShowCart(!showCart)
            }}
          >
            {' '}
            <span>Cart</span>
            <BiCart className='cart_icon ' size={15} />
          </a>
        </div>
        <div className='navbar-mobiemenu'>
          {mobileMenu ? (
            ''
          ) : (
            <GrMenu
              size={30}
              className='mobile-menu-icon'
              onClick={() => {
                navbarRef.current.classList.add('show_mobile')
              }}
            />
          )}
        </div>
      </div>
      <Cart showCart={showCart} closeCart={setShowCart} />
    </div>
  )
}

export default Navbar

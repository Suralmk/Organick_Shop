import React from 'react'
import './navbar.css'
import { Logo } from '../../assets/images'
import { BiSearch, BiCart } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'

const Navbar = () => {
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
      <div className='navbar-menus'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li className='pages-link'>
            <a id='pages'>
              Pages <FaChevronDown size={15} style={{ marginLeft: 5 }} />
            </a>
            <ul className='links'>
              <li>Projects</li>
              <li>Services</li>
              <li>Contact</li>
              <li>News</li>
              <li>Licences</li>
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
          <BiSearch className='search_icon' size={20} />
        </div>
        <div className='navbar-cart'>
          <a href=''>
            {' '}
            <span>Cart</span>
            <BiCart className='cart_icon ' size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar

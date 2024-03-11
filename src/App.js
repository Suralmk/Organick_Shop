import './App.css'
import { Fa500Px, FaGift } from 'react-icons/fa'
import Navbar from './Components/Navbar/Navbar'
import axios from 'axios'
import { Routes, BrowserRouter as Router, Route, Link } from 'react-router-dom'
import products from './Constants/data'
import Homepage from './Container/Homepage/Homepage'
import Footer from './Components/Footer/Footer'
function App () {
  return (
    <div className=''>
      <Navbar />
      <Homepage />
      <Footer />
      
    </div>
  )
}

export default App

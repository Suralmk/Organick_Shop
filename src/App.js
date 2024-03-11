import './App.css'
import { Fa500Px, FaGift } from 'react-icons/fa'
import Navbar from './Components/Navbar/Navbar'
import axios from 'axios'
import { Routes as Router, Route } from 'react-router-dom'
import products from './Constants/data'
import Homepage from './Container/Homepage/Homepage'
import Footer from './Components/Footer/Footer'
import Blog from './Container/Blog/Blog'
function App () {
  return (
    <div className=''>
      <Navbar />
      <Router>
        <Route path='' element={<Homepage />} />
        <Route path='/news' element={<Blog />} />
      </Router>

      <Footer />
    </div>
  )
}

export default App

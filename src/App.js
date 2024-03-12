import './App.css'
import { Fa500Px, FaGift } from 'react-icons/fa'
import Navbar from './Components/Navbar/Navbar'
import axios from 'axios'
import { Routes as Router, Route } from 'react-router-dom'
import products from './Constants/data'
import Homepage from './Container/Homepage/Homepage'
import Footer from './Components/Footer/Footer'
import Blog from './Container/Blog/Blog'
import BlogDetail from './Container/BlogDetail/BlogDetail'
import Shop from './Container/Shop/Shop'
import ShopDetail from './Container/ShopDetail/ShopDetail'
import Project from './Container/Project/Project'
import ProductDetail from './Components/ProductDetail/ProductDetail'
import ProjectDetail from './Container/ProjectDetal/ProjectDetail'
function App () {
  return (
    <div className=''>
      <Navbar />
      <Router>
        <Route path='' element={<Homepage />} />
        <Route path='/news' element={<Blog />} />
        <Route path='/blog-detail' element={<BlogDetail />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop-detail' element={<ShopDetail />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/project-detail' element={<ProjectDetail />} />
      </Router>

      <Footer />
    </div>
  )
}

export default App

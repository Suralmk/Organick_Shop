import React from 'react'
import './projectdetail.css'
import { project2 } from '../../assets/images'
const ProjectDetail = () => {
  return (
    <div className='projectdetail-container'>
       <div className='blogdetail-heading'>
        <img src={project2} alt='' />
        <div className='projectdetail-header'>
          <div className="projectdetail-header-base">
          <h2>Research More organic Food</h2>
          <p
            className='text'
            style={{
              width: 630
            }}
          >
            Established fact that a reader will be distracted by the readable
            content of a page when looking a layout. The point of using Lorem
            Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed
          </p>
          </div>
          <div className="projectdetail-header-detail">
            <ul>
                <li><span><h6>Date : </h6></span> December 2, 2023</li>
                <li><span><h6>Client : </h6></span>Kevin Durant</li>
                <li><span><h6>Catagory : </h6></span>: December 2, 2024</li>
                <li><span><h6>Service : </h6></span>Organic Products</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="projectdetail-description">

      </div>
    </div>
  )
}

export default ProjectDetail

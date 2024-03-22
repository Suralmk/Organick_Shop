import React from 'react'
import './projects.css'
import { projects } from '../../assets/images'
import SingleProject from '../../Components/SingleProject/SingleProject'
import { oprojects } from '../../Constants/data'
const Project = () => {
  return (
    <div className='project-container'>
      <div className="blogpage-hero">
            <img src={projects} alt="" />
            <div className="blogpage-hero-content">
                <h2>Project</h2>
            </div>
        </div>
        <div className="project-wrapper">
          {oprojects.map((project, key) => (
               <SingleProject project={project} key={key}/>
          ))}
        </div>
    </div>
  )
}

export default Project

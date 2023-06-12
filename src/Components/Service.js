import React from 'react'
import './Service.css'
import aimlicon from '../img/aimlicon.png'
import webappicon from '../img/webappicon.png'
import mobappicon from '../img/mobileappdev.png'
function Service() {
  return (
    <div className='service component__space' id='projects'>
        <div className="projects_bg">
            <div className="experience-bg-overlay"></div>
            <div className='container'>
                <div className='heading'>
                    <h1 className='heading sweet'> My Projects</h1>
                    <p className='heading p__color'> These are my projects showcasing my 
                    skills in web development, mobile application development, machine learning 
                    and expertise in different programming languages!
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service
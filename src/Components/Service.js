import React from 'react'
import './Service.css'
import aimlicon from '../img/aimlicon.png'
import webappicon from '../img/webappicon.png'
import mobappicon from '../img/mobileappdev.png'
function Service() {
  return (
    <div className='service component__space' id='projects'>
        <div className='heading'>
            <h1 className='heading sweet'> My Projects</h1>
            <p className='heading p__color'> These are my projects showcasing my 
            skills in web development, mobile application development, machine learning 
            and expertise in different programming languages!
            </p>
        </div>
        <div className='container'>
            <div className='row'>

                <div className='col__3'>
                    <div className='service__box pointer'> 
                        <div> 
                            <img className='icon' src={aimlicon}></img>  
                        </div>
                        <div className='service__meta'> 
                            <h1 className='service__text'>
                                Machine Learning
                            </h1>
                            <p className='p service__text p__color'>
                                I have built a machine learning model by using <strong>Python</strong>, 
                                <strong> Scikit-learn</strong>, <strong>TensorFlow</strong> and 
                                <strong> NumPy </strong> which can classify bank transactions into 10 different categories.
                                Currently, I am working on adding a fradulent transaction detection feature to the model.    
                            </p>
                            <p className='fcolor'>
                                **Github link coming soon!
                            </p>
                        </div>
                    </div>
                </div>

                <div className='col__3'>
                    <div className='service__box pointer'> 
                        <div>
                            <img className='icon' src={webappicon}></img>  
                        </div>
                        <div className='service__meta'> 
                            <h1 className='service__text'>
                                Web Application
                            </h1>
                            <p className='p service__text p__color'>
                                I have built a web application called "CourseWiki" using <strong>React.js</strong> and <strong>Firebase </strong>
                                with a group of 4 Virginia Tech students as the final project
                                for our Software Engineering Capstone class.      
                            </p>
                            <div>
                            <a className='project__Button' href='https://github.com/nickyhuynh1/CourseProject'target="_blank">
                                View project on Github
                            </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col__3'>
                    <div className='service__box pointer'> 
                        <div>
                            <img className='icon' src={mobappicon}></img>  
                        </div>
                        <div className='service__meta'> 
                            <h1 className='service__text'>
                                Mobile Application
                            </h1>
                            <p className='p service__text p__color'>
                                I have built an android application called "Textbook Buddies" 
                                using <strong>Java</strong> and <strong>Firebase</strong> with a team of 4 Virginia Tech students 
                                as the final project for our Mobile Software Development class.
                                {/* We won the "Students' Choice Award" based on the class feedback!       */}
                            </p>
                            <div>
                            <a className='project__Button' href='https://github.com/abrarrhine/TextbookBuddies'rel="noreferrer" target="_blank">
                                View project on Github
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Service
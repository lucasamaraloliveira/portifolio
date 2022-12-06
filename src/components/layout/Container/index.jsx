import React from 'react'
import './Container.css'
import Avatar from '../../../assets/avatar.svg'
import Projects from './Projects' 


function Container() {
  return (
    <div className= "container" >
        <div className="container-img">
          <img src={Avatar} alt="avatar" />
          <h2>I Craft Interfaces</h2>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. 
            Exercitation veniam consequat sunt nostrud amet.</p>
          <a href="">Take me to the magic land</a>
          <Projects/>
        </div>
        
        </div>
  )
}

export default Container
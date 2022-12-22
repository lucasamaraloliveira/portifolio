import React from 'react'
import Project from '../../../../assets/projects.svg'
import Arrow from '../../../../assets/right-arrow.png'
import './Projects.css'

function Projects() {
  return (
    <div>
        <div>
            <h2 id='Project'>Projetos selecionados</h2>
            <span>2019 - present</span>
            <div className='container-projects'>
             <div>
                <h3> This is project name! Name wisely!</h3>
                <p className='p-container'>Fill your project brief here. 
                It can be the outcome of the project, 
                or some success metrics, or a cheesy tagline.</p>
                <div className='align-arrow'>
                  <div>
                    <a className='p-container' href=""> <b> Try it out</b></a>
                  </div>
                  
                </div>
              </div>
              <div>
                <img src={Project} alt="project 1" />
              </div>
              

            </div>
            <span>2019 - present</span>
            <div className='container-projects'>
             <div>
             <h3> This is project name! Name wisely!</h3>
                <p className='p-container'>Fill your project brief here. 
                It can be the outcome of the project, 
                or some success metrics, or a cheesy tagline.</p>
                <div className='align-arrow'>
                  <div >
                    <a className='p-container' href=""><b> Try it out</b></a>
                  </div>
                  
                </div>
                
              </div>
              <div>
                <img src={Project} alt="project 2" />
              </div>
              

            </div><span>2019 - present</span>
            <div className='container-projects'>
             <div>
             <h3> This is project name! Name wisely!</h3>
                <p className='p-container'>Fill your project brief here. 
                It can be the outcome of the project, 
                or some success metrics, or a cheesy tagline.</p>
                <div className='align-arrow'>
                  <div>
                    <a className='p-container' href=""><b> Try it out</b></a>
                  </div>
                </div>
              </div>
              <div>
                <img src={Project} alt="project 3" />
              </div>
              
            </div>
            </div>
    </div>
  )
}

export default Projects
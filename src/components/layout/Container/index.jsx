import React from 'react'
import './Container.css'
import Avatar from '../../../assets/avatar.svg'
import Projects from './Projects' 


function Container() {
  return (
    <div className= "container" >
        <div className="container-img">
          <img src={Avatar} alt="avatar" />
          <h2>Eu sou Desenvolvedor Frontend</h2>
          <p>Desenvolvedor front-end com 1 ano de experiência em criação de interfaces de usuário 
            para aplicativos e sites. 
            Proficiente em linguagens de programação como <b> HTML, CSS e JavaScript </b>, 
            bem como em frameworks como <b>ReactJS</b>. 
            Apaixonado por criar experiências de usuário intuitivas e 
            atraentes para os visitantes dos meus projetos. 
            Além de minhas habilidades técnicas, 
            sou uma pessoa altamente organizada e 
            capaz de trabalhar de forma eficiente em projetos de equipe. 
            estou sempre procurando maneiras de melhorar minhas habilidades e 
            ampliar meus conhecimentos na área de desenvolvimento web de software.</p>
          <Projects/>
        </div>
        
        </div>
  )
}

export default Container
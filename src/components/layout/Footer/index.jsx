import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-color'>
      <div className='social-media'>
      <h3 id='Contact'>Contact</h3> 
        <ul >
          <li><a href="https://github.com/lucasamaraloliveira" target='_blank'> Github</a></li>
          <li><a href=""> LinkedIn</a></li>
          <li><a href="https://api.whatsapp.com/send?phone=5521969630415&text=Olá, me interessei pelo seu trabalho, gostaria de conversar um pouco com você!">WhatsApp</a></li>
        </ul>
      </div>
      <footer>Desenvolvido por<b> Lucas Amaral&copy;</b></footer>
    </div>
    
    
  )
}

export default Footer
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer>
        <ul className='footer__categories'>
          
          <li>Address: 9 Waimea Street, Burwood, NSW, 2314</li>
          <li>|</li>
          <li>Phone: +61 421 872 012</li>
          <li>|</li>
          <li>Email: brianong470@gmail.com</li>
        </ul>
        <ul className='footer__categories'>
          <li><a href="http://www.linkedin.com/in/brian-ong470" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="http://github.com/brian-ong470" target="_blank" rel="noopener noreferrer">  Github  </a></li>
        </ul>
        <div className='footer__copyright'>
          <small>
            All rights belong to Brian Ong
          </small>
        </div>
      </footer>
    </div>
  )
}

export default Footer

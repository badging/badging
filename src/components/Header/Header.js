import React from 'react'
import { chaossLogo } from '../../assets/images'
import './header.scss';

const Nav = () => {
  return (
    <nav className='container-new'>
        <img src={chaossLogo} alt="logo" />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Event Badging</a></li>
          <li><a href="/projects">Project Badging</a></li>
          <li><a href="/">FAQ</a></li>
        </ul>
     </nav>
  )
}

export default Nav
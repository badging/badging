import React from 'react'
import { chaossLogo, mobileMenuIcon } from '../../assets/images'
import './header.scss';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className='container-new'>
        <img src={chaossLogo} alt="logo" className='logo'/>
        <ul>
          <li><a href="/" className={pathname == '/'? 'activeNav': ''}>Home</a></li>
          <li><a href="/">Event Badging</a></li>
          <li><a href="/projects" className={pathname == '/projects'? 'activeNav': ''}>Project Badging</a></li>
          <li><a href="/">FAQ</a></li>
        </ul>
        <img className='mobileNav' src={mobileMenuIcon} alt="logo" />
        {
          pathname && pathname !== '/' ? (
            <a href='/' className='apply-btn'>Apply for Badging</a>
          ): (
            <div className='hidden-box'></div>
          )
        }
        
     </nav>
  )
}

export default Nav
import React from 'react'
import { chaossLogo, mobileMenuIcon } from '../../assets/images'
import './header.scss';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className='container-new'>
        <img src={chaossLogo} alt="logo" className='logo'/>
        <ul>
          <li><a href="/" className={pathname == '/'? 'activeNav': ''}>Home</a></li>
          <li><a href="/event-badging">Event Badging</a></li>
          <li><a href="/about-project-badging" className={pathname == '/about-project-badging'? 'activeNav': ''}>Project Badging</a></li>
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
        
     </header>
  )
}

export default Nav

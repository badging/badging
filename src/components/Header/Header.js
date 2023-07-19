import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/global.scss';
import './header.scss';



import {
  DefaultMobileNavIcon,
  OpenMobileNavIcon,
  MobileLogo,
  badgingLogo,
  badgingLogoMobile,
} from '../../assets/images';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [navbarOpen, setNavbarOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 650 });
  return (
    
    <header>
      <nav className="container">
        <Link to="/" className="active">
          <img
            src={isMobile ? badgingLogoMobile : badgingLogo}
            className="logo"
            alt="all-in-chaoss-logo"
            // width={250}
            // srcSet={`${MobileLogo} 1200w`}
          />
        </Link>
        <ul className="web">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            AboutDEIBadging
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </ul>
        <Link className="get-started" to="/badge">
          {' '}
          Get Started
        </Link>

        <img
					onClick={() => setNavbarOpen((prev) => !prev)}
					src={navbarOpen ? OpenMobileNavIcon : DefaultMobileNavIcon}
					alt="open"
					className="mobileNav"
          // className={`mobileNav ${navbarOpen ? 'toggleDesctiptionButton' : ''}`}
				/>
      </nav>
      {navbarOpen ? (
        <div className="mobileNavLinks">
          <ul className="mobile">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              AboutDEIBadging
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </ul>
          <Link className="get-started-mobile" to="/badge">
            {' '}
            Get Started
          </Link>
        </div>
      ) : (
        ''
      )}
    </header>
  );
};

export default Header;

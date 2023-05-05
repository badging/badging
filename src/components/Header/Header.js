import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/global.scss";
import "./header.scss";
import CardCarousel from "./CardCarousel";
import { badgingLogo } from "../../assets/images";
import { DefaultMobileNavIcon, OpenMobileNavIcon, MobileLogo } from "../../assets/images";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header>
      <nav className="container">
        <Link to="/" className="active">
        
            <img
              src={badgingLogo}
              className="logo"
              alt="all-in-chaoss-logo"
              // width={250}
              srcSet={`${MobileLogo} 1200w`}
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
        <Link className="get-started" to="/">
          {" "}
          Get Started
        </Link>
       
        <img onClick={() => setNavbarOpen((prev) => !prev)} src={navbarOpen ? OpenMobileNavIcon : DefaultMobileNavIcon}  alt="open" className="mobileNav"/>
      
      </nav>
    {navbarOpen ? 
      (
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
          <Link className="get-started-mobile" to="/">
            {" "}
            Get Started
          </Link>
        </div>
      ) : ''
    }
      
      
    </header>
  );
};

export default Header;

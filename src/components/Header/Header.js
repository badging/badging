import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/global.scss';
import './header.scss';

import { badgingLogo } from '../../assets/images';

const Header = () => {
  return (
    <header>
      <nav className="container">
        <Link to="/" className="active">
          <img
            src={badgingLogo}
            className="logo"
            alt="all-in-chaoss-logo"
            width={250}
          />
        </Link>
        <ul>
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
      </nav>
      <div className="sub-nav">
        <div className="hero-section">
          <div className="title">DEI Project Badging</div>
          <div className="description">
            Join us in our mission to promote Diversity, Equity, and Inclusion
            in the workplace! Recognize and reward DEI efforts with our
            innovative project badging system, and inspire a culture of
            inclusivity and excellence. Take the first step towards positive
            change today.
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

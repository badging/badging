import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/global.scss";
import "./header.scss";
import CardCarousel from "./CardCarousel";
import { badgingLogo } from "../../assets/images";

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
        <Link className="get-started" to="/">
          {" "}
          Get Started
        </Link>
      </nav>
      
    </header>
  );
};

export default Header;

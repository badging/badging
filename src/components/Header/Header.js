import React, { useState, useEffect, useRef } from "react";
import { chaossLogo, mobileMenuIcon } from "../../assets/images";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../pages/Home/data";

const Nav = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [toggleNav, setToggleNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false);
    setToggleNav(false);
  }, [pathname]);

  return (
    <nav className="navigation-wrapper">
      <div className="nav-items">
        <section className="logo-icon-wrapper">
          <figure className="logo-wrapper">
            <Link to="/">
              <img src={chaossLogo} alt="logo" className="logo" />
            </Link>
          </figure>

          <div className="menu-icon">
            <button
              className="hamburger-icon"
              onClick={() => setToggleNav(!toggleNav)}
            >
              <img src={mobileMenuIcon} alt="menu-icon" />
            </button>
          </div>
        </section>

        <section className={`nav-menu ${toggleNav && "show"}`}>
          <ul className="nav-menu-links">
            {navLinks.map((link, i) => (
              <li
                className={`nav-link ${pathname === link.url && "active-link"}`}
                key={i}
              >
                <Link to={link.url}>{link.pathname}</Link>
              </li>
            ))}
          </ul>

          <div className="wrapper" ref={dropdownRef}>
            <div className="apply-for-badge-wrapper">
              <button
                type="button"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              >
                Apply for Badge
              </button>
            </div>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link
                  to="/event-badging/apply"
                  className="dropdown-option"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Event Badging
                </Link>
                <Link
                  to="/badge"
                  className="dropdown-option"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Project Badging
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Nav;

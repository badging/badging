import React, { useState, useEffect } from "react";
import { chaossLogo, mobileMenuIcon } from "../../assets/images";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../pages/Home/data";

const Nav = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [toggleNav, setToggleNav] = useState(false);
  const [applyBtn, setApplyBtn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (applyBtn && !event.target.closest(".apply-div")) {
        setApplyBtn(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [applyBtn]);

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

          <div className="wrapper">
            <div className="apply-for-badge-wrapper">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                Apply for Badge
              </button>
            </div>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <a href="/event-badging/apply" className="dropdown-option">
                  Event Badging
                </a>
                <a href="/badge" className="dropdown-option">
                  Project Badging
                </a>
              </div>
            )}
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Nav;

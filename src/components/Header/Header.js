import React, { useState } from "react";
import { chaossLogo, mobileMenuIcon } from "../../assets/images";
import "./header.scss";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [toggleNav, setToggleNav] = useState(false);
  const [applyBtn, setApplyBtn] = useState(false);

  return (
    <div>
      <header className="container-new">
        <img src={chaossLogo} alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/" className={pathname == "/" ? "activeNav" : ""}>
              Home
            </a>
          </li>
          <li>
            <a
              href="/event-badging"
              className={pathname == "/event-badging" ? "activeNav" : ""}
            >
              Event Badging
            </a>
          </li>
          <li>
            <a
              href="/project-badging"
              className={
                pathname.includes("/project-badging") ? "activeNav" : ""
              }
            >
              Project Badging
            </a>
          </li>
          <li>
            <a href="/faq" className={pathname == "/faq" ? "activeNav" : ""}>
              FAQ
            </a>
          </li>
        </ul>
        <img
          className="mobile-nav"
          onClick={() => setToggleNav(!toggleNav)}
          src={mobileMenuIcon}
          alt="logo"
        />
        {pathname &&
        (pathname.includes("/event-badging") ||
          pathname.includes("/project-badging") ||
          pathname.includes("/faq") ||
          pathname === "/") ? (
          <div className="apply-div">
            <button
              onClick={() => setApplyBtn((toggle) => !toggle)}
              className="apply-btn"
            >
              Apply for Badge
            </button>
            {applyBtn && (
              <div className="option-div">
                <a
                  href="https://chaoss.community/diversity-and-inclusion-badging/"
                  className="apply-btn-option"
                >
                  Event Badging
                </a>
                <a href="/badge" className="apply-btn-option">
                  Project Badging
                </a>
              </div>
            )}
          </div>
        ) : (
          <div className="hidden-box"></div>
        )}
      </header>
      <div
        className="mobile-nav-container"
        style={{ display: toggleNav == true ? "" : "none" }}
      >
        <ul className="mobile-list">
          <li>
            <a href="/" className={pathname == "/" ? "activeNav" : ""}>
              Home
            </a>
          </li>
          <li>
            <a
              href="/event-badging"
              className={pathname == "/event-badging" ? "activeNav" : ""}
            >
              Event Badging
            </a>
          </li>
          <li>
            <a
              href="/project-badging"
              className={pathname == "/project-badging" ? "activeNav" : ""}
            >
              Project Badging
            </a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

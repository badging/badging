import React from "react";
import { Footer, Header } from "../../components";
import {
  loginArrow,
  getBadgedFullBG,
  getBadgedMobile,
} from "../../assets/images";
import settings from "../../settings.json";
import "../../assets/styles/global.scss";
import "./latest-badging.scss";

const LatestBadgingSample = () => {
  const baseurl = settings.API_BASE_URL;

  const handleLogin = () => {
    window.location.href = `${baseurl}/login`;
  };
  return (
    <div>
      <Header />
      <div className="requirements">
        <div className="section-one">
          <img
            className="bg-getStarted"
            src={getBadgedFullBG}
            alt="arrow pointer design"
          />

          <img
            className="bg-mobile-getStarted"
            src={getBadgedMobile}
            alt="arrow pointer design"
          />
        </div>

        <div className="section-two">
          <div className="section-wrap">
            <div className="section-title">
              <h2>Prerequisite</h2>
              <hr />
            </div>
            <ol className="section-list">
              <li>
                A repository is required within which to put the DEI.md file
              </li>
              <li>
                The person applying for the badge must be a project admin or
                maintainer
              </li>

              <li>The Project must be Open Source</li>
              <li>Ensure you have your DEI.md File</li>
            </ol>

            <div className="login-github">
              <button
                type="button"
                className="login-github"
                onClick={handleLogin}
              >
                <span className="btn-mb-badge">Get Started</span>{" "}
                <span className="btn-dt-badge"> Login with GitHub</span>
                <span>
                  <img className="arrow" src={loginArrow} alt="arrow icon" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LatestBadgingSample;

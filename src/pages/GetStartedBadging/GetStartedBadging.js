import { useState } from "react";
import { Layout, Loader } from "../../components";
import { loginArrow } from "../../assets/images";

import "../../assets/styles/global.scss";
import "./getStartedBadging.scss";

const GetStartedBadging = () => {
  const [openLoader, setOpenLoader] = useState(false);

  const baseurl = process.env.API_BASE_URL;

  const handleLogin = () => {
    setOpenLoader(true);
    window.location.href = `${baseurl}/login`;
  };

  return (
    <Layout>
      <div className="section-two">
        <div className="section-wrap">
          <div className="section-title">
            <h2>Prerequisite</h2>
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
      <Loader open={openLoader}>
        <p>Redirecting to GitHub Authentication</p>
      </Loader>
    </Layout>
  );
};

export default GetStartedBadging;

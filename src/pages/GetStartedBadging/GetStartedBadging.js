import { useState } from "react";
import { Layout, Loader } from "../../components";
import { loginArrow, githubCleanIcon, gitlabIcon } from "../../assets/images";

import "../../assets/styles/global.scss";
import "./getStartedBadging.scss";

const GetStartedBadging = () => {
  const [openLoader, setOpenLoader] = useState(false);

  const baseurl = settings.API_BASE_URL;

  const handleLoginWithGitHub = () => {
    setOpenLoader(true);
    window.location.href = `${baseurl}/login?provider=github`;
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

          <div className="login-btn">
            <button
              type="button"
              className="login-btn"
              onClick={handleLoginWithGitHub}
            >
              <img className="logo" src={githubCleanIcon} alt="github logo" />
              <span className="btn-mb-badge">Login with GitHub</span>
              <span className="btn-dt-badge">Login with GitHub</span>
              <img className="arrow" src={loginArrow} alt="arrow icon" />
            </button>
          </div>

          <div className="login-btn">
            <button
              type="button"
              className="login-btn"
              onClick={handleLoginWithGitLab}
            >
              <img
                className="logo"
                src={gitlabIcon}
                alt="github logo"
                width={32}
                height={32}
              />
              <span className="btn-mb-badge">Login with GitLab</span>
              <span className="btn-dt-badge">Login with GitLab</span>
              <img className="arrow" src={loginArrow} alt="arrow icon" />
            </button>
          </div>
        </div>
      </div>
      <Loader open={openLoader}>
        <p>Redirecting to Authentication</p>
      </Loader>
    </Layout>
  );
};

export default GetStartedBadging;

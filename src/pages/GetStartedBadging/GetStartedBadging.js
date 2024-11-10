import { useState } from "react";
import { Footer, Jumbotron, Loader } from "../../components";
import "../../assets/styles/global.scss";
import "./getStartedBadging.scss";
import settings from "../../settings.json";

const GetStartedBadging = () => {
  const [openLoader, setOpenLoader] = useState(false);

  const baseurl = settings.API_BASE_URL;

  const handleLoginWithGitHub = () => {
    setOpenLoader(true);
    window.location.href = `${baseurl}/auth/github`;
  };

  const handleLoginWithGitLab = () => {
    setOpenLoader(true);
    window.location.href = `${baseurl}/auth/gitlab`;
  };

  const title = "Get Started";
  return (
    <section>
      <Jumbotron title={title} />
      {/* <div className="section-two">
        <div className="section-wrap">
          <div className="section-title">
            <h2>Prerequisite</h2>
          </div>
          <ol className="section-list">
            <li>
              A repository is required within which to put the DEI.md file
            </li>
            <li>
              The person applying for the badge must be a project owner
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
      </div> */}
      <div className="badge container">
        <h1>Prerequisite</h1>

        <ul className="section-list">
          <li>A repository is required within which to put the DEI.md file</li>
          <li>The person applying for the badge must be a project owner</li>

          <li>The Project must be Open Source</li>
          <li>Ensure you have your DEI.md File</li>
        </ul>

        <div className="login">
          <button
            className="github"
            type="button"
            onClick={handleLoginWithGitHub}
          >
            Login with GitHub
          </button>
          <button
            className="gitlab"
            type="button"
            onClick={handleLoginWithGitLab}
          >
            Login with GitLab
          </button>
          <a
            className="self__hosted"
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdoKt4K8L_LuuZ-0xaUd1ZL8JrIZ5dGt20XAFP7x2SfkAASdw/viewform"
          >
            Apply for Self-Hosted Projects
          </a>
        </div>
      </div>
      <Loader open={openLoader}>
        <p>Redirecting to Authentication</p>
      </Loader>

      <Footer />
    </section>
  );
};

export default GetStartedBadging;

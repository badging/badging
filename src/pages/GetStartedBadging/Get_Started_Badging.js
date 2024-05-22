import { useState } from "react";
import { Footer, Jumbotron, Loader } from "../../components";
import "../../assets/styles/global.scss";
import "./get-started-badging.scss";
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

import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { githubIcon, linkedin, twitter, slack } from "../../assets/images";

const Footer = () => {
  return (
    <footer className="footer-container">
      <span className="social">
        <Link to="https://github.com/badging/badging" target="blank">
          <img src={githubIcon} alt="github-icon" />
        </Link>
        <Link to="https://www.linkedin.com/company/chaoss/" target="blank">
          <img src={linkedin} alt="linkedin-icon" />
        </Link>
        <Link to="https://fosstodon.org/@chaoss" target="blank">
          <img src={mastodon} alt="mastodon-icon" />
        </Link>
        <Link
          to="https://chaoss-workspace.slack.com/messages/C012A4L7M8V/"
          target="blank"
        >
          <img src={slack} alt="slack-icon" />
        </Link>
      </span>
      <span className="copy-right">
        Copyright &copy; <a href="/">CHAOSS.</a> All rights reserved a Linux
        Foundation Project
      </span>
    </footer>
  );
};

export default Footer;

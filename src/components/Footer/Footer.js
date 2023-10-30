import React from 'react';
import { Link } from 'react-router-dom';
import { twitter, linkedin, mail, githubIcon } from '../../assets/images';
import '../../assets/styles/global.scss';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="container">
      <div className="social">
        <Link
          to="https://github.com/AllInOpenSource/ProjectBadging"
          target="blank"
        >
          <img src={githubIcon} alt="github-icon" />
        </Link>
        <Link
          to="https://www.linkedin.com/company/all-in-open-source/"
          target="blank"
        >
          <img src={linkedin} alt="linkedin-icon" />
        </Link>
        <Link to="https://twitter.com/AllInOpenSource" target="blank">
          <img src={twitter} alt="twitter-icon" />
        </Link>
        <Link to="mailto:maintainers@allinopensource.org" target="blank">
          <img src={mail} alt="mail-icon" />
        </Link>
      </div>
      <div className="copyright">
        Copyright &copy;{' '}
        <Link to="https://allinopensource.org/" className="footer-note">
          Allin
        </Link>{' '}
        &{' '}
        <Link to="https://chaoss.community/" className="footer-note">
          CHAOSS
        </Link>{' '}
        Project. <br />
        All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

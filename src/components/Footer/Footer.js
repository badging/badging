import React from 'react'
// import { githubIcon, linkedin, mail, twitter } from '../../../assets/images'
import './footer.scss';
import { Link } from 'react-router-dom';
import { githubIcon, linkedin, mail, twitter } from '../../assets/images';

const Footer = () => {
  return (
    <footer className='footer-container'>
        <span className='social'>
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
        </span>
        <span className='copyright'>Copyright &copy; <a href="/">CHAOSS.</a> All rights reserved a Linux Foundation Project</span>
    </footer>
  )
}

export default Footer
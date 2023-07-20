import React from "react";
import { Link } from "react-router-dom";
import { twitter, reddit, linkedin, mail } from "../../assets/images";
import "../../assets/styles/global.scss";
import "./footer.scss";

const Footer = () => {
	return (
		<footer className="container">
			<div className="social">
				<Link to="/">
					<img src={reddit} alt="reddit-icon" />
				</Link>
				<Link to="/">
					<img src={linkedin} alt="linkedin-icon" />
				</Link>
				<Link to="/">
					<img src={twitter} alt="twitter-icon" />
				</Link>
				<Link to="/">
					<img src={mail} alt="mail-icon" />
				</Link>
			</div>
			<div className="copyright">
				Copyright &copy;{" "}
				<Link to="https://allinopensource.org/" className="footer-note">
					Allin
				</Link>{" "}
				&{" "}
				<Link to="https://chaoss.community/" className="footer-note">
					CHAOSS
				</Link>{" "}
				Project. {" "}
				<br />
				All rights reserved
			</div>
		</footer>
	);
};

export default Footer;

import React from "react";
import { Footer, Header } from "../../components";

import "../../assets/styles/global.scss";
import "./badgingRequirements.scss";

const BadgingRequirements = () => {
	const baseurl = "https://badging.allinopensource.org/api";

	const handleLogin = () => {
		console.log("login");

		fetch(`${baseurl}/login`, {
			method: "GET",
		})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log("an error occured while logging in: ", error);
			});
	};

	return (
		<div>
			<Header />
			<div className="requirements">
				<h1>Badging Requirements</h1>
				<section className="first-section">
					<div className="requirement first-requirement">
						<p className="top">1. You need a GitHub Account</p>
						<p className="detail">
							You will need to give us access to your Project Repository hence
							you should have an active GitHub Account.
						</p>
					</div>
					<div className="requirement">
						<p className="top">
							{" "}
							2. You must be either an Admin or Maintainer of the project who
							Repository you intend to submit
						</p>
						<p className="detail">
							You will need to give us access to your Project Repository hence
							you should have an active GitHub Account.
						</p>
					</div>
				</section>
				<section className="second-section">
					<p>
						If you have successfully fulfilled the above requirements you can
						proceed to Login with GitHub.
					</p>
					<button className="github" type="button" onClick={handleLogin}>
						{" "}
						Login with GitHub
					</button>
				</section>
			</div>
			<Footer />
		</div>
	);
};

export default BadgingRequirements;

import React from "react";
import PropTypes from "prop-types";

const Jumbotron = ({ title, description, subheading = null, children }) => {
	return (
		<div className="jumbotron">
			<h2>{title}</h2>
			<div>
				{subheading && <h3>{subheading}</h3>}
				<p>{description}</p>
			</div>
			{/* add any other children */}
			{children}
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	subheading: PropTypes.string,
	children: PropTypes.node,
};

export default Jumbotron;

import React from "react";
import PropTypes from "prop-types";

const Jumbotron = ({ title, description }) => {
	return (
		<div className="jumbotron">
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
};

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Jumbotron;

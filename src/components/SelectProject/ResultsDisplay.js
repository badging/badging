import { useContext, useState } from "react";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import { DataContext } from "../../contexts/DataContext";
// import useLoadingError from "../../hooks/useLoadingError";

const ResultsDisplay = ({ results }) => {
	const { userData, setUserData } = useContext(DataContext);
	// const { loading, error } = useLoadingError();

	const handleClearInput = (event, result) => {
		event.stopPropagation();
		const repos = userData.reposToBadge.filter((repo) => repo !== result);

		setUserData({
			...userData,
			reposToBadge: repos,
		});
	};

	return (
		<ul>
			{/* {loading && <li className="loading">Loading...</li>}
			{error && <li className="error">{error}</li>}
			{!loading && !error && results.length === 0 && (
				<li className="info">Repository not found</li>
			)} */}
			{
				// !loading &&
				// 	!error &&

				results.slice(0, 3).map((result, index) => (
					<li key={index} className="result">
						{result}
						<button
							type="button"
							className="clear btn"
							onClick={(event) => handleClearInput(event, result)}
						>
							<CloseIcon />
						</button>
					</li>
				))
			}
		</ul>
	);
};

ResultsDisplay.propTypes = {
	results: PropTypes.arrayOf(PropTypes.string),
};

export default ResultsDisplay;

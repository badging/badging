import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { xMarkPink } from "../../assets/images";
import { DataContext } from "../../contexts/DataContext";
import useLoadingError from "../../hooks/useLoadingError";

const ResultsDisplay = ({ results }) => {
	const { userData, setUserData } = useContext(DataContext);
	const { loading, error } = useLoadingError();
	const [focusedResultIndex, setFocusedResultIndex] = useState(-1);

	const handleClearInput = (event) => {
		event.stopPropagation();
		setUserData({
			...userData,
			repoToBadge: "",
		});
		setFocusedResultIndex(-1);
	};

	const handleResultClick = (result, index) => {
		setUserData({
			...userData,
			repoToBadge: result,
		});
		setFocusedResultIndex(index);
	};

	return (
		<ul className="search_results">
			{loading && <li className="loading">Loading...</li>}
			{error && <li className="error">{error}</li>}
			{!loading && !error && results.length === 0 && (
				<li className="info">Repository not found</li>
			)}
			{!loading &&
				!error &&
				results.length > 0 &&
				results.slice(0, 3).map((result, index) => (
					<li key={index}>
						<button
							type="button"
							className={`btn ${focusedResultIndex === index ? "focused" : ""}`}
							onClick={() => handleResultClick(result, index)}
						>
							{result}
						</button>
						{focusedResultIndex === index && (
							<button
								type="button"
								className="clear btn"
								onClick={(event) => handleClearInput(event)}
							>
								<img src={xMarkPink} alt="clear" />
							</button>
						)}
					</li>
				))}
		</ul>
	);
};

ResultsDisplay.propTypes = {
	results: PropTypes.arrayOf(PropTypes.string),
};

export default ResultsDisplay;

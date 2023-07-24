import PropTypes from "prop-types";
import { xMarkPink } from "../../assets/images";

const ResultsDisplay = ({ results, handleResultClick, handleClearInput }) => {
	return (
		<ul className="search_results">
			{results && results.slice(0, 3).map((result, index) => (
				<li key={index}>
					<button
						type="button"
						className="btn"
						onClick={() => handleResultClick(result)}
					>
						{result}
					</button>
					<button
						type="button"
						className="clear btn"
						onClick={handleClearInput}
					>
						<img src={xMarkPink} alt="clear" />
					</button>
				</li>
			))}
		</ul>
	);
};

ResultsDisplay.propTypes = {
	results: PropTypes.arrayOf(PropTypes.string),
	handleResultClick: PropTypes.func,
	handleClearInput: PropTypes.func,
};

export default ResultsDisplay;

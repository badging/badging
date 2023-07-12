import "../../assets/styles/global.scss";
import "./selectProjectRepo.scss";
import { useContext } from "react";
import PropTypes from "prop-types";
import { Header, SearchBar } from "../../components";
import { info } from "../../assets/images";
import { SelectProjectRepoContext } from "../../contexts/SelectProjectRepoContext";

const ResultsDisplay = ({ results, handleResultClick }) => {
	return (
		<ul className="search_results">
			{results.map((result, index) => (
				<li key={index}>
					<button type="button" onClick={() => handleResultClick(result)}>
						{result}
					</button>
				</li>
			))}
		</ul>
	);
};

ResultsDisplay.propTypes = {
	results: PropTypes.arrayOf(PropTypes.string),
	handleResultClick: PropTypes.func,
};

const Page = () => {
	const { project } = useContext(SelectProjectRepoContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submit: ", project);
		// api call to get badged
	};

	return (
		<div className="page">
			<Header />
			<form className="page-content" onSubmit={handleSubmit}>
				<h2>Search For Project Repository</h2>
				<SearchBar ResultsDisplay={ResultsDisplay} />
				<div className="info">
					<img src={info} alt="info icon" />
					<p>
						Lorem ipsum dolor sit amet consectetur. Sed risus ultrices sit nibh
						sed. Interdum urna molestie fames porttitor elementum a diam
						laoreet.
					</p>
				</div>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Page;

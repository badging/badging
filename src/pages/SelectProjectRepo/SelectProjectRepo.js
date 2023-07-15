import "../../assets/styles/global.scss";
import "./selectProjectRepo.scss";
import { useContext } from "react";
import PropTypes from "prop-types";
import { Header, SearchBar } from "../../components";
import { SelectProjectRepoContext } from "../../contexts/SelectProjectRepoContext";
import { xMarkPink } from "../../assets/images";

const ResultsDisplay = ({ results, handleResultClick }) => {
	return (
		<ul className="search_results">
			{results.slice(0, 3).map((result, index) => (
				<li key={index}>
					<button
						type="button"
						className="btn"
						onClick={() => handleResultClick(result)}
					>
						{result}
					</button>
					<button type="button" className="clear btn">
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
};

const Page = () => {
	const { project } = useContext(SelectProjectRepoContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submit: ", project);
		// api call to get badged
	};

	return (
		<div className="select__project">
			<Header />
			<main>
				<aside>
					<p className="heading__2">
						You can Badge As Many Project You Want.
					</p>
				</aside>

				<section className="main__content">
					<form className="select__project__form" onSubmit={handleSubmit}>
						<h2>Search For Project Repository</h2>
						<SearchBar ResultsDisplay={ResultsDisplay} />
						<button type="button">Submit</button>
					</form>
				</section>
			</main>
		</div>
	);
};

export default Page;

import "../../assets/styles/global.scss";
import "./searchbar.scss";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { search } from "../../assets/images";
import { SelectProjectRepoContext } from "../../pages/ApplyForBadge/SelectProjectRepoContext";

const SearchBar = ({ ResultsDisplay }) => {
	const data = [
		"Badging By CHAOSS",
		"Badging By CHAOSS",
		"Badging By CHAOSS",
		"Badging By CHAOSS",
		"Badging By CHAOSS",
		"Badging By CHAOSS",
	];
	const [inputValue, setInputValue] = useState("");
	const [searchResults, setSearchResults] = useState(data);
	const { setProject } = useContext(SelectProjectRepoContext);

	const handleInputChange = (e) => {
		const value = e.target.value;
		setInputValue(value);

		const results = performSearch(value);
		setSearchResults(results);
	};

	const handleClearInput = () => {
		setInputValue("");
		setProject("");
		setSearchResults(data);
	};

	const performSearch = (value) => {
		return data.filter((result) =>
			result.toLowerCase().includes(value.toLowerCase())
		);
	};

	const handleResultClick = (result) => {
		setInputValue(result);
		setProject(result);
	};

	return (
		<div className="searchbar">
			<div className="search">
				<img src={search} alt="search" />
				<input
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					placeholder="Search"
				/>
				<button type="button">Add to List</button>
			</div>
			<button type="button" onClick={handleClearInput}>
				Clear All
			</button>
			<ResultsDisplay
				results={searchResults}
				handleResultClick={handleResultClick}
			/>
		</div>
	);
};

SearchBar.propTypes = {
	onSubmit: PropTypes.func,
	ResultsDisplay: PropTypes.func,
};

export default SearchBar;

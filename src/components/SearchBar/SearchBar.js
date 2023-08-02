import "../../assets/styles/global.scss";
import "./searchbar.scss";
import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { search } from "../../assets/images";
import { DataContext } from "../../contexts/DataContext";
import { ResultsDisplay } from "../index";

const SearchBar = () => {
	const [inputValue, setInputValue] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const { userData, setUserData } = useContext(DataContext);

	useEffect(() => {
		const baseurl = "https://badging.allinopensource.org/api";
		const urlParams = new URLSearchParams(document.location.search);
		const code = urlParams.get("code");

		fetch(`${baseurl}/callback`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ code }),
		})
			.then((response) => response.json())
			.then((data) => {
				setUserData({
					...userData,
					username: data.username,
					name: data.name,
					email: data.email,
					repos: data.repos,
				});
				setSearchResults(data.repos);
			})
			.catch((error) => {
				console.log("an error occurred: ", error);
			});
	}, []);

	const handleInputChange = (e) => {
		const value = e.target.value;
		setInputValue(value);

		const results = performSearch(value);
		setSearchResults(results);
	};

	const performSearch = (value) => {
		return userData.repos.filter((result) =>
			result.toLowerCase().includes(value.toLowerCase())
		);
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
			</div>
			<ResultsDisplay results={searchResults} />
		</div>
	);
};

SearchBar.propTypes = {
	onSubmit: PropTypes.func,
	ResultsDisplay: PropTypes.func,
};

export default SearchBar;

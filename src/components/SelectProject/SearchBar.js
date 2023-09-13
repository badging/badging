import "../../assets/styles/global.scss";
import "./searchbar.scss";
import { useContext, useState, useEffect, useRef } from "react";
import { search } from "../../assets/images";
import { DataContext } from "../../contexts/DataContext";
import useLoadingError from "../../hooks/useLoadingError";

const SearchBar = () => {
	const [inputValue, setInputValue] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [focusedSuggestionIndex, setFocusedSuggestionIndex] = useState(-1);
	const { userData, setUserData } = useContext(DataContext);
	const { loading, setLoading, error, setError } = useLoadingError();
	const searchBarRef = useRef(null);

	useEffect(() => {
		setLoading(true);
		const baseurl = "https://badging.allinopensource.org/api";
		const urlParams = new URLSearchParams(document.location.search);
		const code = urlParams.get("code");

		// fetch(`${baseurl}/callback`, {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({ code }),
		// })
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		setUserData({
		// 			...userData,
		// 			username: data.username,
		// 			name: data.name,
		// 			email: data.email,
		// 			repos: data.repos,
		// 		});
		// 		setSearchResults(data.repos);
		//     setLoading(false);
		// 	})
		// 	.catch((error) => {
		//     setLoading(false);
		//     setError("An error occurred while fetching your data. Please try again later.");
		// 		console.log("an error occurred: ", error);
		// 	});

		// setSearchResults(userData.repos); // test
		setLoading(false); // test
	}, []);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
				clearSuggestions();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	function handleInputChange(e) {
		const value = e.target.value;
		setInputValue(value);

		const results = performSearch(value);
		setSearchResults(results);
	}

	function performSearch(value) {
		return userData.repos.filter((result) =>
			result.toLowerCase().includes(value.toLowerCase())
		);
	}

	function handleRepoSelection(result) {
		setUserData({
			...userData,
			reposToBadge: [...userData.reposToBadge, result],
		});
    clearSuggestions();
	}

	function handleSuggestionClick(result, index) {
		if (focusedSuggestionIndex === index) {
			handleRepoSelection(result);
		}
		setFocusedSuggestionIndex(index);
	}

	function clearSuggestions() {
		setSearchResults([]);
	}

	return (
		<div className="searchbar" ref={searchBarRef}>
			<div className="search">
				<img src={search} alt="search" />
				<input
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					placeholder="Search"
				/>
			</div>
			{searchResults.length > 0 && (
				<ul className="suggestions">
					{searchResults.slice(0, 4).map((result, index) => (
						<li key={index}>
							<button
								type="button"
								className="btn suggestion"
								onClick={() => handleSuggestionClick(result, index)}
							>
								{result}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="19"
									viewBox="0 0 18 19"
									fill="none"
								>
									<path
										d="M3.375 11.375H4.875V6.4325L13.5675 15.125L14.625 14.0675L5.9325 5.375H10.875V3.875H3.375V11.375Z"
										fill="#030303"
									/>
								</svg>
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default SearchBar;

import "../../assets/styles/global.scss";
import "./search-bar.scss";
import { useContext, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { search } from "../../assets/images";
import { DataContext } from "../../contexts/DataContext";


const SearchBar = ({ setShowInfo }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputClicked, setInputClicked] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [focusedSuggestionIndex, setFocusedSuggestionIndex] = useState(-1);
  const { userData, setUserData } = useContext(DataContext);
  const searchBarRef = useRef(null);

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

  const handleInputClick = () => {
    if (!inputClicked) {
      setInputClicked(true);
      setShowInfo(false);
      setSearchResults(userData.repos);
    }
  };

  function performSearch(value) {
    return userData.repos.filter((repoData) =>
      repoData.fullName.toLowerCase().includes(value.toLowerCase())
    );
  }

  function handleRepoSelection(repoData) {
    setUserData({
      ...userData,
      reposToBadge: [...userData.reposToBadge, repoData],
    });
    clearSuggestions();
  }

  function handleSuggestionClick(repoData, index) {
    if (focusedSuggestionIndex === index) {
      handleRepoSelection(repoData);
    }
    setFocusedSuggestionIndex(index);
  }

  function clearSuggestions() {
    setSearchResults([]);
    setFocusedSuggestionIndex(-1);
  }

  return (
    <div className="searchbar" ref={searchBarRef}>
      <div className="search">
        <img src={search} alt="search" />
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onClick={handleInputClick}
          placeholder="Search"
        />
      </div>
      {searchResults.length > 0 && (
        <ul className="suggestions">
          {searchResults.map((repoData, index) => (
            <li key={index}>
              <button
                type="button"
                className="btn suggestion"
                onClick={() => handleSuggestionClick(repoData, index)}
              >
                {repoData.fullName}
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

SearchBar.propTypes = {
  setShowInfo: PropTypes.func.isRequired,
};

export default SearchBar;

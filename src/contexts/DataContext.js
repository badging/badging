import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		projectsToBadge: [],
		username: "",
		repos: [],
	});

	// const [badgedRepos, setBadgedRepos] = useState([]);

	return (
		<DataContext.Provider value={{ userData, setUserData }}>
			{children}
		</DataContext.Provider>
	);
};

DataProvider.propTypes = {
	children: PropTypes.node,
};

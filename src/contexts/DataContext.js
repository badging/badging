import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [userData, setUserData] = useState({
		name: "Precious",
		email: "misspee007@gmail.com",
		reposToBadge: [],
		username: "misspee007",
		repos: [
			"AllInOpenSource/ProjectBadging",
			"animeshack/church-website",
			"badging/badging",
			"chaoss/badging",
		],
	});

	/**
	 * KINDLY FOLLOW THESE STEPS TO TEST THIS PROGRAM ON YOUR LOCAL MACHINE
	 * Step 1: Login to your gihub via http://localhost:5050/badge
	 * Step 2: Grant this program access to repo(s)
	 * Step 3: Copy your github info and replace it with the empty useState() above as mine below
	 * Step 4: Scroll down on this page and copy from line 53 - 85
	 * Step 5: Then proceed to SearchBar.js
	 * Step 6: Initialize this =>  const [loading, setLoading] = useState(false);
	 * Step 7: Paste and Save the code obtained in Step 4
	 * Step 8: Visit localhost:5050/select-project, select the project you want to badge and proceed.
	 * Now you are good go!!!
	 */

	// const [userData, setUserData] = useState({
	// 	email: "tochuks.chris@gmail.com",
	// 	name: "Tochukwu",
	// 	repos: [
	// 		"AllInOpenSource/ProjectBadging",
	// 		"animeshack/church-website",
	// 		"badging/badging",
	// 	],
	// 	username: "teek-tech",
	// 	repoToBadge: "",
	// });

	return (
		<DataContext.Provider value={{ userData, setUserData }}>
			{children}
		</DataContext.Provider>
	);
};

DataProvider.propTypes = {
	children: PropTypes.node,
};

// useEffect(() => {
// 	setLoading(true);
// 		const baseurl = "https://badging.allinopensource.org/api";
// 		const urlParams = new URLSearchParams(document.location.search);
// 		const code = urlParams.get("code");

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
// setSearchResults(userData.repos);
// setLoading(false);
// }, []);

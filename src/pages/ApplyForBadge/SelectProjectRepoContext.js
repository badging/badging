import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const SelectProjectRepoContext = createContext();

export const SelectProjectRepoProvider = ({ children }) => {
	const [project, setProject] = useState("");

	return (
		<SelectProjectRepoContext.Provider value={{ project, setProject }}>
			{children}
		</SelectProjectRepoContext.Provider>
	);
};

SelectProjectRepoProvider.propTypes = {
	children: PropTypes.node,
};

import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
	const [project, setProject] = useState("");

	return (
		<ProjectContext.Provider value={{ project, setProject }}>
			{children}
		</ProjectContext.Provider>
	);
};

ProjectProvider.propTypes = {
	children: PropTypes.node,
};

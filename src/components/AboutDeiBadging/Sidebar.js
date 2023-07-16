import { NavLink } from "react-router-dom";

const Sidebar = () => {
	return (
		<ul>
			<li>
				<NavLink exact="true" to="/about" id="what-is-dei-badging" end>
					What is DEI Project Badging?
				</NavLink>
			</li>
			<li>
				<NavLink exact="true" to="/about/application-process">
					Application Process
				</NavLink>
			</li>
			<li>
				<NavLink exact="true" to="/about/dei-file">
					DEI.md File
				</NavLink>
			</li>
			<li>
				<NavLink exact="true" to="/about/dei-badge">
					DEI Badge
				</NavLink>
			</li>
		</ul>
	);
};

export default Sidebar;

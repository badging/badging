import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<ul>
			<li>
				<Link to="/about">What is DEI Project Badging?</Link>
			</li>
			<li>
				<Link to="/about/application-process">Application Process</Link>
			</li>
			<li>
				<Link to="/about/dei-file">DEI.md File</Link>
			</li>
			<li>
				<Link to="/about/dei-badges">DEI Badge</Link>
			</li>
		</ul>
	);
};

export default Sidebar;

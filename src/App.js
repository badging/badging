import { Route, Routes } from "react-router-dom";
import { Home, About, Projects, BadgingRequirements, Page } from "./pages";
import { ProjectProvider } from "./pages/ApplyForBadge/ProjectContext";

const App = () => {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route exact path="/badge" element={<BadgingRequirements />} />
				<Route
					exact
					path="/project"
					element={
						<ProjectProvider>
							<Page />
						</ProjectProvider>
					}
				/>
				<Route exact path="/projects" element={<Projects />} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</>
	);
};

export default App;

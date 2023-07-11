import { Route, Routes } from "react-router-dom";
import { Home, About, Projects, BadgingRequirements, Page } from "./pages";
import { SelectProjectRepoProvider } from "./pages/ApplyForBadge/SelectProjectRepoContext";

const App = () => {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/badge" element={<BadgingRequirements />} />
				<Route
					path="/select-project"
					element={
						<SelectProjectRepoProvider>
							<Page />
						</SelectProjectRepoProvider>
					}
				/>
				<Route exact path="/projects" element={<Projects />} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</>
	);
};

export default App;

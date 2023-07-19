import { Route, Routes } from "react-router-dom";
import { Home, About, Projects, BadgingRequirements, SelectProjectRepo } from "./pages";
import {
	WhatIsDeiBadging,
	ApplicationProcess,
	DeiBadge,
	DeiFile,
} from "./components";
import { SelectProjectRepoProvider } from "./contexts/SelectProjectRepoContext";
import { DesktopProvider } from "./contexts/DesktopContext";

const App = () => {
	return (
		<>
			<DesktopProvider>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/about" element={<About />}>
						<Route path="/about" element={<WhatIsDeiBadging />} />
						<Route
							path="/about/application-process"
							element={<ApplicationProcess />}
						/>
						<Route path="/about/dei-file" element={<DeiFile />} />
						<Route path="/about/dei-badge" element={<DeiBadge />} />
					</Route>
					<Route path="/badge" element={<BadgingRequirements />} />
					<Route
						path="/select-project"
						element={
							<SelectProjectRepoProvider>
								<SelectProjectRepo />
							</SelectProjectRepoProvider>
						}
					/>
					<Route exact path="/projects" element={<Projects />} />
					<Route path="*" element={<h1>Not Found</h1>} />
				</Routes>
			</DesktopProvider>
		</>
	);
};

export default App;

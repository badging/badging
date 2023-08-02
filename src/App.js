import { Route, Routes } from "react-router-dom";
import {
	Home,
	About,
	Projects,
	GetStartedBadging,
	SelectProjectRepo,
	ErrorPage,
} from "./pages";
import {
	WhatIsDeiBadging,
	ApplicationProcess,
	DeiBadge,
	DeiFile,
} from "./components";
import { DataProvider } from "./contexts/DataContext";
import { DesktopProvider } from "./contexts/DesktopContext";

const App = () => {
	return (
		<>
			<DesktopProvider>
				<DataProvider>
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
						<Route path="/badge" element={<GetStartedBadging />} />
						<Route path="/select-project" element={<SelectProjectRepo />} />
						<Route exact path="/projects" element={<Projects />} />
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</DataProvider>
			</DesktopProvider>
		</>
	);
};

export default App;

import { Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Projects,
  GetStartedBadging,
  SelectProjectRepo,
  ErrorPage,
  SuccessfullyBadged,
  ComingSoon,
} from "./pages";
import {
  WhatIsDeiBadging,
  ApplicationProcess,
  DeiBadge,
  DeiFile,
} from "./components";
import { DataProvider } from "./contexts/DataContext";
import { DesktopProvider } from "./contexts/DesktopContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DesktopProvider>
          <DataProvider>
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* <Route path="/about" element={<About />}>
                <Route path="/about" element={<WhatIsDeiBadging />} />
                <Route
                  path="/about/application-process"
                  element={<ApplicationProcess />}
                />
                <Route path="/about/dei-file" element={<DeiFile />} />
                <Route path="/about/dei-badge" element={<DeiBadge />} />
              </Route> */}
              <Route path="/about-project-badging" element={<Projects />}>
                <Route path="/about-project-badging" element={<WhatIsDeiBadging />} />
                <Route
                  path="/about-project-badging/application-process"
                  element={<ApplicationProcess />}
                />
                <Route path="/about-project-badging/dei-file" element={<DeiFile />} />
                <Route path="/about-project-badging/dei-badge" element={<DeiBadge />} />
              </Route>
              <Route path="/badge" element={<GetStartedBadging />} />
              <Route
                path="/select-project/:provider"
                element={<SelectProjectRepo />}
              />
              {/* <Route exact path="/projects" element={<Projects />} /> */}
              <Route exact path="/comingsoon" element={<ComingSoon />} />
              <Route
                exact
                path="/project-badging-successful"
                element={<SuccessfullyBadged />}
              />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </DataProvider>
        </DesktopProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;

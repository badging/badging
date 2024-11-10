import { Route, Routes } from "react-router-dom";
import {
  Home,
  Projects,
  GetStartedBadging,
  SelectProjectRepo,
  ErrorPage,
  SuccessfullyBadged,
  ComingSoon,
  InPerson,
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
import EventBadging from "./pages/EventBadging/EventBadging";
import Faq from "./pages/Faq/Faq";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DesktopProvider>
        <DataProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/project-badging" element={<Projects />}>
              <Route path="/project-badging" element={<WhatIsDeiBadging />} />
              <Route
                path="/project-badging/application-process"
                element={<ApplicationProcess />}
              />
              <Route path="/project-badging/dei-file" element={<DeiFile />} />
              <Route path="/project-badging/dei-badge" element={<DeiBadge />} />
            </Route>
            <Route path="/event-badging">
              <Route path="/event-badging" element={<EventBadging />} />
              <Route path="/event-badging/apply" element={<InPerson />} />
            </Route>
            <Route path="/badge" element={<GetStartedBadging />} />
            <Route
              path="/select-project/:provider"
              element={<SelectProjectRepo />}
            />
            <Route exact path="/comingsoon" element={<ComingSoon />} />
            <Route exact path="/faq" element={<Faq />} />
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
  );
};

export default App;

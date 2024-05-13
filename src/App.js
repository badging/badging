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
  InPerson,
  BadgedEvents,
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

import ProtectedRoute from "./components/ProtectedRoute";
import ProjectBadgingForm from "./pages/ProjectBadgingForm/ProjectBadgingForm";
import ProjectBadgingSuccess from "./pages/ProjectBadgingSuccess/Project_Badging_Success";

import Virtual from "./pages/ApplyBadgingForm/Virtual";


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
              <Route path="/project-badging" element={<Projects />}>
                <Route path="/project-badging" element={<WhatIsDeiBadging />} />
                <Route
                  path="/project-badging/application-process"
                  element={<ApplicationProcess />}
                />
                <Route path="/project-badging/dei-file" element={<DeiFile />} />
                <Route
                  path="/project-badging/dei-badge"
                  element={<DeiBadge />}
                />
              </Route>
              <Route path="/event-badging" element={<EventBadging />} />
              <Route path="/badged-events" element={<BadgedEvents />} />
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

              <Route 
              exact 
              path="/select-project/self-host" element={<ProjectBadgingForm />} />

              <Route exact path="/inperson" element={<InPerson />} />

              <Route exact path="/virtual" element={<Virtual />} />

              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </DataProvider>
        </DesktopProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;

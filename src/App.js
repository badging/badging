import { Route, Routes } from 'react-router-dom';
import { Home, About, Projects, GetStartedBadging, Page } from './pages';
import { SelectProjectRepoProvider } from './contexts/SelectProjectRepoContext';
import { DesktopProvider } from './contexts/DesktopContext';

const App = () => {
  return (
    <>
      <DesktopProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/badge" element={<GetStartedBadging />} />
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
      </DesktopProvider>
    </>
  );
};

export default App;

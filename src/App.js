import { Route, Routes } from 'react-router-dom';
import { Home, About, Projects, BadgingRequirements } from './pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/badge" element={<BadgingRequirements />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;

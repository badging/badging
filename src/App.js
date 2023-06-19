import { Route, Routes } from "react-router-dom";
import { Home, About, Projects } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;

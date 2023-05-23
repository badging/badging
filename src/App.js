import { Route, Routes } from "react-router-dom";
import { Home, Projects } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;

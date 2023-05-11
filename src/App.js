import { Route, Routes } from 'react-router-dom';
import { Home, About, DeiBadge } from './pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/badge" element={<DeiBadge />} />
      </Routes>
    </>
  );
};

export default App;

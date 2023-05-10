import { Route, Routes } from 'react-router-dom';
import { Home, DeiBadge } from './pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/badge" element={<DeiBadge />} />
      </Routes>
    </>
  );
};

export default App;

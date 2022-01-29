import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Nav } from './Nav';
import { Vertical } from './Vertical';
import { Horizontal } from './Horizontal';

export const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Vertical />} />
        <Route path="horizontal" element={<Horizontal />} />
      </Routes>
    </Router>
  );
};

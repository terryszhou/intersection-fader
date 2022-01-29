import { Box, Text, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { colors } from './css-colors';
import { Nav } from './Nav';
import { FadeInSection } from './FadeInSection';
import { FadeInSectionChakra } from './FadeInSectionChakra';
import { Vertical } from './Vertical';

export const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Vertical />} />
      </Routes>
    </Router>
  );
};

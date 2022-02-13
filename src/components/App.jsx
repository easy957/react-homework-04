import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import AppBar from './AppBar';
import Container from './Container';
import SearchPage from 'pages/SearchPage/SearchPage';

export const App = () => {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Container>
  );
};

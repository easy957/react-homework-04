import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import AppBar from './AppBar';
import Container from './Container';
import Credits from './Credits';
import Loader from './Loader';
import Reviews from './Reviews';
// import HomePage from 'pages/HomePage';
// import SearchPage from 'pages/SearchPage';
// import MoviePage from 'pages/MoviePage';

const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "home-page" */)
);
const SearchPage = lazy(() =>
  import('pages/SearchPage' /* webpackChunkName: "search-page" */)
);
const MoviePage = lazy(() =>
  import('pages/MoviePage' /* webpackChunkName: "movie-page" */)
);

export const App = () => {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movie/:movieId" element={<MoviePage />}>
            <Route path="credits" element={<Credits />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};

// import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { GlobalStyle } from './GlobalStyle';
// import PropTypes from 'prop-types';
import Layout from './Layout/Layout';

// const Home = lazy(() => import('../Pages/Home'));
// const Movies = lazy(() => import('../Pages/Movie'));
// const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
// const Reviews = lazy(() => import('../Pages/Reviews'));
// const Cast = lazy(() => import('../Pages/Cast'));

import Home from '../Pages/Home/Home';
import Movies from '../Pages/Movie/Movies';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="home" element={<Home />} /> */}
          <Route path="movies" element={<Movies />} />
          {/* <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>

      {/* <GlobalStyle /> */}
    </div>
  );
};

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import { ToastContainer } from 'react-toastify';

const Home = lazy(() => import('../Pages/Home/Home'));
const Movies = lazy(() => import('../Pages/Movie/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('../Pages/Reviews/Reviews'));
const Cast = lazy(() => import('../Pages/Cast/Cast'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};

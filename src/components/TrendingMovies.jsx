import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../API';

const TrendingMoviesList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(({ results }) => {
        setTrendingMovies(results);
      })
      .catch(err => toast.error(err));
  }, []);

  return (
    <>
      <h3>Trending today (Top-20)</h3>
      {!!trendingMovies?.length && (
        <ul>
          {trendingMovies.map(movie => (
            <Link>
              <li key={movie.id}>{movie.title ?? movie.original_title}</li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export default TrendingMoviesList;

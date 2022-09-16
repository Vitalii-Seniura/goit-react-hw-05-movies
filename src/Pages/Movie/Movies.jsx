import React, { useState, useEffect } from 'react';
import { getMoviesBySearchQuery } from '../../API';
import { useSearchParams, Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');

  useEffect(() => {
    if (name === null) return;
    if (name === '') {
      return alert('not name');
    }
    setMovies([]);

    getMoviesBySearchQuery(name)
      .then(response => response.results)
      .then(films => {
        setMovies(films);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [name]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ name: form.name.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <button type="submit">Search</button>
      </form>
      <div>
        <ul>
          {movies.map(movie => (
            <Link to={`/movies/${movie.id}`} movieId={movie.id} key={movie.id}>
              <li key={movie.id}>{movie.title ?? movie.original_title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Movies;

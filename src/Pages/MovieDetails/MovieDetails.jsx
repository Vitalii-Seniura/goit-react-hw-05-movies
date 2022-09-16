import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { getMovieDetailsById, IMAGE_URL } from '../../API';

const MoviesDetails = () => {
  const { state } = useLocation();
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});

  const { poster_path, title, vote_average, overview, genres } = movieData;

  useEffect(() => {
    getMovieDetailsById(movieId)
      .then(results => {
        setMovieData(results);
      })
      .catch(err => toast.error(err));
  }, [movieId]);

  return (
    <>
      <Link to={state}>Go back</Link>
      {!movieData?.length && (
        <>
          <div>
            {poster_path ? (
              <img src={`${IMAGE_URL}w400/${poster_path}`} alt={title} />
            ) : (
              <p>no image</p>
            )}
          </div>
          <h3>{title}</h3>
          <p>User Score: {vote_average ? vote_average.toFixed(1) : '-'}</p>
          <p>Overview</p>
          <p>{overview || '-'}</p>
          <p>Genres</p>
          <p>{genres?.map(genre => genre.name).join(', ') || '-'}</p>

          <div>
            Additional information
            <ul>
              <li>
                <NavLink state={state} to="cast">
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink state={state} to="reviews">
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>

          <>
            <Suspense fallback={'...loading'}>
              <Outlet />
            </Suspense>
          </>
        </>
      )}
    </>
  );
};

export default MoviesDetails;

import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import css from './MovieDetails.module.css';
import { getMovieDetailsById, IMAGE_URL } from '../../API';

const MoviesDetails = () => {
  const location = useLocation();
  console.log(location.state);
  const backLinkHref = location.state?.from ?? '/';
  //   const { state } = useLocation();
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
  console.log(location);

  return (
    <div className={css.page}>
      <button type="button" className={css.btn}>
        <Link to={backLinkHref}>Go back</Link>
      </button>
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

          <div className={css.container}>
            Additional information
            <ul>
              <li>
                <NavLink state={location.state} to="cast">
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink state={location.state} to="reviews">
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
    </div>
  );
};

export default MoviesDetails;

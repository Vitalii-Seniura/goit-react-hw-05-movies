import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMovieCastById, IMAGE_URL } from '../../API';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState({});

  useEffect(() => {
    getMovieCastById(movieId)
      .then(results => {
        setMovieCast(results);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <ul>
      {!!movieCast?.cast?.length &&
        movieCast?.cast.map(
          ({
            cast_id,
            profile_path,
            name,
            known_for_department,
            character,
          }) => (
            <li key={cast_id}>
              <div>
                {profile_path ? (
                  <img
                    src={`${IMAGE_URL}w500${profile_path}`}
                    alt={name}
                    className={css.cast_img}
                  />
                ) : (
                  <p>no photo</p>
                )}
              </div>
              <div>
                <p>{name || '-'}</p>
                <p>Character: {character || '-'}</p>
                <p>{known_for_department || '-'}</p>
              </div>
            </li>
          )
        )}
    </ul>
  );
};

export default Cast;

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMovieReviewsById } from '../../API';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState({});

  useEffect(() => {
    getMovieReviewsById(movieId)
      .then(({ results }) => {
        setMovieReviews(results);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <ul>
      {!!movieReviews?.length ? (
        movieReviews.map(({ id, author, content, created_at, updated_at }) => (
          <li key={id}>
            <p>{author}</p>
            <p>Created: {created_at.slice(0, 10).toLocaleString()}</p>
            {updated_at && (
              <p>Updated: {updated_at.slice(0, 10).toLocaleString()}</p>
            )}
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>No Reviews</p>
      )}
    </ul>
  );
};

export default Reviews;

import Loader from 'components/Loader';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/imdbAPI';

import styles from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const { data, isSuccess, isLoading } = useQuery(
    ['credits', movieId],
    fetchReviews
  );

  const handleAvatarPath = url => {
    if (!url) {
      return;
    }

    if (url.startsWith('http', 1)) {
      return url.slice(1);
    }

    return `http://image.tmdb.org/t/p/w45/${url}`;
  };

  return (
    <>
      {isLoading && <Loader color="grey" />}
      {isSuccess && data.results?.length < 0 && (
        <ul className={styles.List}>
          {data.results
            ?.sort((a, b) => b.author_details.rating - a.author_details.rating)
            .map(review => (
              <li key={review.id} className={styles.Item}>
                <div className={styles.Title_block}>
                  {(review.author_details.avatar_path && (
                    <img
                      className={styles.Avatar}
                      src={handleAvatarPath(review.author_details.avatar_path)}
                      alt="Authors avatar"
                    />
                  )) || <div className={styles.Avatar_placeholder}></div>}

                  <p className={styles.Name}>{review.author}</p>
                </div>
                <p className={styles.Content}>{review.content}</p>
              </li>
            ))}
        </ul>
      )}
      {isSuccess && data.results?.length === 0 && <div>No reviews found</div>}
    </>
  );
}

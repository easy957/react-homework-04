import { useQuery } from 'react-query';
import { Link, Outlet, useParams } from 'react-router-dom';

import { searchById } from 'services/imdbAPI';
import { queryClient } from 'index';
import styles from './MoviePage.module.css';

export default function MoviePage({ prevLocation }) {
  const { movieId } = useParams();
  const cache = queryClient.getQueryData();
  const allCacheResults = cache?.pages?.reduce(
    (acc, page) => [...acc, ...page.results],
    []
  );

  const { data } = useQuery(movieId, searchById, {
    initialData: () => {
      return allCacheResults?.find(d => d.id === Number(movieId));
    },
  });

  const getDate = () => {
    const dateObj = new Date(data.first_air_date ?? data.release_date);
    return dateObj.toLocaleDateString();
  };

  return (
    <>
      {data && (
        <div className={styles.Container}>
          <div className={styles.TopInfo}>
            <img
              className={styles.Poster}
              src={`http://image.tmdb.org/t/p/w300/${data.poster_path}`}
              alt={data.title || data.original_name}
            />
            <div className={styles.TopText}>
              <h2 className={[styles.Info, styles.Info_mainTitle].join(' ')}>
                {data.title || data.original_name}
              </h2>
              {data.genres && (
                <p className={styles.Info}>
                  <b className={styles.Info_title}>Genres: </b>
                  {data.genres?.map(g => g.name).join(', ')}
                </p>
              )}
              {(data.first_air_date ?? data.release_date) && (
                <p className={styles.Info}>
                  <b className={styles.Info_title}>Release: </b> {getDate()}
                </p>
              )}

              {data.vote_count && (
                <p className={styles.Info}>
                  <b className={styles.Info_title}>Total votes: </b>
                  {data.vote_count}
                </p>
              )}
              {data.vote_average && (
                <p className={styles.Info}>
                  <b className={styles.Info_title}>Vote average: </b>
                  {data.vote_average}
                </p>
              )}
              {data.homepage && (
                <p className={styles.Info}>
                  <b className={styles.Info_title}>Official homepage: </b>
                  <a className={styles.Link} href={data.homepage}>
                    {data.homepage}
                  </a>
                </p>
              )}
            </div>
          </div>
          <p className={styles.Overview}>
            <b className={styles.Info_title}>Overview: </b> {data.overview}
          </p>
          <Link
            className={styles.Button}
            to={`/movie/${movieId}/credits`}
            replace
          >
            Show credits
          </Link>
          <Link
            className={styles.Button}
            to={`/movie/${movieId}/reviews`}
            replace
          >
            Show reviews
          </Link>
          <Outlet />
          <div>
            <img
              src={`http://image.tmdb.org/t/p/w780${data.backdrop_path}`}
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
}

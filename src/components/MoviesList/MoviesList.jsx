import MovieCard from 'components/MovieCard';
import InfiniteScroll from 'react-infinite-scroller';
import { Link, useLocation } from 'react-router-dom';
import styles from './MoviesList.module.css';

export default function MoviesList({ media, fetchNextPage }) {
  const location = useLocation();

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={fetchNextPage}
      hasMore={true}
      initialLoad={false}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      <ul className={styles.List}>
        {media &&
          media.map(page =>
            page.results.map(el => (
              <li className={styles.Item} key={el.id}>
                <Link to={`/movie/${el.id}`} state={location.pathname}>
                  <MovieCard movie={el} />
                </Link>
              </li>
            ))
          )}
      </ul>
    </InfiniteScroll>
  );
}

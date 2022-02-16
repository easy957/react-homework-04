import Loader from 'components/Loader';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';
import { Link, useSearchParams } from 'react-router-dom';

import { searchByName } from 'services/imdbAPI';
import styles from './SearchPage.module.css';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery(
    ['search', searchQuery],
    searchByName,
    {
      getNextPageParam: (lastPage, pages) => {
        return pages.length < pages[0].total_pages ? lastPage?.page + 1 : false;
      },
      enabled: !!searchQuery,
    }
  );

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements.query.value });
  };

  const getDate = date => {
    const dateObj = new Date(date);
    return dateObj.getFullYear();
  };

  return (
    <>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <input className={styles.Input} type="text" name="query" />
        <button className={styles.Button} type="submit">
          Search
        </button>
      </form>
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchNextPage}
        hasMore={hasNextPage}
        initialLoad={false}
      >
        {data?.pages[0].results.length === 0 && (
          <div className={styles.Placeholder}>Nothing found.</div>
        )}

        {(data?.pages && (
          <ul className={styles.List}>
            {data.pages.map(page =>
              page?.results.map(movie => (
                <li key={movie.id}>
                  <Link className={styles.Link} to={`/movie/${movie.id}`}>
                    {movie.original_title}{' '}
                    <i>
                      ({getDate(movie.first_air_date ?? movie.release_date)})
                    </i>
                  </Link>
                </li>
              ))
            )}
          </ul>
        )) || (
          <div className={styles.Placeholder}>Your results will be here...</div>
        )}
        {isLoading && <Loader />}
      </InfiniteScroll>
    </>
  );
}

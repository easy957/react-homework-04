import { useInfiniteQuery } from 'react-query';

import { fetchTrending } from 'services/imdbAPI';
import MoviesList from 'components/MoviesList';
import Loader from 'components/Loader';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function HomePage({ setPrevLocation }) {
  const { data, fetchNextPage, isLoading } = useInfiniteQuery(
    'media',
    fetchTrending,
    {
      getNextPageParam: (lastPage, pages) => lastPage.page + 1,
    }
  );

  const location = useLocation();
  useEffect(() => {
    setPrevLocation(location);
  }, [location, setPrevLocation]);

  return (
    <>
      {isLoading && <Loader />}
      {data && <MoviesList fetchNextPage={fetchNextPage} media={data?.pages} />}
    </>
  );
}

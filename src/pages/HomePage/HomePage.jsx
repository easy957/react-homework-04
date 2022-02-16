import { useInfiniteQuery } from 'react-query';

import { fetchTrending } from 'services/imdbAPI';
import MoviesList from 'components/MoviesList';
import Loader from 'components/Loader';

export default function HomePage() {
  const { data, fetchNextPage, isLoading } = useInfiniteQuery(
    'media',
    fetchTrending,
    {
      getNextPageParam: (lastPage, pages) => lastPage.page + 1,
    }
  );

  return (
    <>
      {isLoading && <Loader />}
      {data && <MoviesList fetchNextPage={fetchNextPage} media={data?.pages} />}
    </>
  );
}

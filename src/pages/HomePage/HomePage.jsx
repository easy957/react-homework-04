import MoviesList from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/imdbAPI';

export default function HomePage() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetchTrending()
      .then(r => setMedia(r.results))
      .catch(console.log);
  }, []);

  return (
    <>
      <MoviesList media={media} />
    </>
  );
}

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchByName } from 'services/imdbAPI';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleQueryChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  useEffect(() => {
    const searchQuery = searchParams.get('query');

    if (searchQuery) {
      searchByName(searchQuery).then(r => setMovies(r.results));
    }
  }, [searchParams]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleQueryChange} />
      <button type="submit">Search</button>
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.original_title}</li>
          ))}
        </ul>
      )}
    </form>
  );
}

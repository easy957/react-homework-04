const API_KEY = '6457d1a205b4eb4c6e3032d170029025';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Something went wrong'));
}

export function fetchTrending({ pageParam = 1 }) {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${pageParam}`
  );
}

export function searchByName({ queryKey, pageParam = 1 }, filter = 'movie') {
  if (!queryKey[1]) {
    return;
  }

  return fetchWithErrorHandling(
    `${BASE_URL}/search/${filter}?api_key=${API_KEY}&query=${queryKey[1]}&page=${pageParam}`
  );
}

export function searchById({ queryKey }) {
  if (!queryKey) {
    return;
  }

  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${queryKey}?api_key=${API_KEY}`
  );
}

export function fetchCredits({ queryKey }) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${queryKey[1]}/credits?api_key=${API_KEY}`
  );
}

export function fetchReviews({ queryKey }) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${queryKey[1]}/reviews?api_key=${API_KEY}`
  );
}

// get config
// fetch(`
// https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`)
//   .then(r => r.json())
//   .then(console.log);

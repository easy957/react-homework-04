const API_KEY = '6457d1a205b4eb4c6e3032d170029025';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Something went wrong'));
}

export function fetchTrending(type = 'all', time = 'week') {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/${type}/${time}?api_key=${API_KEY}`
  );
}

export function searchByName(title = '', filter = 'movie') {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/${filter}?api_key=${API_KEY}&query=${title}`
  );
}

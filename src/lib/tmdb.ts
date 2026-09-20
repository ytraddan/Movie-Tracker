import { HomeTab, TMDB_AUTH_TOKEN, TMDB_BASE_URL } from "./constants";
import { MovieDetails, PaginatedMovies } from "./tmdb-types";

function getAuthHeaders() {
  if (!TMDB_AUTH_TOKEN) {
    throw new Error("TMDB_API_READ_ACCESS_TOKEN is not set in .env");
  }
  return {
    Authorization: `Bearer ${TMDB_AUTH_TOKEN}`,
  };
}

export async function fetchMovies(
  category: HomeTab,
  page: number,
): Promise<PaginatedMovies> {
  const res = await fetch(`${TMDB_BASE_URL}/movie/${category}?page=${page}`, {
    headers: getAuthHeaders(),
    next: { revalidate: 60 * 60 },
  });

  if (!res.ok) {
    throw new Error(`TMDB fetchMovies failed: ${res.status}`);
  }

  return res.json();
}

export async function fetchMovieDetails(
  id: string,
): Promise<MovieDetails | null> {
  const res = await fetch(
    `${TMDB_BASE_URL}/movie/${id}?append_to_response=credits`,
    {
      headers: getAuthHeaders(),
      next: { revalidate: 60 * 60 * 24 },
    },
  );

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error(`TMDB fetchMovieDetails failed: ${res.status}`);
  }

  return res.json();
}

export async function fetchSimilarMovies(id: string): Promise<PaginatedMovies> {
  const res = await fetch(`${TMDB_BASE_URL}/movie/${id}/similar`, {
    headers: getAuthHeaders(),
    next: { revalidate: 60 * 60 * 24 },
  });

  if (!res.ok) {
    throw new Error(`TMDB fetchSimilarMovies failed: ${res.status}`);
  }

  return res.json();
}

export async function fetchMoviesByQuery(
  query: string,
): Promise<PaginatedMovies> {
  const res = await fetch(
    `${TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`,
    {
      headers: getAuthHeaders(),
      next: { revalidate: 60 * 5 },
    },
  );

  if (!res.ok) {
    throw new Error(`TMDB fetchMoviesByQuery failed: ${res.status}`);
  }

  return res.json();
}

import { TMDB_AUTH_TOKEN, TMDB_BASE_URL } from "./constants";
import { MovieDetails, PaginatedMovies } from "./tmdb-types";

export async function fetchTrending(page: number): Promise<PaginatedMovies> {
  const res = await fetch(
    `${TMDB_BASE_URL}/movie/popular?language=en-US&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${TMDB_AUTH_TOKEN}`,
      },
      next: { revalidate: 60 * 60 },
    },
  );

  if (!res.ok) {
    throw new Error(`TMDB fetchTrending failed: ${res.status}`);
  }

  return res.json();
}

export async function fetchMovieDetails(
  id: string,
): Promise<MovieDetails | null> {
  const res = await fetch(
    `${TMDB_BASE_URL}/movie/${id}?append_to_response=credits`,
    {
      headers: {
        Authorization: `Bearer ${TMDB_AUTH_TOKEN}`,
      },
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
    headers: {
      Authorization: `Bearer ${TMDB_AUTH_TOKEN}`,
    },
    next: { revalidate: 60 * 60 * 24 },
  });

  if (!res.ok) {
    throw new Error(`TMDB fetchSimilarMovies failed: ${res.status}`);
  }

  return res.json();
}

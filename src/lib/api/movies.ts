import { MovieDetails, PaginatedMovies } from "@/lib/tmdb-types";

export async function searchMovies(query: string): Promise<PaginatedMovies> {
  const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);

  if (!res.ok) {
    throw new Error(`Failed to complete the search ${res.status}`);
  }

  return res.json();
}

export async function getMovieDetails(id: number): Promise<MovieDetails> {
  const res = await fetch(`/api/movie/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to load movie ${res.status}`);
  }

  return res.json();
}

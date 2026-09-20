import { PaginatedMovies } from "@/lib/tmdb-types";

export async function searchMovies(query: string): Promise<PaginatedMovies> {
  const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);

  if (!res.ok) {
    throw new Error(`Failed to complete the search ${res.status}`);
  }

  return res.json();
}

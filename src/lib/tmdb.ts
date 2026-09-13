import { TMDB_AUTH_TOKEN, TMDB_BASE_URL } from "./constants";
import { TrendingResponse } from "./tmdb-types";

export async function fetchTrending(page: number): Promise<TrendingResponse> {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_AUTH_TOKEN}`,
    },
    next: { revalidate: 3600 },
  };

  const res = await fetch(
    `${TMDB_BASE_URL}/movie/popular?language=en-US&page=${page}`,
    options,
  );

  if (!res.ok) {
    throw new Error(`TMDB error: ${res.status}`);
  }

  return res.json();
}

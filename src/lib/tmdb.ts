import { TMDB_AUTH_TOKEN, TMDB_BASE_URL } from "./constants";
import { Movie } from "./tmdb-types";

export async function GetPopularMovies(): Promise<Movie[]> {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_AUTH_TOKEN}`,
    },
  };
  return await fetch(
    `${TMDB_BASE_URL}/movie/popular?language=en-US&page=1`,
    options,
  )
    .then((res) => res.json())
    .then((res) => res.results)
    .catch((err) => console.error(err));
}

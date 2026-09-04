import { GetPopularMovies } from "@/lib/tmdb";
import styles from "./page.module.css";
import MovieCard from "@/components/movieCard/MovieCard";

export default async function Home() {
  const movies = await GetPopularMovies();

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.page}>
      <ul className={styles.ul}>
        {movies.map((movie) => (
          <li key={movie.id} className={styles.li}>
            <MovieCard {...movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}

import { fetchTrending } from "@/lib/tmdb";
import styles from "./page.module.css";
import MovieCard from "@/components/movieCard/MovieCard";
import Pagination from "@/components/pagination/Pagination";

interface HomePageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const { results: movies, total_pages } = await fetchTrending(currentPage);

  return (
    <section className={styles.page}>
      <ul className={styles.ul}>
        {movies.map((movie) => (
          <li key={movie.id} className={styles.li}>
            <MovieCard {...movie} />
          </li>
        ))}
      </ul>
      <Pagination currentPage={currentPage} totalPages={total_pages} />
    </section>
  );
}

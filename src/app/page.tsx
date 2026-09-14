import { fetchTrending } from "@/lib/tmdb";
import styles from "./page.module.css";
import Pagination from "@/components/pagination/Pagination";
import MovieGrid from "@/components/movieGrid/MovieGrid";

interface HomePageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const { results: movies, total_pages } = await fetchTrending(currentPage);

  return (
    <section className={styles.homePage}>
      <MovieGrid movies={movies} />
      <Pagination currentPage={currentPage} totalPages={total_pages} />
    </section>
  );
}

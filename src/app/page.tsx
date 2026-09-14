import { fetchMovies } from "@/lib/tmdb";
import styles from "./page.module.css";
import Pagination from "@/components/pagination/Pagination";
import MovieGrid from "@/components/movieGrid/MovieGrid";
import { Category } from "@/lib/tmdb-types";
import { CATEGORIES } from "@/lib/constants";
import Tabs from "@/components/tabs/TabList";

interface HomePageProps {
  searchParams: Promise<{ page?: string; tab?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { page, tab } = await searchParams;

  const currentPage = Number(page) || 1;
  const category = CATEGORIES.includes(tab as Category)
    ? (tab as Category)
    : "popular";

  const { results: movies, total_pages } = await fetchMovies(
    category,
    currentPage,
  );

  return (
    <section className={styles.homePage}>
      <Tabs activeTab={category} />
      <MovieGrid movies={movies} />
      <Pagination
        currentPage={currentPage}
        totalPages={total_pages}
        activeTab={category}
      />
    </section>
  );
}

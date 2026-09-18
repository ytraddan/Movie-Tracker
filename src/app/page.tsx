import { getHomeTabId } from "@/lib/utils";
import { fetchMovies } from "@/lib/tmdb";
import { HOME_TABS } from "@/lib/constants";
import Pagination from "@/components/pagination/Pagination";
import MovieGrid from "@/components/movieGrid/MovieGrid";
import Tabs from "@/components/tabs/Tabs";
import styles from "./page.module.css";
import BackgroundImage from "@/components/backgroundImage/BackgroundImage";

interface HomePageProps {
  searchParams: Promise<{ page?: string; tab?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { page, tab } = await searchParams;

  const currentPage = Number(page) || 1;
  const activeTab = getHomeTabId(tab);

  const { results: movies, total_pages } = await fetchMovies(
    activeTab,
    currentPage,
  );

  return (
    <section className={styles.homePage}>
      <BackgroundImage path="/background.png" />
      <Tabs tabs={HOME_TABS} activeTab={activeTab} basePath="/" />
      <MovieGrid movies={movies} />
      <Pagination
        currentPage={currentPage}
        totalPages={total_pages}
        activeTab={activeTab}
      />
    </section>
  );
}

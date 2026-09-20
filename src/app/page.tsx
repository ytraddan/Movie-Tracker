import { getCurrentPage, getHomeTabId } from "@/lib/utils";
import { fetchMovies } from "@/lib/tmdb";
import { HOME_TABS, TMDB_MAX_PAGE } from "@/lib/constants";
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

  const currentPage = getCurrentPage(page);
  const activeTab = getHomeTabId(tab);

  const { results, total_pages } = await fetchMovies(activeTab, currentPage);

  return (
    <section className={styles.homePage}>
      <BackgroundImage path="/home-background.png" />
      <Tabs tabs={HOME_TABS} activeTab={activeTab} basePath="/" />
      <MovieGrid movies={results} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.min(total_pages, TMDB_MAX_PAGE)}
        activeTab={activeTab}
      />
    </section>
  );
}

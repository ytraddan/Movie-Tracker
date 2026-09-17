import { fetchMovies } from "@/lib/tmdb";
import styles from "./page.module.css";
import Pagination from "@/components/pagination/Pagination";
import MovieGrid from "@/components/movieGrid/MovieGrid";
import { HOME_TABS } from "@/lib/constants";
import Tabs from "@/components/tabs/Tabs";
import Image from "next/image";
import { getHomeTabId } from "@/lib/utils";

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
      <div className={styles.pageBackground}>
        <Image
          src="/theater.jpg"
          alt="background image of a dark cinema"
          fill
          priority
          className={styles.pageBackgroundImage}
        />
        <div className={styles.pageBackgroundOverlay} />
      </div>

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

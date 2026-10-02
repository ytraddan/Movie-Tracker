import styles from "./similarMoviesSkeleton.module.css";
import scrollStyles from "@/styles/scrollSection.module.css";

interface SimilarMoviesSkeletonProps {
  itemsCount: number;
}

export function SimilarMoviesSkeleton({
  itemsCount,
}: SimilarMoviesSkeletonProps) {
  return (
    <section className={scrollStyles.scrollSection} aria-busy="true">
      <h2>Similar Movies</h2>
      <ul aria-hidden="true">
        {Array.from({ length: itemsCount }).map((_, index) => (
          <li key={index} className={styles.skeletonCard} />
        ))}
      </ul>
    </section>
  );
}

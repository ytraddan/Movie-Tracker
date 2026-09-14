import styles from "./similarMoviesSkeleton.module.css";

interface SimilarMoviesSkeletonProps {
  itemsCount: number;
}

export function SimilarMoviesSkeleton({
  itemsCount,
}: SimilarMoviesSkeletonProps) {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Similar Movies</h2>
      <div className={styles.grid}>
        {Array.from({ length: itemsCount }).map((_, index) => (
          <div key={index} className={styles.skeletonCard} />
        ))}
      </div>
    </section>
  );
}

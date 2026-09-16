import styles from "./dropdownSkeleton.module.css";

export default function DropdownSkeleton() {
  return (
    <ul className={styles.movieList}>
      {Array.from({ length: 7 }).map((_, index) => (
        <li key={index}>
          <div className={styles.movie} />
        </li>
      ))}
    </ul>
  );
}

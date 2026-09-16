import SearchResultItem from "./SearchResultItem";
import { Movie } from "@/lib/tmdb-types";
import styles from "./searchDropdown.module.css";
import DropdownSkeleton from "../skeletons/DropdownSkeleton";

interface SearchDropdownProps {
  isLoading: boolean;
  isError: boolean;
  movies: Movie[];
  onSelect: () => void;
}

export default function SearchDropdown({
  isLoading,
  isError,
  movies,
  onSelect,
}: SearchDropdownProps) {
  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        <DropdownSkeleton />
      </div>
    );
  }
  if (isError) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.error}>Failed to load results</div>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.error}>No results found</div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.movieList}>
        {movies.map((movie) => (
          <li key={movie.id} onClick={onSelect}>
            <SearchResultItem movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}

import SearchResultItem from "./SearchResultItem";
import { Movie } from "@/lib/tmdb-types";
import styles from "./searchDropdown.module.css";
import DropdownSkeleton from "../skeletons/DropdownSkeleton";

interface SearchDropdownProps {
  listboxId: string;
  isLoading: boolean;
  isError: boolean;
  movies?: Movie[];
  onSelect: () => void;
}

export default function SearchDropdown({
  listboxId,
  isLoading,
  isError,
  movies,
  onSelect,
}: SearchDropdownProps) {
  if (isLoading) {
    return (
      <div className={styles.wrapper} role="status" aria-live="polite">
        <span className="sr-only">Loading results…</span>
        <DropdownSkeleton />
      </div>
    );
  }
  if (isError) {
    return (
      <div className={styles.wrapper} role="alert">
        <span className={styles.error}>Failed to load results</span>
      </div>
    );
  }
  if (!movies || movies.length === 0) {
    return (
      <div className={styles.wrapper} role="status" aria-live="polite">
        <span className={styles.error}>No results found</span>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <p className="sr-only" role="status" aria-live="polite">
        {movies.length} result{movies.length === 1 ? "" : "s"} found
      </p>
      <ul
        className={styles.movieList}
        role="listbox"
        id={listboxId}
        aria-label="Search results"
      >
        {movies.map((movie) => (
          <li
            key={movie.id}
            role="option"
            aria-selected="false"
            onClick={onSelect}
          >
            <SearchResultItem movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}

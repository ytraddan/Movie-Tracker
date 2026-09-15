import SearchResultItem from "./SearchResultItem";
import { Movie } from "@/lib/tmdb-types";
import styles from "./searchDropdown.module.css";

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
  return (
    <div className={styles.wrapper}>
      {isLoading && <div className="">Loading...</div>}

      {isError && <div className="">Failed to load results</div>}

      {!isLoading && !isError && movies.length === 0 && (
        <div className="">No results found</div>
      )}

      {!isLoading && (
        <ul className={styles.movieList}>
          {movies.map((movie) => (
            <li key={movie.id} onClick={onSelect}>
              <SearchResultItem movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

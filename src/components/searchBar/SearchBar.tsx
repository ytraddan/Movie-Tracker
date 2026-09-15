import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import styles from "./searchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search for movies, TV shows..."
      />
      <MagnifyingGlassIcon className={styles.icon} />
    </div>
  );
}

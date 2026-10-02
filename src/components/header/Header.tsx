import Link from "next/link";
import styles from "./header.module.css";
import SearchBar from "@/components/searchBar/SearchBar";
import { BookmarkIcon } from "@heroicons/react/24/solid";

import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main">
        <Link href="/" className={styles.logo}>
          <Image
            className={styles.logoIcon}
            src="/movie.svg"
            alt=""
            width={30}
            height={30}
          />
          <span className={styles.title}>
            Movie <span className={styles.highlighted}>Tracker</span>
          </span>
        </Link>

        <SearchBar />

        <Link href={"/collection"} className={styles.collectionButton}>
          <span className={styles.collectionText}>My Collection</span>
          <BookmarkIcon className={styles.bookmarkIcon} aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}

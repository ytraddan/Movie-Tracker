import Link from "next/link";
import styles from "./header.module.css";
import SearchBar from "@/components/searchBar/SearchBar";
import { BookmarkIcon } from "@heroicons/react/24/solid";

import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image
            className={styles.logoIcon}
            src="/movie.svg"
            alt="Movie icon"
            width={30}
            height={30}
          />
          <div className={styles.title}>
            <span> Movie </span>
            <span className={styles.highlighted}>Tracker</span>
          </div>
        </Link>

        <SearchBar />

        <Link href={"/collection"} className={styles.collectionButton}>
          <span className={styles.collectionText}>My Collection</span>
          <BookmarkIcon className={styles.bookmarkIcon} />
        </Link>
      </header>
    </div>
  );
}

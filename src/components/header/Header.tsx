import Link from "next/link";
import styles from "./header.module.css";
import SearchBar from "@/components/searchBar/SearchBar";
import FavoriteButton from "@/components/favoriteButton/FavoriteButton";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link href="/" className={styles.title}>
          <Image
            className={styles.logo}
            src="/movie.svg"
            alt="Movie icon"
            width={30}
            height={30}
          />
          <div>
            <span>Movie </span>
            <span className={styles.highlighted}>Tracker</span>
          </div>
        </Link>
        <SearchBar />
        <FavoriteButton />
      </header>
    </div>
  );
}

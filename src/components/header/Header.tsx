import Link from "next/link";
import styles from "./header.module.css";
import SearchBar from "@/components/searchBar/SearchBar";
import FavoriteButton from "@/components/favoriteButton/FavoriteButton";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.title}>
        <Image
          className={styles.logo}
          src="/movie.svg"
          alt="Movie icon"
          width={24}
          height={24}
        />
        <span>Movie Tracker</span>
      </Link>
      <SearchBar />
      <FavoriteButton />
    </header>
  );
}

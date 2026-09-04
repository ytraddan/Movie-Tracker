import Link from "next/link";
import styles from "./header.module.css";
import SearchBar from "@/components/searchBar/SearchBar";
import FavoriteButton from "@/components/favoriteButton/FavoriteButton";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">Movie Tracker</Link>
      <SearchBar />
      <FavoriteButton />
    </header>
  );
}

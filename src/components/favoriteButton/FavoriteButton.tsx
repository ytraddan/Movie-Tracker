import { BookmarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import styles from "./favoriteButton.module.css";

export default function FavoriteButton() {
  return (
    <Link href={"/favorites"} className={styles.button}>
      <BookmarkIcon className={styles.heartIcon} />
    </Link>
  );
}

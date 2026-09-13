import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "./not-found.module.css";

export default async function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>Movie not found</h1>
      <Link href="/" className={styles.button}>
        <ChevronLeftIcon className={styles.arrowIcon} />
        <span className={styles.text}>Go back</span>
      </Link>
    </div>
  );
}

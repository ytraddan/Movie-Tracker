import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import styles from "./pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const isFirst = currentPage <= 1;
  const isLast = currentPage >= totalPages;

  return (
    <nav className={styles.pagination}>
      {isFirst ? (
        <span className={styles.button} aria-disabled="true">
          <ChevronLeftIcon className={styles.arrowIcon} />
          <span className={`${styles.buttonText} ${styles.left}`}>Back</span>
        </span>
      ) : (
        <Link className={styles.button} href={`/?page=${currentPage - 1}`}>
          <ChevronLeftIcon className={styles.arrowIcon} />
          <span className={`${styles.buttonText} ${styles.left}`}>Back</span>
        </Link>
      )}

      <span className={styles.pageNumber}>
        {currentPage} / {totalPages}
      </span>

      {isLast ? (
        <span className={styles.button} aria-disabled="true">
          <span className={`${styles.buttonText} ${styles.right}`}>Next</span>
          <ChevronRightIcon className={styles.arrowIcon} />
        </span>
      ) : (
        <Link className={styles.button} href={`/?page=${currentPage + 1}`}>
          <span className={`${styles.buttonText} ${styles.right}`}>Next</span>
          <ChevronRightIcon className={styles.arrowIcon} />
        </Link>
      )}
    </nav>
  );
}

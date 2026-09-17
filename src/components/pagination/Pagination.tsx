import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import styles from "./pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  activeTab: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  activeTab,
}: PaginationProps) {
  const isFirst = currentPage <= 1;
  const isLast = currentPage >= totalPages;

  function buildSearchParams(page: number) {
    return new URLSearchParams({
      tab: activeTab,
      page: String(page),
    }).toString();
  }

  return (
    <nav className={styles.pagination}>
      {isFirst ? (
        <span className={styles.button} aria-disabled="true">
          <ChevronLeftIcon className={styles.arrowIcon} />
          <span className={`${styles.buttonText} ${styles.left}`}>Back</span>
        </span>
      ) : (
        <Link
          className={styles.button}
          href={`/?${buildSearchParams(currentPage - 1)}`}
        >
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
        <Link
          className={styles.button}
          href={`/?${buildSearchParams(currentPage + 1)}`}
        >
          <span className={`${styles.buttonText} ${styles.right}`}>Next</span>
          <ChevronRightIcon className={styles.arrowIcon} />
        </Link>
      )}
    </nav>
  );
}

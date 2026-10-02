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
    <nav className={styles.pagination} aria-label="Movie list pagination">
      {isFirst ? (
        <button className={styles.button} disabled>
          <ChevronLeftIcon className={styles.arrowIcon} aria-hidden="true" />
          <span className={`${styles.buttonText} ${styles.left}`}>Back</span>
        </button>
      ) : (
        <Link
          className={styles.button}
          href={`/?${buildSearchParams(currentPage - 1)}`}
        >
          <ChevronLeftIcon className={styles.arrowIcon} aria-hidden="true" />
          <span className={`${styles.buttonText} ${styles.left}`}>Back</span>
        </Link>
      )}

      <p className={styles.pageNumber}>
        <span className="sr-only">
          Page {currentPage} of {totalPages}
        </span>
        <span aria-hidden="true">
          {currentPage} / {totalPages}
        </span>
      </p>

      {isLast ? (
        <button className={styles.button} disabled>
          <span className={`${styles.buttonText} ${styles.right}`}>Next</span>
          <ChevronRightIcon className={styles.arrowIcon} aria-hidden="true" />
        </button>
      ) : (
        <Link
          className={styles.button}
          href={`/?${buildSearchParams(currentPage + 1)}`}
        >
          <span className={`${styles.buttonText} ${styles.right}`}>Next</span>
          <ChevronRightIcon className={styles.arrowIcon} aria-hidden="true" />
        </Link>
      )}
    </nav>
  );
}

import Link from "next/link";
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
          Previous
        </span>
      ) : (
        <Link className={styles.button} href={`/?page=${currentPage - 1}`}>
          Previous
        </Link>
      )}

      <span>
        {currentPage}/{totalPages}
      </span>

      {isLast ? (
        <span className={styles.button} aria-disabled="true">
          Next
        </span>
      ) : (
        <Link className={styles.button} href={`/?page=${currentPage + 1}`}>
          Next
        </Link>
      )}
    </nav>
  );
}

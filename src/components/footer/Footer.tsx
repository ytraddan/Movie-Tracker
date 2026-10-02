import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.about}>
          <p className={styles.title}>
            Movie <span className={styles.highlighted}>Tracker</span>
          </p>
          <p className={styles.description}>
            Built with Next.js, TypeScript, Zustand and TanStack Query
          </p>
        </div>

        <nav className={styles.links} aria-label="Footer">
          <a
            href="https://github.com/ytraddan/movie-tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code
          </a>
          <a
            href="https://github.com/ytraddan"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Github
          </a>
        </nav>
      </div>
    </footer>
  );
}

import styles from "./spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles.wrapper} role="status" aria-live="polite">
      <div className={styles.spinner} aria-hidden="true" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}

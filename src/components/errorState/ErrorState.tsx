import styles from "./errorState.module.css";

interface ErrorStateProps {
  title: string;
  message: string;
  onRetry: () => void;
}

export default function ErrorState({
  title,
  message,
  onRetry,
}: ErrorStateProps) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.message}>{message}</p>
      <button type="button" onClick={onRetry} className={styles.button}>
        Try again
      </button>
    </div>
  );
}

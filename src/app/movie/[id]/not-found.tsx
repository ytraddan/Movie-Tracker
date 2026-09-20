import styles from "./not-found.module.css";
import BackButton from "@/components/backButton/BackButton";

export default async function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>Movie not found</h1>
      <p className={styles.message}>
        The page you are looking for doesn&apos;t exist
      </p>
      <BackButton />
    </div>
  );
}

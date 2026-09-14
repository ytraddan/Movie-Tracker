"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import styles from "./backButton.module.css";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={styles.button}
    >
      <ArrowLeftIcon className={styles.arrowIcon} />
      <span className={styles.text}>Go back</span>
    </button>
  );
}

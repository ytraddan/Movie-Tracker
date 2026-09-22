"use client";

import { ComponentType, SVGProps } from "react";
import useHydrated from "@/hooks/useHydrated";
import styles from "./actionButton.module.css";

interface ActionButtonProps {
  variant: "favorite" | "watchlist" | "watched";
  isActive: boolean;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  onClick: () => void;
}

export default function ActionButton({
  variant,
  isActive,
  icon: Icon,
  label,
  onClick,
}: ActionButtonProps) {
  const isHydrated = useHydrated();

  if (!isHydrated) {
    return <div className={styles.button} />;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${styles[variant]}`}
    >
      <Icon className={`${styles.icon} ${isActive ? styles.solid : ""}`} />
      <span>{label}</span>
    </button>
  );
}

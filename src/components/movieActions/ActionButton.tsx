import { ComponentType, SVGProps } from "react";
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

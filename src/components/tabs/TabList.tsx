import { Category } from "@/lib/tmdb-types";
import { CATEGORIES, CATEGORY_LABELS } from "@/lib/constants";
import Link from "next/link";
import styles from "./tabList.module.css";

interface TabListProps {
  activeTab: Category;
}

export default function Tabs({ activeTab }: TabListProps) {
  return (
    <nav className={styles.tabList}>
      {CATEGORIES.map((tab) => (
        <Link
          className={`${styles.tab} ${tab == activeTab ? styles.active : ""}`}
          key={tab}
          href={`/?tab=${tab}`}
        >
          {CATEGORY_LABELS[tab]}
        </Link>
      ))}
    </nav>
  );
}

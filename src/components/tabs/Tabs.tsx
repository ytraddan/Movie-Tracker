import Link from "next/link";
import styles from "./tabs.module.css";
import { Tab } from "@/lib/types";

interface TabsProps<T extends string> {
  tabs: readonly Tab<T>[];
  activeTab: T;
  basePath: string;
  navLabel: string;
  counts?: Record<T, number | string>;
}

export default function Tabs<T extends string>({
  tabs,
  activeTab,
  basePath,
  counts,
  navLabel,
}: TabsProps<T>) {
  return (
    <nav className={styles.tabList} aria-label={navLabel}>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = tab.id == activeTab;

        return (
          <Link
            className={`${styles.tab} ${isActive ? styles.active : ""}`}
            href={`${basePath}?tab=${tab.id}`}
            key={tab.id}
            scroll={false}
            aria-current={isActive ? "page" : undefined}
          >
            {Icon && <Icon className={styles.icon} aria-hidden="true" />}
            <span>{tab.label}</span>
            {counts && <span className={styles.count}>{counts[tab.id]}</span>}
          </Link>
        );
      })}
    </nav>
  );
}

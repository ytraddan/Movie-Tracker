import Link from "next/link";
import styles from "./tabs.module.css";
import { TabConfig } from "@/lib/constants";

interface TabsProps<T extends string> {
  tabs: TabConfig<T>[];
  activeTab: T;
  basePath: string;
  counts?: Record<T, number | string>;
}

export default function Tabs<T extends string>({
  tabs,
  activeTab,
  basePath,
  counts,
}: TabsProps<T>) {
  return (
    <nav className={styles.tabList}>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <Link
            className={`${styles.tab} ${tab.id == activeTab ? styles.active : ""}`}
            href={`${basePath}?tab=${tab.id}`}
            key={tab.id}
            scroll={false}
          >
            {Icon && <Icon className={styles.icon} />}
            <span>{tab.label}</span>
            {counts && <span className={styles.count}>{counts[tab.id]}</span>}
          </Link>
        );
      })}
    </nav>
  );
}

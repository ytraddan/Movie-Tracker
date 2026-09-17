import Link from "next/link";
import styles from "./tabs.module.css";

interface TabConfig<T extends string> {
  id: T;
  label: string;
}

interface TabsProps<T extends string> {
  tabs: TabConfig<T>[];
  activeTab: T;
  basePath: string;
}

export default function Tabs<T extends string>({
  tabs,
  activeTab,
  basePath,
}: TabsProps<T>) {
  return (
    <nav className={styles.tabList}>
      {tabs.map((tab) => (
        <Link
          className={`${styles.tab} ${tab.id == activeTab ? styles.active : ""}`}
          href={`${basePath}?tab=${tab.id}`}
          key={tab.id}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}

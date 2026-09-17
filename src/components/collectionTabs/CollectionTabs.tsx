"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCollectionStore } from "@/store/useCollectionStore";
import { COLLECTION_TABS, CollectionTab } from "@/lib/constants";
import { useEffect, useState } from "react";
import styles from "./collectionTabs.module.css";

interface CollectionTabsProps {
  activeTab: CollectionTab;
}

export default function CollectionTabs({ activeTab }: CollectionTabsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [hydrated, setHydrated] = useState(false);

  const favoritesCount = useCollectionStore(
    (s) => Object.keys(s.favorites).length,
  );
  const watchLaterCount = useCollectionStore(
    (s) => Object.keys(s.watchLater).length,
  );
  const watchedCount = useCollectionStore((s) => Object.keys(s.watched).length);

  const counts: Record<CollectionTab, number> = {
    favorites: favoritesCount,
    watchLater: watchLaterCount,
    watched: watchedCount,
  };

  const handleTabClick = (tab: CollectionTab) => {
    router.replace(`${pathname}?tab=${tab}`, { scroll: false });
  };

  useEffect(
    () =>
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHydrated(true),
    [],
  );

  return (
    <nav className={styles.tabList}>
      {COLLECTION_TABS.map((tab) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            type="button"
            className={`${styles.tab} ${tab.id === activeTab ? styles.active : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            <Icon className={styles.icon} />
            <span>{tab.label}</span>
            <span className={styles.count}>{hydrated && counts[tab.id]}</span>
          </button>
        );
      })}
    </nav>
  );
}

"use client";

import MovieGrid from "@/components/movieGrid/MovieGrid";
import { CollectionTab } from "@/lib/constants";
import { useCollectionStore } from "@/store/useCollectionStore";
import { useEffect, useMemo, useState } from "react";
import styles from "./collectionList.module.css";

interface CollectionListProps {
  tab: CollectionTab;
  emptyMessage: string;
}

export default function CollectionList({
  tab,
  emptyMessage,
}: CollectionListProps) {
  const [hydrated, setHydrated] = useState(false);

  const items = useCollectionStore((s) => s[tab]);

  const sorted = useMemo(
    () => Object.values(items).sort((a, b) => b.addedAt - a.addedAt),
    [items],
  );

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setHydrated(true), []);

  if (!hydrated) {
    return null;
  }

  if (sorted.length == 0) {
    return <p className={styles.empty}>{emptyMessage}</p>;
  }

  return (
    <div className={styles.wrapper}>
      <MovieGrid movies={sorted} />
    </div>
  );
}

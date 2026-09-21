"use client";

import MovieGrid from "@/components/movieGrid/MovieGrid";
import { useCollectionStore } from "@/store/useCollectionStore";
import { CollectionTabId } from "@/lib/types";
import useHydrated from "@/hooks/useHydrated";
import { useMemo } from "react";
import styles from "./collectionList.module.css";

interface CollectionListProps {
  tab: CollectionTabId;
  emptyMessage: string;
}

export default function CollectionList({
  tab,
  emptyMessage,
}: CollectionListProps) {
  const isHydrated = useHydrated();

  const items = useCollectionStore((s) => s[tab]);

  const sorted = useMemo(
    () => Object.values(items).sort((a, b) => b.addedAt - a.addedAt),
    [items],
  );

  if (!isHydrated) {
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

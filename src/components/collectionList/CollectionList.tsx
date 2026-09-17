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
  const favorites = useCollectionStore((s) => s.favorites);
  const watchLater = useCollectionStore((s) => s.watchLater);
  const watched = useCollectionStore((s) => s.watched);

  const [hydrated, setHydrated] = useState(false);

  useEffect(
    () =>
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHydrated(true),
    [],
  );

  const items = useMemo(() => {
    const map = { favorites, watchLater, watched }[tab];
    return Object.values(map).sort((a, b) => b.addedAt - a.addedAt);
  }, [tab, favorites, watchLater, watched]);

  if (!hydrated) {
    return null;
  }

  if (items.length == 0) {
    return <p className={styles.empty}>{emptyMessage}</p>;
  }

  return (
    <div className={styles.wrapper}>
      <MovieGrid movies={items} />
    </div>
  );
}

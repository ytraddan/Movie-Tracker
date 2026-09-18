"use client";

import { useCollectionStore } from "@/store/useCollectionStore";
import { COLLECTION_TABS, CollectionTab } from "@/lib/constants";
import Tabs from "@/components/tabs/Tabs";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";

interface CollectionTabsProps {
  activeTab: CollectionTab;
  basePath: string;
}

export default function CollectionTabs({
  activeTab,
  basePath,
}: CollectionTabsProps) {
  const [hydrated, setHydrated] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setHydrated(true), []);

  const counts = useCollectionStore(
    useShallow((s) => ({
      favorites: hydrated ? Object.keys(s.favorites).length : "",
      watchLater: hydrated ? Object.keys(s.watchLater).length : "",
      watched: hydrated ? Object.keys(s.watched).length : "",
    })),
  );

  return (
    <Tabs
      tabs={COLLECTION_TABS}
      activeTab={activeTab}
      basePath={basePath}
      counts={counts}
    />
  );
}

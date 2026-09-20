"use client";

import { useCollectionStore } from "@/store/useCollectionStore";
import { COLLECTION_TABS, CollectionTab } from "@/lib/constants";
import Tabs from "@/components/tabs/Tabs";
import { useShallow } from "zustand/shallow";
import useHydrated from "@/hooks/useHydrated";

interface CollectionTabsProps {
  activeTab: CollectionTab;
  basePath: string;
}

export default function CollectionTabs({
  activeTab,
  basePath,
}: CollectionTabsProps) {
  const isHydrated = useHydrated();

  const counts = useCollectionStore(
    useShallow((s) => ({
      favorites: isHydrated ? Object.keys(s.favorites).length : "",
      watchLater: isHydrated ? Object.keys(s.watchLater).length : "",
      watched: isHydrated ? Object.keys(s.watched).length : "",
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

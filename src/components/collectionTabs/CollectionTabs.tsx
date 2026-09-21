"use client";

import { useCollectionStore } from "@/store/useCollectionStore";
import { COLLECTION_TABS } from "@/lib/constants";
import Tabs from "@/components/tabs/Tabs";
import { useShallow } from "zustand/shallow";
import useHydrated from "@/hooks/useHydrated";
import { CollectionTabId } from "@/lib/types";

interface CollectionTabsProps {
  activeTab: CollectionTabId;
}

export default function CollectionTabs({ activeTab }: CollectionTabsProps) {
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
      basePath={"/collection"}
      counts={counts}
    />
  );
}

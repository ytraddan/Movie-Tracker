import CollectionList from "@/components/collectionList/CollectionList";
import BackgroundImage from "@/components/backgroundImage/BackgroundImage";
import CollectionTabs from "@/components/collectionTabs/CollectionTabs";
import { getCurrentTab } from "@/lib/utils";
import { COLLECTION_TABS } from "@/lib/constants";
import styles from "./page.module.css";

interface CollectionPage {
  searchParams: Promise<{ tab?: string }>;
}

export default async function CollectionPage({ searchParams }: CollectionPage) {
  const { tab } = await searchParams;

  const { id: activeTab, emptyMessage } = getCurrentTab(COLLECTION_TABS, tab);

  return (
    <section className={styles.wrapper}>
      <BackgroundImage path="/collection-background.png" />
      <CollectionTabs activeTab={activeTab} />
      <CollectionList tab={activeTab} emptyMessage={emptyMessage} />
    </section>
  );
}

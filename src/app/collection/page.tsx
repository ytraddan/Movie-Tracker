import CollectionList from "@/components/collectionList/CollectionList";
import CollectionTabs from "@/components/collectionTabs/CollectionTabs";
import styles from "./page.module.css";
import { getCollectionTab } from "@/lib/utils";
import BackgroundImage from "@/components/backgroundImage/BackgroundImage";

interface CollectionPage {
  searchParams: Promise<{ page?: string; tab?: string }>;
}

export default async function CollectionPage({ searchParams }: CollectionPage) {
  const { tab } = await searchParams;

  const { id, emptyMessage } = getCollectionTab(tab);

  return (
    <section className={styles.wrapper}>
      <BackgroundImage path="/background.png" />
      <CollectionTabs activeTab={id} />
      <CollectionList tab={id} emptyMessage={emptyMessage} />
    </section>
  );
}

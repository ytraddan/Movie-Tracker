import { COLLECTION_TABS, HOME_TABS, TMDB_IMAGE_BASE_URL } from "./constants";

export function getImageUrl(path: string | null, size: string) {
  if (!path) {
    return null;
  }

  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
}

export function getCollectionTab(id: string | undefined) {
  return COLLECTION_TABS.find((t) => t.id === id) ?? COLLECTION_TABS[0];
}

export function getHomeTabId(id: string | undefined) {
  return HOME_TABS.find((t) => t.id === id)?.id ?? HOME_TABS[0].id;
}

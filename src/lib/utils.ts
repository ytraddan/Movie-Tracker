import {
  COLLECTION_TABS,
  HOME_TABS,
  TMDB_IMAGE_BASE_URL,
  TMDB_MAX_PAGE,
} from "./constants";

export function getCurrentPage(page: string | undefined) {
  const requestedPage = Number(page);
  if (!Number.isInteger(requestedPage) || requestedPage <= 0) {
    return 1;
  }
  return Math.min(requestedPage, TMDB_MAX_PAGE);
}

export function getCollectionTab(id: string | undefined) {
  return COLLECTION_TABS.find((t) => t.id === id) ?? COLLECTION_TABS[0];
}

export function getHomeTabId(id: string | undefined) {
  return HOME_TABS.find((t) => t.id === id)?.id ?? HOME_TABS[0].id;
}

export function getImageUrl(path: string | null | undefined, size: string) {
  if (!path) {
    return null;
  }

  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
}

export function getOverview(overview: string | undefined) {
  if (!overview) {
    return "Unknown";
  }

  return overview;
}

export function getReleaseYear(releaseDate: string | undefined) {
  if (!releaseDate) {
    return "Unknown";
  }

  return releaseDate.split("-")[0];
}

export function getRuntime(runtime: number | undefined) {
  if (!runtime) {
    return "unknown";
  }

  return `${Math.floor(runtime / 60)}h ${runtime % 60}m`;
}

export function getRating(rating: number | undefined) {
  if (!rating) {
    return "0.0";
  }

  return rating.toFixed(1);
}

export function getVoteCount(count: number | undefined) {
  if (!count) {
    return "0 ratings";
  }

  return `${count.toLocaleString()} ratings`;
}

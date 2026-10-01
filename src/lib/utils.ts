import { TMDB_IMAGE_BASE_URL, TMDB_MAX_PAGE } from "./constants";
import { Country, CrewMember } from "./tmdb-types";
import { Tab } from "./types";

export function getCurrentPage(page?: string) {
  const requestedPage = Number(page);
  if (!Number.isInteger(requestedPage) || requestedPage <= 0) {
    return 1;
  }
  return Math.min(requestedPage, TMDB_MAX_PAGE);
}

export function getCurrentTab<T extends string>(
  tabs: readonly Tab<T>[],
  id?: string | null,
) {
  return tabs.find((t) => t.id === id) ?? tabs[0];
}

export function getImageUrl(path: string | null | undefined, size: string) {
  if (!path) {
    return null;
  }

  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
}

export function getOverview(overview: string | undefined) {
  if (!overview) {
    return "";
  }

  return overview;
}

export function getReleaseYear(releaseDate: string | undefined) {
  if (!releaseDate) {
    return "";
  }

  return releaseDate.split("-")[0];
}

export function getRuntime(runtime: number | undefined) {
  if (!runtime) {
    return "";
  }

  return `${Math.floor(runtime / 60)}h ${runtime % 60}m`;
}

export function getGenres(genres: { name: string }[] | undefined) {
  if (!genres || genres.length == 0) {
    return "";
  }

  return genres.map((genre) => genre.name).join(", ");
}

export function getRating(rating: number | undefined) {
  if (!rating) {
    return "—";
  }

  return rating.toFixed(1);
}

export function getVoteCount(count: number | undefined) {
  if (!count) {
    return "0 ratings";
  }

  return `${count.toLocaleString()} ratings`;
}

export function getDirectors(crew: CrewMember[] | undefined) {
  if (!crew || crew.length == 0) {
    return "—";
  }

  return crew
    .filter((member) => member.job === "Director")
    .map((member) => member.name)
    .join(", ");
}

export function getLanguage(code: string | undefined) {
  if (!code) {
    return "—";
  }

  return new Intl.DisplayNames(["en"], { type: "language" }).of(code) ?? code;
}

export function getCountries(countries: Country[] | undefined) {
  if (!countries || countries.length == 0) {
    return "—";
  }

  return countries.map((c) => c.name).join(", ");
}

export function getMoney(value: number | undefined) {
  if (!value) {
    return "—";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

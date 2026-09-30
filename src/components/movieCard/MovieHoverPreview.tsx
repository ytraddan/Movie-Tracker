"use client";

import {
  getDirectors,
  getGenres,
  getOverview,
  getRating,
  getReleaseYear,
  getRuntime,
} from "@/lib/utils";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useQuery } from "@tanstack/react-query";
import { StarIcon } from "@heroicons/react/16/solid";
import { Movie } from "@/lib/tmdb-types";
import { getMovieDetails } from "@/lib/api/movies";
import useHoverPosition from "@/hooks/useHoverPosition";
import styles from "./movieHoverPreview.module.css";

const PREVIEW_WIDTH = 290;
const PREVIEW_HEIGHT = 300;

interface MovieHoverPreviewProps {
  movie: Movie;
  children: ReactNode;
}

export default function MovieHoverPreview({
  movie,
  children,
}: MovieHoverPreviewProps) {
  const { ref, position, open, close } = useHoverPosition(
    PREVIEW_WIDTH,
    PREVIEW_HEIGHT,
  );

  const { data: details, isLoading } = useQuery({
    queryKey: ["movie", "details", movie.id],
    queryFn: () => getMovieDetails(movie.id),
    staleTime: 60 * 1000 * 30,
    enabled: position !== null,
  });

  return (
    <div ref={ref} onMouseEnter={open} onMouseLeave={close}>
      {children}

      {position &&
        createPortal(
          <aside
            className={styles.preview}
            style={{ ...position, width: PREVIEW_WIDTH }}
            aria-hidden="true"
          >
            <h3 className={styles.title}>{movie.title}</h3>

            {isLoading ? (
              <div className={styles.skeleton} />
            ) : (
              <p className={styles.tagline}>{details?.tagline}</p>
            )}

            <div className={styles.meta}>
              <span>{getReleaseYear(movie.release_date)}</span>
              {details && (
                <>
                  {"·"}
                  <span>{getRuntime(details.runtime)}</span>
                </>
              )}
              {"·"}
              <span className={styles.rating}>
                <StarIcon className={styles.starIcon} />
                {getRating(movie.vote_average)}
              </span>
            </div>

            {isLoading ? (
              <div className={styles.skeleton} />
            ) : (
              <p className={styles.genres}>{getGenres(details?.genres)}</p>
            )}

            <p className={styles.overview}>{getOverview(movie.overview)}</p>

            {isLoading ? (
              <div className={styles.skeleton} />
            ) : (
              <p className={styles.director}>
                <span className={styles.directorLabel}>Director(s)</span>
                {getDirectors(details?.credits.crew)}
              </p>
            )}
          </aside>,
          document.body,
        )}
    </div>
  );
}

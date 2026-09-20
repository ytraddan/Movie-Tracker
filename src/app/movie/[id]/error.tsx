"use client";

import { useEffect } from "react";
import ErrorState from "@/components/errorState/ErrorState";

export default function MovieError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorState
      title="Couldn't load this movie"
      message="Something went wrong while fetching movie details"
      onRetry={reset}
    />
  );
}

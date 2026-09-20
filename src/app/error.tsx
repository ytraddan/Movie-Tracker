"use client";

import { useEffect } from "react";
import ErrorState from "@/components/errorState/ErrorState";

export default function Error({
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
      title="Couldn't load movies"
      message="Something went wrong while fetching movies"
      onRetry={reset}
    />
  );
}

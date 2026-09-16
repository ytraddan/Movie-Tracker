import MovieDetails from "@/components/movieDetails/MovieDetails";
import SimlarMovies from "@/components/movieDetails/SimilarMovies";
import { SimilarMoviesSkeleton } from "@/components/skeletons/SimilarMoviesSkeleton";
import { fetchMovieDetails } from "@/lib/tmdb";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface MoviePageProps {
  params: { id: string };
}

const SIMLAR_LIMIT = 5;
const CAST_LIMIT = 14;

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params;
  const movie = await fetchMovieDetails(id);

  if (!movie) {
    notFound();
  }

  return (
    <>
      <MovieDetails movie={movie} castLimit={CAST_LIMIT} />
      <Suspense fallback={<SimilarMoviesSkeleton itemsCount={SIMLAR_LIMIT} />}>
        <SimlarMovies movieId={id} similarLimit={SIMLAR_LIMIT} />
      </Suspense>
    </>
  );
}

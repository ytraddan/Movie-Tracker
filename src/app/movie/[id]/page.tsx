import CastList from "@/components/movieDetails/CastList";
import MovieDetails from "@/components/movieDetails/MovieDetails";
import SimilarMovies from "@/components/movieDetails/SimilarMovies";
import { SimilarMoviesSkeleton } from "@/components/skeletons/SimilarMoviesSkeleton";
import { fetchMovieDetails } from "@/lib/tmdb";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import styles from "./page.module.css";

interface MoviePageProps {
  params: Promise<{ id: string }>;
}

const SIMILAR_LIMIT = 15;
const CAST_LIMIT = 15;

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params;
  const movie = await fetchMovieDetails(id);

  if (!movie) {
    notFound();
  }

  return (
    <article className={styles.wrapper}>
      <div>
        <MovieDetails movie={movie} />
        <CastList cast={movie.credits.cast} limit={CAST_LIMIT} />
      </div>

      <Suspense fallback={<SimilarMoviesSkeleton itemsCount={SIMILAR_LIMIT} />}>
        <SimilarMovies movieId={id} limit={SIMILAR_LIMIT} />
      </Suspense>
    </article>
  );
}

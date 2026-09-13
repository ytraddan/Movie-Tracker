import MovieDetails from "@/components/movieDetails/MovieDetails";
import { fetchMovieDetails } from "@/lib/tmdb";
import { notFound } from "next/navigation";

interface MoviePageProps {
  params: { id: string };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params;
  const movie = await fetchMovieDetails(id);

  if (!movie) {
    notFound();
  }

  return <MovieDetails movie={movie} />;
}

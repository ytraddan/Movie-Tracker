export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

export interface MovieWithOverview extends Movie {
  overview: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Credits {
  cast: CastMember[];
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string;
  order: number;
}

export interface MovieDetails extends Movie {
  runtime: number;
  genres: Genre[];
  credits: Credits;
}

export type PaginatedMovies = PaginatedResponse<Movie>;

export type PaginatedMoviesWithOverview = PaginatedResponse<MovieWithOverview>;

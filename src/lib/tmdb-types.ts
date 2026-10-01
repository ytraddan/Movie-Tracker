export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  id: number;
  title: string;
  overview?: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  release_date?: string;
  vote_average?: number;
  vote_count?: number;
}

export interface MovieDetails extends Movie {
  runtime?: number;
  tagline?: string;
  original_title?: string;
  original_language?: string;
  budget?: number;
  revenue?: number;
  production_countries: Country[];
  genres: Genre[];
  credits: Credits;
}

export interface Country {
  iso_3166_1: string;
  name: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Credits {
  cast: CastMember[];
  crew: CrewMember[];
}

export interface CrewMember {
  id: number;
  name: string;
  job: string;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  order: number;
}

export type PaginatedMovies = PaginatedResponse<Movie>;

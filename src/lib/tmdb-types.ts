export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export type TrendingResponse = PaginatedResponse<Movie>;

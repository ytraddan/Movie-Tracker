"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const AUTH_TOKEN = process.env.TMDB_API_READ_ACCESS_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

interface Movie {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
};

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/movie/popular?language=en-US&page=1`, options)
      .then((res) => res.json())
      .then((res) => setMovies(res.results))
      .catch((err) => console.error(err));
  }, []);

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ul className={styles.ul}>
          {movies.map((movie) => (
            <li key={movie.id} className={styles.il}>
              <Image
                loading="lazy"
                alt={movie.title}
                src={`${BASE_IMAGE_URL}${movie.poster_path}`}
                width={240}
                height={360}
              />
              <p className={styles.p}>
                <span>{movie.title}</span>
                <span>{movie.release_date}</span>
                <span>{movie.vote_average}</span>
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

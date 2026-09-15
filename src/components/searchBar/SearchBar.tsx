"use client";

import { useEffect, useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDebounce } from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "@/lib/api/movies";
import SearchDropdown from "./SearchDropdown";
import styles from "./searchBar.module.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const debouncedQuery = useDebounce(query, 300);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movie", "search", debouncedQuery],
    queryFn: () => searchMovies(debouncedQuery),
    enabled: debouncedQuery.trim().length > 0,
    staleTime: 60 * 1000 * 5,
  });

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect() {
    setIsOpen(false);
    setQuery("");
  }

  return (
    <div ref={containerRef} className={styles.searchWrapper}>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => query && setIsOpen(true)}
        placeholder="Search for movies, TV shows..."
        className={styles.input}
      />

      {isOpen && debouncedQuery.trim().length > 0 && (
        <SearchDropdown
          isError={isError}
          isLoading={isLoading}
          movies={data?.results ?? []}
          onSelect={handleSelect}
        />
      )}
      <MagnifyingGlassIcon className={styles.icon} />
    </div>
  );
}

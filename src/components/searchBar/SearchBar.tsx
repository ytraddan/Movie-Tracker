"use client";

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDebounce } from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "@/lib/api/movies";
import SearchDropdown from "./SearchDropdown";
import styles from "./searchBar.module.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const debouncedQuery = useDebounce(query, 300);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movie", "search", debouncedQuery],
    queryFn: () => searchMovies(debouncedQuery),
    enabled: debouncedQuery.trim().length > 0,
    staleTime: 60 * 1000 * 5,
  });

  const showDropdown = isOpen && debouncedQuery.trim().length > 0;

  function handleSelect() {
    setIsOpen(false);
    setQuery("");
  }

  return (
    <search
      className={styles.searchWrapper}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setIsOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setIsOpen(false);
      }}
    >
      <input
        type="search"
        aria-label="Search for movies"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => query && setIsOpen(true)}
        placeholder="Search for movies..."
        className={styles.input}
      />

      {showDropdown && (
        <SearchDropdown
          isError={isError}
          isLoading={isLoading}
          movies={data?.results}
          onSelect={handleSelect}
        />
      )}
      <MagnifyingGlassIcon className={styles.icon} aria-hidden="true" />
    </search>
  );
}

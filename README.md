# Movie Tracker

A small movie tracking app built with Next.js, TypeScript and the TMDB API. You can browse different categories of movies, search in real time, open a movie page with detailed description, and save it into your personal collection with selected rating — stored locally in the browser.

Built as a portfolio project to practice combining server and client components to notice the differences in data fetching and user state management on the server as well as on the client respectively using Next.js, Zustand, and TanStack Query.

## Features

- Home page with 3 tabs : popular, top rated, upcoming and pagination
- Debounced live search with results in a dropdown
- Movie details page: dynamic route with additional inforamtion (overview, genres, cast, similar movies, etc.)
- Personal collection: favorited movies with user rating (saved in local storage using Zustand)
- Fallbacks for missing images, loading skeletons

## Stack

Next.js 16 · React 19 · TypeScript · CSS Modules · Zustand · TanStack Query · TMDB API

## Structure

```
src/app           routes: home, /movie/[id], /collection, /api/search
src/components    UI components
src/hooks         custom hooks
src/lib           TMDB requests, types, constants, helpers
src/store         Zustand store for saved movies
src/styles        common style rules
```

## How to run locally

```bash
pnpm install
```

Add a `.env.local` file with your own api key:

```
TMDB_API_READ_ACCESS_TOKEN=your_token
```

Start the dev server:

```bash
pnpm dev
```

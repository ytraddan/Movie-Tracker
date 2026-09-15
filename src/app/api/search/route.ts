import { fetchMoviesByQuery } from "@/lib/tmdb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query");

  if (!query) {
    return NextResponse.json({
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0,
    });
  }
  try {
    const data = await fetchMoviesByQuery(query);
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ message: "Search failed" }, { status: 500 });
  }
}

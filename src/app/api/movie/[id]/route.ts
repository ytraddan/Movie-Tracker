import { fetchMovieDetails } from "@/lib/tmdb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
    return NextResponse.json({ message: "Invalid id" }, { status: 400 });
  }

  try {
    const movie = await fetchMovieDetails(id);

    if (!movie) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    return NextResponse.json(movie);
  } catch (error) {
    console.error(`Movie details failed for id "${id}":`, error);
    return NextResponse.json(
      { message: "Failed to load movie" },
      { status: 500 },
    );
  }
}

import { NextResponse } from 'next/server';
import supabase from "@/config/supabase";

export async function GET(req: Request) {
  console.log("Fetching projects with pagination and filtering -------------");

  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get('page') || '1');  // Default to page 1 if not provided
  const pageSize = parseInt(url.searchParams.get('pageSize') || '6');  // Default to 6 items per page
  const projectType = url.searchParams.get('projectType') || '';  // Get projectType if provided
  const searchText = url.searchParams.get('searchText') || '';  // Get searchText if provided
  const sortOption = url.searchParams.get("sort") || "Most Recent";

  console.log("Project type ----------- ", projectType);
  console.log("Sort  Option ----------- ", sortOption);

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  try {
    // Initialize the query for projects with pagination
    let query = supabase
      .from('projects')
      .select('*', { count: 'exact' })  // Fetch the count of total items
      .range(from, to);  // Apply pagination using the range method

    // If projectType is provided, apply additional filtering
    if (projectType) {
      query = query.ilike('propertytype', `%${projectType}%`); // Use ilike for case-insensitive matching
    }

    // If searchText is provided, search by name or location
    if (searchText) {
      query = query.or(`name.ilike.%${searchText}%,location.ilike.%${searchText}%`);
    }

        // Apply sorting based on sortOption
     query = sortOption === "Oldest First" ? query.order("created_at", { ascending: true }) : query.order("created_at", { ascending: false });


    console.log("Query ------------ ", query);

    const { data, error, count } = await query;

    if (error) {
      throw error;
    }

    console.log("Filtered projects data ------------------------- ", data);

    return NextResponse.json(
      { data, total: count, page, pageSize },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Failed to fetch projects', error: error.message },
      { status: 500 }
    );
  }
}

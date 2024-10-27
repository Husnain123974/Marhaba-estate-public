 

import { NextResponse } from 'next/server';
import supabase from "@/config/supabase";

export async function GET(req: Request) {
  console.log("Fetching properties with pagination and filtering -------------");

  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get('page') || '1');  // Default to page 1 if not provided
  const pageSize = parseInt(url.searchParams.get('pageSize') || '6');  // Default to 6 items per page
  const propertyType = url.searchParams.get('propertyType') || '';  // Get propertyType if provided
  const searchText = url.searchParams.get('searchText') || '';  // Get searchText if provided

  console.log("Property type ----------- ", propertyType);
  console.log("Search text ----------- ", searchText);

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  try {
    // Initialize the query with is_featured condition
    let query = supabase
      .from('properties')
      .select('*', { count: 'exact' })  // Fetch the count of total items
      .eq('isfeatured', true)  // Fetch properties where is_featured is true
      .range(from, to);  // Apply pagination using the range method

    // If propertyType is provided, apply additional filtering
    if (propertyType) {
      query = query.ilike('propertytype', `%${propertyType}%`); // Use ilike for case-insensitive matching
    }

    // If searchText is provided, search by name or location
    if (searchText) {
      query = query.or(`name.ilike.%${searchText}%,location.ilike.%${searchText}%`);
    }

    console.log("Query ------------ ", query);

    const { data, error, count } = await query;

    if (error) {
      throw error;
    }

    console.log("Filtered properties data ------------------------- ", data);

    const response = NextResponse.json(
      { data, total: count, page, pageSize },
      { status: 200 }
    );
  
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    return response;
    
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Failed to fetch properties', error: error.message },
      { status: 500 }
    );
  }
}

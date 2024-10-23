// // import { NextResponse } from 'next/server';
// // import supabase from "@/config/supabase";
 
// // export async function GET(req: Request) {
// //   console.log("Fetching featured properties -------------");

// //   try {
// //     const { data, error } = await supabase
// //       .from('properties')
// //       .select('*')
// //       .eq('isgreystructure', true);  // Fetch projects where is_featured is true

// //     if (error) {
// //       throw error;
// //     }

// //     console.log("Featured properties data ------------------------- ", );

// //     return NextResponse.json({ data }, { status: 200 });
// //   } catch (error: any) {
// //     return NextResponse.json(
// //       { message: 'Failed to fetch featured properties', error: error.message },
// //       { status: 500 }
// //     );
// //   }
// // }


 

// import { NextResponse } from 'next/server';
// import supabase from "@/config/supabase";

// export async function GET(req: Request) {
//   console.log("Fetching Grey properties with pagination -------------");

//   const url = new URL(req.url);
//   const page = parseInt(url.searchParams.get('page') || '1');  // Default to page 1 if not provided
//   const pageSize = parseInt(url.searchParams.get('pageSize') || '6');  // Default to 6 items per page

//   const from = (page - 1) * pageSize;
//   const to = from + pageSize - 1;

//   try {
//     const { data, error, count } = await supabase
//       .from('properties')
//       .select('*', { count: 'exact' })  // Fetch the count of total items
//       .eq('isgreystructure', true)  // Fetch properties where is_featured is true
//       .range(from, to);  // Apply pagination using the range method

//     if (error) {
//       throw error;
//     }

//     console.log("Grey properties data ------------------------- ",data);
 

    
//     return NextResponse.json(
//       { data, total: count, page, pageSize },
//       { status: 200 }
//     );

//     // return NextResponse.json({ messsage: "Hello World" });
//   } catch (error: any) {
//     return NextResponse.json(
//       { message: 'Failed to fetch featured properties', error: error.message },
//       { status: 500 }
//     );
//   }
// }



// import { NextResponse } from 'next/server';
// import supabase from "@/config/supabase";

// export async function GET(req: Request) {
//   console.log("Fetching Grey with pagination and filtering -------------");

//   const url = new URL(req.url);
//   const page = parseInt(url.searchParams.get('page') || '1');  // Default to page 1 if not provided
//   const pageSize = parseInt(url.searchParams.get('pageSize') || '6');  // Default to 6 items per page
//   const propertyType = url.searchParams.get('propertyType') || '';  // Get propertyType if provided

//   console.log("Property type ----------- ",propertyType);
//   const from = (page - 1) * pageSize;
//   const to = from + pageSize - 1;

//   try {
//     // Initialize the query with is_featured condition
//     let query = supabase
//       .from('properties')
//       .select('*', { count: 'exact' })  // Fetch the count of total items
//       .eq('isgreystructure', true)  // Fetch properties where is_featured is true
//       .range(from, to);  // Apply pagination using the range method

//       // If propertyType is provided, apply additional filtering
//       if (propertyType) {
//         // Use ilike for case-insensitive matching, or convert to lowercase for comparison
//         query = query.ilike('propertytype', `%${propertyType}%`); // Use ilike for case-insensitive matching
//       }

//       console.log("Query ------------ ", query);


//     const { data, error, count } = await query;

//     if (error) {
//       throw error;
//     }

//     console.log("Filtered properties data ------------------------- ", data);
 

//     return NextResponse.json(
//       { data, total: count, page, pageSize },
//       { status: 200 }
//     );
//   } catch (error: any) {
//     return NextResponse.json(
//       { message: 'Failed to fetch properties', error: error.message },
//       { status: 500 }
//     );
//   }
// }





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
      .eq('isgreystructure', true)  // Fetch properties where is_featured is true
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

    return NextResponse.json(
      { data, total: count, page, pageSize },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Failed to fetch properties', error: error.message },
      { status: 500 }
    );
  }
}

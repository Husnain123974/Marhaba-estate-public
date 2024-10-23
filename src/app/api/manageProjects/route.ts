 
import { NextResponse } from 'next/server';
import supabase from "@/config/supabase";
 

export async function POST(req: Request) {
  const projectData = await req.json();

  try {
    let response;
    console.log("Backend endpoint --------- ");
 

    if (projectData.isEditMode) {
      // Update an existing project
      const { data, error } = await supabase
        .from('projects')
        .update({
          title: projectData.title,
          price: projectData.price,
          location: projectData.location,
        })
        .eq('id', projectData.id);

      if (error) {
        throw error;
      }
      response = { message: 'Project updated successfully', data };
    } else {
      // Insert a new project
      const { data, error } = await supabase
        .from('projects')
        .insert([
          {
            id: projectData.id,  // Ensure UUID is included
            title: projectData.title,
            price: projectData.price,
            name: projectData.name,
            location: projectData.location,
            bedrooms: projectData.bedrooms,
            size: projectData.size,
            payment_plan: projectData.payment_plan,
            project_completion_date: projectData.project_completion_date,
            description: projectData.description,
            is_grey_structure: projectData.isGrey, // Mapping to 'is_grey_structure' from form
            is_featured: projectData.isFeatured,   // Mapping to 'is_featured' from form
            amenities: projectData.amenities,      // Array of amenities
            images: projectData.images,             // Store the URLs of uploaded images
            type: projectData.propertyType         // Property type
          },
        ]);

      if (error) {
        throw error;
      }
      response = { message: 'Project created successfully', data };
    }

    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Failed to save project', error: error.message }, { status: 500 });
  }
}



export async function GET(req: Request) {
  console.log("GET -------------");
  const { searchParams } = new URL(req.url);
  console.log("PARAMS -------------",searchParams);
  const projectId = searchParams.get('id');

  if (!projectId) {
    return NextResponse.json({ message: 'Project ID is required' }, { status: 400 });
  }

  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', projectId)
      .single();

    if (error) {
      throw error;
    }

    console.log("data ------------------------- ",data);

    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Failed to fetch project', error: error.message },
      { status: 500 }
    );
  }
}

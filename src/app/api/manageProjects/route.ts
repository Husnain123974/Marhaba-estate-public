 
import { NextResponse } from 'next/server';
import supabase from "@/config/supabase";
 

export async function POST(req: Request) {
  let projectData = await req.json();

  projectData = JSON.parse(projectData)
  try {
    let response;
    console.log("Backend Properties  endpoint --------- ",projectData);
 
 
      // Insert a new project
      const { data, error } = await supabase
        .from('projects')
        .insert([
          {
            id: projectData.id,  // Ensure UUID is included
            builders: projectData.builders,
            price: projectData.price,
            name: projectData.name,
            location: projectData.location,
            bedrooms: projectData.bedrooms,
            area: projectData.area,
            paymentplan: projectData.paymentplan,
            projectcompletiondate: projectData.projectcompletiondate,
            description: projectData.description,
            isgreystructure: projectData.isGrey, // Mapping to 'is_grey_structure' from form
            isfeatured: projectData.isFeatured,   // Mapping to 'is_featured' from form
            amenities: projectData.amenities,      // Array of amenities
            images: projectData.images,             // Store the URLs of uploaded images
            propertytype: projectData.propertyType         // Property type
          },
        ]);

      if (error) {
        throw error;
      }
      response = { message: 'Project created successfully', data };
  

    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Failed to save project', error: error.message }, { status: 500 });
  }
}

// Update existing project
export async function PUT(req: Request) {
  let projectData = await req.json(); 
  projectData = JSON.parse(projectData);
  console.log("Project Dta -------- ", projectData);
  try {
    const { data, error } = await supabase
      .from('projects')
      .update({
        id: projectData.id,
        builders: projectData.builders,
        price: projectData.price,
        name: projectData.name,
        location: projectData.location,
        bedrooms: projectData.bedrooms,
        area: projectData.area,
        paymentplan: projectData.paymentplan,
        projectcompletiondate: projectData.projectcompletiondate,
        description: projectData.description,
        isgreystructure: projectData.isgreystructure,
        isfeatured: projectData.isfeatured,
        amenities: projectData.amenities,
        images: projectData.images,
        propertytype: projectData.propertytype,
      })
      .eq('id', projectData.id);


    if (error) throw error;
    return NextResponse.json({ message: 'Project updated successfully', data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Failed to update project', error: error.message }, { status: 500 });
  }
}



export async function DELETE(req: Request) {
  const bodyText = await req.json(); // Retrieve raw request body as text
  const parsedBody = JSON.parse(bodyText); // Parse the text to JSON
  console.log("Ids -------------- > ", parsedBody);

  const ids = parsedBody.ids; // Expecting ids to be an array

  if (!Array.isArray(ids) || ids.length === 0) {
    return NextResponse.json({ message: 'No valid IDs provided', status: 400 }, { status: 400 });
  }

  try {
  // Delete the projects with the specified IDs
  const { data, error } = await supabase
  .from('projects')
  .delete()
  .in('id', ids);

if (error) throw error;

    return NextResponse.json({ message: 'Project deleted successfully', data ,status:200 }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Failed to delete project', error: error.message }, { status: 500 });
  }
}

export async function GET(req: Request) {
 
 
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
 

    if (error) {
      throw error;
    }

   
    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Failed to fetch project', error: error.message },
      { status: 500 }
    );
  }
}

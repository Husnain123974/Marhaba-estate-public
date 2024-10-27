

import { NextResponse } from 'next/server';
import supabase from "@/config/supabase";

export async function GET(req: Request) {

    try {
        console.log("Fetching similar properties with OR condition -------------");

        const url = new URL(req.url);
        const currentPropertyId = url.searchParams.get('currentPropertyId');  // Current property ID
        let location = url.searchParams.get('location') || '';  // Location of the current property
        let builders = url.searchParams.get('builder') || '';  // Builder of the current property
        const page = parseInt(url.searchParams.get('page') || '1');  // Page number, default is 1
        const pageSize = parseInt(url.searchParams.get('pageSize') || '10');  // Page size, default is 10

        console.log("PAge -------- ",page);
        console.log("Page Size -------- ",pageSize);
        

        // Calculate the offset for pagination
        const offset = (page - 1) * pageSize;


        // let location = "Dubai ,data";
        // let builders = "Goraya, Construction";

        // Remove commas from builders and then split into separate words
        builders = builders.replace(/,/g, '');  // Removes all commas


        // Remove commas from builders and then split into separate words
        location = location.replace(/,/g, '');  // Removes all commas


        // Split the location and builders into separate words
        const locationKeywords = location.split(" ");
        const buildersKeywords = builders.split(" ");

        // Create OR condition for location keywords
        const locationIlikeCondition = locationKeywords
            .map(keyword => `location.ilike.%${keyword}%`)
            .join(',');

        // Create OR condition for builders keywords
        const buildersIlikeCondition = buildersKeywords
            .map(keyword => `builders.ilike.%${keyword}%`)
            .join(',');

        // let { data, error, count } = await supabase
        //     .from('properties')
        //     .select()
        //     .or(`${locationIlikeCondition},${buildersIlikeCondition}`);

        let { data, error, count } = await supabase
            .from('properties')
            .select('*', { count: 'exact' })  // Count the total number of items
            .or(`${locationIlikeCondition},${buildersIlikeCondition}`)
            .range(offset, offset + pageSize - 1);  // Apply limit and offset for pagination




        if (error) {
            console.error('Error fetching data:', error);
        } else {
            console.log('Fetched data----------------:', data);
            console.log('Count data----------------:', count);
            
        }



        // return NextResponse.json(
        //     { data },
        //     { status: 200 }
        // );
        return NextResponse.json(
            {
                data,
                total: count,  // Total number of items
                page,
                pageSize
            },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            { message: 'Failed to fetch similar properties', error: error.message },
            { status: 500 }
        );
    }
}

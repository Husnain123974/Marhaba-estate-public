type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface FetchOptions {
  method: HttpMethod;
  body?: any;  // Use 'any' or a specific type depending on your API
}

export const fetchFromApi = async (endPoint: string, options: FetchOptions ) => {
  try {

    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const apiUrl = `http${process.env.NODE_ENV === 'development' ? '' : 's'}://${baseUrl}${endPoint}`;

   console.log("API URL -------------------------------- ",apiUrl)
    const response = await fetch(apiUrl, {
      method: options.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: options.body ? JSON.stringify(options.body) : undefined,  // Convert body to JSON for POST/PUT/PATCH
    });

    if (!response.ok) {
      throw new Error(`Failed to ${options.method} the property`);
    }

    const data = await response.json();
    return data ;

  } catch (error) {
    console.error(`Error during ${options.method} request:`, error);
    throw error;  // Rethrow the error to allow the calling function to handle it
  }
};


 
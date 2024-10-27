 

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { fetchFromApi } from './utils/apiClient';

 
 
const protectedRoutes = ["/admin/projects/" , "/admin/properties/","/admin/"];

export default async function middleware(req: NextRequest) {

 
  const { pathname } = req.nextUrl;
  console.log("Middleware  --------- ");
  // Skip authentication check for non-protected routes like root ("/")
  if (!protectedRoutes.includes(pathname)) {
    return NextResponse.next();
  }

    // Extract token from cookies
    const token = req.cookies.get('authToken')?.value;

    // Check if the token exists and is valid
    const isUserAuthenticated = !!token;
    console.log("IsAuth --- ",isUserAuthenticated);

    // Verify token by calling the verifyToken endpoint
    const isValidToken = await validateTokenWithAPI(token);

    // const isValidToken = true;
    
      

    console.log("Is valid toke ---- ", isValidToken);

  console.log("Is user authenticated:", isUserAuthenticated);
  console.log("NEXT URL:", pathname);

  if (!isUserAuthenticated || !isValidToken) {
    console.log("User not authenticated, redirecting...");
    const absoluteUrl = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }

  console.log("END --------------------- > ");
  return NextResponse.next();
}

// Function to call the verifyToken endpoint using fetchFromApi
async function validateTokenWithAPI(token: string | undefined): Promise<boolean> {
  if (!token) return false;

  try {
    const data = await fetchFromApi('/api/verifytoken', {
      method: 'POST',
      body: { token },
    });

    return data.message === 'Token is valid';
  } catch (error) {
    console.error("Token verification error:", error);
    return false;
  }
}
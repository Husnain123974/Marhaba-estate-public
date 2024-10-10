import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Utility to check if the user is authenticated (based on token)
const isAuthenticated = (request: NextRequest) => {  
  return request.cookies.get('token')?.value ?? false;
};

// Utility to retrieve the user role from the token
const getUserRole = (request: NextRequest) => {
  const token = request.cookies.get('token')?.value;
  if (!token) return null;

  // Mock token decoding (replace with actual JWT decoding)
  switch (token) {
    case 'admin-token':
      return 'admin';
    case 'agent-token':
      return 'agent';
    case 'user-token':
      return 'user';
    default:
      return null;
  }
};

// Function to handle redirection based on roles
const redirectIfUnauthorized = (userRole: string | null, url: URL) => {
  const roleRouteMap = {
    admin: '/admin',
    agent: '/agent',
    user: '/user',
  };

  // Check if the current route matches the user role's allowed path
  const allowedPath = roleRouteMap[userRole as keyof typeof roleRouteMap];
  console.log("Allowed paths ------- ",allowedPath);
  if (allowedPath && !url.pathname.startsWith(allowedPath)) {
    return NextResponse.redirect(new URL('/forbidden', url));
  }

  return NextResponse.next();
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
//   let token = isAuthenticated(request);
//   let userRole = getUserRole(request);
  let token :any = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtMHdNdmJtWkJEMGRZQWxPIiwic3ViZSI6Imh1c25haW5hYmJhczgwNTlAZ21haWwuY29tIiwic3VicyI6IkFDVElWRSIsInN1YmIiOiJPM0dXcG1iazVlekpuNEtSIiwic3ViYnMiOiJDTElFTlQiLCJzdWJyIjoiVVNFUiIsInN1YmMiOiJBbWVyaWNhbiBTYW1vYSIsImVudiI6ImRldiIsImlhdCI6MTcyNzgwMjg2NzMxMCwiZXhwIjoxNzM1NTc4ODY3MzEwLCJqdGkiOiIxNjkxMWE5Zi05OWI0LTRmOTgtODNhYi0xNjU4YWJiZjdjMjUifQ.kby4pZ6EXFMXv9D2p953zQ-w1uI4_zLX9jlt8hptuyo'
//   token = null;
  const userRole = 'admin';

  // 1. Redirect to login if not authenticated
  if (!token && url.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', url));
  }

  // 2. Handle role-based redirection
  return redirectIfUnauthorized(userRole, url);
}

// Protect relevant routes
export const config = {
  matcher: [
    '/admin/:path*',
    '/agent/:path*',
    '/user/:path*',
  ],
};

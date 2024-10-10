 

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Enables static export
    trailingSlash: true,  // Ensures each route ends with a trailing slash
    images: {
      unoptimized: true,  // Disables Next.js image optimization for static export
    },
    reactStrictMode: false,  // Enforce best practices
    swcMinify: true,  // Enables SWC-based minification for better performance
  };
  
  export default nextConfig;
  
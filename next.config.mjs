 

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // Enables static export
    trailingSlash: true,  // Ensures each route ends with a trailing slash
    images: {
      unoptimized: true,  // Disables Next.js image optimization for static export
    },
    reactStrictMode: false,  // Enforce best practices
    swcMinify: true,  // Enables SWC-based minification for better performance
     typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  };
  
  export default nextConfig;
  
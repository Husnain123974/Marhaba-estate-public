 

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // Enables static export
    trailingSlash: true,  // Ensures each route ends with a trailing slash
    images: {
      unoptimized: true,  // Disables Next.js image optimization for static export
    },
    reactStrictMode: false,  // Enforce best practices
    swcMinify: true,  // Enables SWC-based minification for better performance
    async headers() {
      return [
        {
          source: "/api/:path*",
          headers: [
            {
              key: "Access-Control-Allow-Origin",
              value: "*", // Set your origin
            },
            {
              key: "Access-Control-Allow-Methods",
              value: "GET, POST, PUT, DELETE, OPTIONS",
            },
            {
              key: "Access-Control-Allow-Headers",
              value: "Content-Type, Authorization",
            },
          ],
        },
      ];
    },
    
     typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  };
  
  export default nextConfig;
  
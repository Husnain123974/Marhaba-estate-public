 

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
          // matching all API routes
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
          ]
        }
      ]
    },
    
     typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  };
  
  export default nextConfig;
  
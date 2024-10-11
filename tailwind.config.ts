import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        '1160px': { max: '1160px' },
        '905px': '905px', 
        '673px': { max: '673px' }, 
        'lg-custom': '900px',  
        '900-1200': {'min': '900px', 'max': '1100px'},
        '980':{ max: '980px' },
        '440':{ max: '440px' },
        '700':{ max: '700px' },
        
      },
    },
  },
  plugins: [],
};
export default config;

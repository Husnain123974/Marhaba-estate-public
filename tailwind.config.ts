import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			'custom-border': 'rgba(230, 232, 236, 0.12)'
  		},
  		screens: {
  			'440': {
  				max: '440px'
  			},
  			'700': {
  				max: '700px'
  			},
  			'980': {
  				max: '980px'
  			},
  			'1000': {
  				max: '1000px'
  			},
  			'1160px': {
  				max: '1160px'
  			},
  			'905px': '905px',
  			'673px': {
  				max: '673px'
  			},
  			'lg-custom': '900px',
  			'900-1200': {
  				min: '900px',
  				max: '1100px'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  backgroundImage: {
			'custom-gradient': 'linear-gradient(122.79deg, #C39D53 21.1%, #97733E 94.65%)',
		  },
  	}
  },
  plugins: [ function ({ addUtilities }) {
    const newUtilities = {
      '.text-gradient': {
        'background-image': 'linear-gradient(122.79deg, #C39D53 21.1%, #97733E 94.65%)',
        'background-clip': 'text',
        '-webkit-background-clip': 'text',
        'color': 'transparent',
      },
    };
    addUtilities(newUtilities, ['responsive', 'hover']);
  },
      require("tailwindcss-animate")
],
};
export default config;

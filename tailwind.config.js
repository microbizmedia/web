/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xm: "454px",
      // => @media (min-width: 454px) { ... }
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      xxl: "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      fontFamily: {
        // Add your custom fonts
        dmSans: ["DM Sans", "sans-serif"],
        
      },

      colors: {
        colorPurple:"#746eb8",
        colorBackground:" #0c1015",
        colorWhite:"#ffffff"
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' }, // Start and end position
          '50%': { transform: 'translateY(-15px)' }, // Midpoint - float down
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite', // Animation name, duration, and infinite loop
      },
    },
  },
  plugins: [],
}



/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1441px",
        "3xl": "1720px",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        felidae: ["Felidae", "monospace"],
      },
      colors: {
        brand: {
          primary: "#434035",
          cream: "#F4F2EB",
          orange: "#FFDC94",
          gray: "#E5E4DF",
        },
      },
      spacing: {
        "30px": "1.875rem",
      },
      backgroundImage: {
        hero: "url('/public/images/bg-hero.png')",
        "hero-mobile": "url('/public/images/bg-hero-mobile.png')",
      },
      boxShadow: {
        dropdown: "0px 4px 8px 0px #00000026",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "784px",
          },
          "@screen lg": {
            maxWidth: "1184px",
          },
          "@screen 2xl": {
            maxWidth: "1664px",
          },
        },
      });
    },
  ],
};

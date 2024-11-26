/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1025px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1720px",
      },
      maxWidth: {
        blog: "1110px",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        felidae: ["Felidae", "monospace"],
      },
      colors: {
        brand: {
          primary: "#434035",
          cream: "#F4F2EB",
          "solid-cream": "#D9D5C7",
          orange: "#FFDC94",
          gray: "#E5E4DF",
          "light-gray": "#FCFAF6",
        },
      },
      spacing: {
        "30px": "1.875rem",
      },
      backgroundImage: {
        hero: "url('/assets/images/bg-hero.png')",
        "hero-mobile": "url('/assets/images/bg-hero-mobile.png')",
      },
      boxShadow: {
        dropdown: "0px 4px 8px 0px #00000026",
      },
      borderRadius: {
        "22px": "1.375rem",
        "30px": "1.875rem",
        "44px": "2.75rem",
      },
      fontSize: {
        22: "22px",
        30: "30px",
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
          "@screen 3xl": {
            maxWidth: "1664px",
          },
        },
      });
    },
  ],
};

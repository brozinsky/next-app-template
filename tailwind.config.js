/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      // padding: {
      //   DEFAULT: "1rem",
      //   sm: "2rem",
      //   lg: "4rem",
      //   xl: "5rem",
      //   "2xl": "6rem",
      // },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1464px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
        },
        dark: {
          50: "var(--color-dark-50)",
          100: "var(--color-dark-100)",
          200: "var(--color-dark-200)",
          300: "var(--color-dark-300)",
          400: "var(--color-dark-400)",
          500: "var(--color-dark-500)",
          600: "var(--color-dark-600)",
          700: "var(--color-dark-700)",
          800: "var(--color-dark-800)",
          900: "var(--color-dark-900)",
        },
        elevation: {
          50: "var(--color-elevation-50)",
          100: "var(--color-elevation-100)",
          200: "var(--color-elevation-200)",
          300: "var(--color-elevation-300)",
          400: "var(--color-elevation-400)",
          500: "var(--color-elevation-500)",
          600: "var(--color-elevation-600)",
          700: "var(--color-elevation-700)",
          800: "var(--color-elevation-800)",
          900: "var(--color-elevation-900)",
        },
      },
    },
  },
  plugins: [],
};

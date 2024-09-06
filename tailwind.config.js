/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          custom: "hsl(257, 0%, 90%)",
        },
      },
    },
  },
  plugins: [],
};

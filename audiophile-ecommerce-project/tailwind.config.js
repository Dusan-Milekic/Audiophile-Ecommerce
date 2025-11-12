/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          strong: '#d87d4a',
          light: '#fbaf85',
        },
        black: {
          light: '#101010',
          strong: '#000000',
        },
        grey: {
          strong: '#f1f1f1',
          light: '#fafafa',
        },
      },
      
    },
  },
  plugins: [],
}
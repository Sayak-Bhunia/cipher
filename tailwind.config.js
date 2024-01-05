/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
      'custom': '#060606',
    },
    borderColor: {
      'custom': '#060606',
    }},
  },
  plugins: [],
}


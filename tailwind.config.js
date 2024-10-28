/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-background': '#f0f0f0', // Define light mode background color
        'dark-background': '#1a1a1a', // Define dark mode background color
        'light-text': '#333333', // Define light mode text color
        'dark-text': '#f0f0f0', // Define dark mode text color
        // Add more custom colors if needed
      },
    },
  },
  plugins: [],
}
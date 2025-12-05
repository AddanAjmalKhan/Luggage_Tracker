/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#14B8A6', // Teal
          dark: '#0F766E',
          light: '#5EEAD4',
        },
        sidebar: {
          DEFAULT: '#0F4C5C', // Dark teal/cyan
          hover: '#1A6B7D',
        },
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        info: '#3B82F6',
      },
    },
  },
  plugins: [],
}

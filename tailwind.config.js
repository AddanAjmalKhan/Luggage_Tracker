/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
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
          DEFAULT: '#042f38', // Deep Teal from image
          hover: '#074856',
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fade 1.5s ease-in-out',
      },
      keyframes: {
        fade: {
          '0%, 100%': { backgroundColor: 'transparent' },
          '50%': { backgroundColor: 'rgba(255, 255, 0, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}


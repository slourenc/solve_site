/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-accent': '#3939ff',
        'primary-accent-hover': '#2020e0',
        'background-light': '#F7FAFC',
        'background-medium': '#EBF8FF',
        'text-primary': '#2D3748',
        'text-secondary': '#718096',
        'text-inverse': '#FFFFFF',
        'border-ui': '#E2E8F0',
        'cta-text': '#FFFFFF',
        'accent-yellow': '#FFD700',
      }
    },
  },
  plugins: [],
} 
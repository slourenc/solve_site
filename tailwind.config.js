/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-accent': '#00A99D',
        'primary-accent-hover': '#00877A',
        'background-light': '#F7FAFC',
        'background-medium': '#EBF8FF',
        'background-dark': '#1A202C',
        'text-primary': '#2D3748',
        'text-secondary': '#718096',
        'text-inverse': '#F7FAFC',
        'border-ui': '#E2E8F0',
        'cta-text': '#FFFFFF',
      }
    },
  },
  plugins: [],
} 
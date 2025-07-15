/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'gotham': ['Montserrat', 'Gotham', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'sans': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary-accent': '#3939ff',
        'primary-accent-hover': '#2d2dcc',
        'background-secondary': '#fffdf3',
        'background-light': '#F7FAFC',
        'background-medium': '#EBF8FF',
        'text-primary': '#2D3748',
        'text-secondary': '#718096',
        'text-inverse': '#FFFFFF',
        'border-ui': '#E2E8F0',
        'cta-text': '#FFFFFF',
        'accent-yellow': '#FFD700',
        'solve-blue': '#3939ff',
        'solve-cream': '#fffdf3',
      }
    },
  },
  plugins: [],
} 
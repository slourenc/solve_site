/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  safelist: [
    // Add critical classes that might be dynamically added
    'opacity-0', 'opacity-100', 'scale-90', 'scale-100', 
    'translate-y-0', 'translate-y-4', 'translate-y-6'
  ],
  theme: {
    extend: {
      colors: {
        // Updated colors with better contrast ratios
        'primary-accent': '#008C82', // Darkened from #00A99D for better contrast
        'primary-accent-hover': '#00756E', // Darkened from #00877A for better contrast
        'background-light': '#F7FAFC',
        'background-medium': '#EBF8FF',
        'background-dark': '#1A202C',
        'text-primary': '#2D3748',
        'text-secondary': '#4A5568', // Darkened from #718096 for better contrast
        'text-inverse': '#F7FAFC',
        'border-ui': '#CBD5E0', // Darkened from #E2E8F0 for better contrast
        'cta-text': '#FFFFFF',
      }
    },
  },
  plugins: [],
} 
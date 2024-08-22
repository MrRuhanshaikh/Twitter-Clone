/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],  // Corrected from "*html" to "*.html"
  theme: {
    extend: {
      colors: {
        customGray: '#A9A9A9',
      },
      screens: {
        'below-500': {'max': '500px'},
      },
    },
  },
  plugins: [],
}

  
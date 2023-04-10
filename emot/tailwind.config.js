/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#88ADE5',
      'secondary': '#FEE097',
      'yellow': '#FEC855',
      'blue': '#2A72A7',
      'red': '#AB2D2D',
      'green': '#2DAB5D'
    },
    fontSize: {
      'h1': '2.25rem',
      'h2': '1.5rem',
      'h3': '1.25rem',
      'p': '1rem',
      'body': '0.75rem'
    },
    fontFamily: {
      'title': 'Abhaya Libre',
      'context': 'Calibri'
    },
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-bg': 'linear-gradient(to right, #ff8a00, #da1b60)',
        // Add more gradients as needed
      }),
    },
  },
  plugins: [],
}
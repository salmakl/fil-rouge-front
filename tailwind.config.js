/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8A4FFF',
        background: '#F0F2F5',
        error: '#D93F21',
        success: '#18da8e',
        warning: '#FFA500',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./styles/**/*.css", "./**/*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [  require('flowbite/plugin')({
    charts: true,
}),],
}


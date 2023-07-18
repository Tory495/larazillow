/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
    './storage/framework/views/*.php',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


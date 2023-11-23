/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom-font': ['Roboto', 'sans-serif'],
        'custom-font2': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'color-fondo-blanco': '#FFFFFF',
        'color-letra-nav': '#636363',
        'color-letra-footer': '#636363',
        'color-letra-card': '#D8BD8F',
        'color-letra-blanca': '#FFFFFF',
      },
      borderStyle: ['hover']
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
  ],
}

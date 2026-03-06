/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Cormorant', 'serif'],
        'custom-font': ['Manrope', 'sans-serif'],
        'custom-font2': ['Cormorant', 'serif'],
      },
      colors: {
        'color-fondo-blanco': '#FFFFFF',
        'color-letra-nav': '#636363',
        'color-letra-footer': '#636363',
        'color-letra-card': '#B39C6D',
        'color-fondo-marron': '#DCC6A0',
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

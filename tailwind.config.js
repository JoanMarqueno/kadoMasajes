/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
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
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [],
};

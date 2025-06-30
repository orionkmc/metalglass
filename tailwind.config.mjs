/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D47A1',
          light: '#1976D2',
          dark: '#0A3880',
        },
        secondary: '#455A64',
        accent: '#29B6F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

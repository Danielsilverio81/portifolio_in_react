/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       dropShadow: {
        '2md': '0_1px_1px_rgb(77,63,143,100%)',
      },
      colors: {
         'navigationColor':'#778da9',
         'linkColor':'#4D3F8F',
         'lightBg':'#e0e1dd',
         'fontColor':'#415A77',
         'titleColor':'#C9ADA7',
        },
        fontFamily: {
        'openSans': ['Open Sans', 'sans-serif'],
    },
  },
  plugins: [],
 }
} 

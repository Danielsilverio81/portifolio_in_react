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
         'bgCardImage': '#1B263B',
         'mode': '#0d1b2a'
        },
      fontFamily: {
        'openSans': ['Open Sans', 'sans-serif'],
       },
      keyframes: {
        rightShow: {
          '0%': {transform: 'translate3d(60px, 0, 0)',opacity:'0'},
          '100%': {transform: 'translate3d(0px, 0px, 0px)',opacity:'1'}
        },
        leftShow: {
          '0%': {transform: 'translate3d(-60px, 0, 0)',opacity:'0'},
          '100%': {transform: 'translate3d(0px, 0px, 0px)',opacity:'1'}
        }
      },
      animation: {
        rightShow: 'rightShow 0.9s linear 1',
        leftShow: 'leftShow 0.9s linear 1',
      }
  },
  plugins: [],
 },
 darkMode: 'class'
} 

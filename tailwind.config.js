/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#26873A',
        secondary: '#96C94B',
      },
      // fontFamily: {
      //   poppins: ['Poppins', 'sans-serif'],
      //   courgette: ['Courgette', 'cursive'],
      // },
    },
  },
  plugins: [],
};

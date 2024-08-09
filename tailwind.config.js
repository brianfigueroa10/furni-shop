/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        default: '#242424',
        primary: '#244D4D',
        secondary: '#5F5F64',
        accent: '#3d3d3f',
        muted: '#A9A7A6'
      },
      fontFamily: {
        noto: ['Noto Serif', 'sans-serif']
      }
    }
  },
  plugins: []
}

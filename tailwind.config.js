/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'epilogue':['Epilogue']
      },
      colors: {
        'bgColor' : '#111927',
        'blueprimary' : '#70b8ff',
        'bluesecondary' : '#0086ed',
        'bluePic' : '#',
      }
    },
  },
  plugins: [],
}


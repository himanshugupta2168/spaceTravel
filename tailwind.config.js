/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBackGround:"#0B0D17",
        customSubHeading:"#D0D6F9",
        customText:"#ffffff"
      },
      fontFamily:{
        Bellefair:['Bellefair', 'serif'],
        Barlow:['Barlow', 'sans-serif'],
        Barlow_C:['Barlow Condensed', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

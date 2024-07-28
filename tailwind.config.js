/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "libre baskerville": ["libre baskerville, serif"],
    },
    backgroundImage: {
      "primary-gradient": "linear-gradient(30deg, #DC02C3, #5C53FE)",
    },
  },
  plugins: [require("daisyui")],
};

{
  /* <style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap')
</style> */
}

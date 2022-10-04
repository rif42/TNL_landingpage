/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "serif"],
      },
      backgroundImage: {
        bg5: "url('/src/assets/bg5.jpg')",
        ellips: "url('/src/assets/ellips.jpg')",
        bg6: "url('/src/assets/bg6.jpg')",
        component4: "url('/src/assets/component4.jpg')",
      },
      // colors: {
      //   'test': 'linear-gradient(red, yellow)',
      // }
    },
  },
  plugins: [],
};

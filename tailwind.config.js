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
        map: "url('/src/assets/map.jpg')",
        pic1: "url('/src/assets/pic1.jpg')",
        pic2: "url('/src/assets/pic2.jpg')",
        pic3: "url('/src/assets/pic3.jpg')",
        pic5: "url('/src/assets/pic5.jpg')",
        magic1: "url('/src/assets/magic1.jpg')",
        magic2: "url('/src/assets/magic2.jpg')",
        magic3: "url('/src/assets/magic3.jpg')",
        magic4: "url('/src/assets/magic4.jpg')",
        bg8: "url('/src/assets/bg8.jpg')",
      },
      // colors: {
      //   'test': 'linear-gradient(red, yellow)',
      // }
    },
  },
  plugins: [],
};

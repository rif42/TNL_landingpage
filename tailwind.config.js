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
        magic5: "url('/src/assets/magic5.jpg')",
        magic6: "url('/src/assets/magic6.jpg')",
        magic7: "url('/src/assets/magic7.jpg')",
        magic8: "url('/src/assets/magic8.jpg')",
        magic9: "url('/src/assets/magic9.jpg')",
        bg8: "url('/src/assets/bg8.jpg')",
        bg9: "url('/src/assets/bg9.jpg')",
      },
      // colors: {
      //   'test': 'linear-gradient(red, yellow)',
      // }
    },
  },
  plugins: [],
};

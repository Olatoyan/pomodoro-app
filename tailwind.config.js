/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F87070",
        "light-blue": "#70F3F8",
        purple: "#D881F8",
        "pale-blue": "#D7E0FF",
        "dark-blue": "#1E213F",
        "light-grey": "#EFF1FA",
        "dark-blue-black": "#161932",
        "border-color": "#E3E1E1",
        overlay: "rgba(10, 12, 28, 0.50)",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
        roboto: ["Roboto Slab", "serif"],
        space: ["Space Mono", "monospace"],
      },
      backgroundImage: {
        timer: "linear-gradient(315deg, #2E325A 0%, #0E112A 100%)",
      },
      boxShadow: {
        timer: "50px 50px 100px 0px #121530, -50px -50px 100px 0px #272C5A",
      },

      screens: {
        mobile: { max: "28.75em" },
      },
    },
  },
  plugins: [],
};

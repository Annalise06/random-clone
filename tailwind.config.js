module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#202094",
        "roman-red": "#e20935",
        "roman-grey": "#e3dbd8",
      },
      fontFamily: {
        roman: ["Plus Jakarta Sans", "sans - serif"],
      },
      strokeWidth: {
        5: "5px",
      },
    },
  },
  plugins: [require("daisyui")],
};

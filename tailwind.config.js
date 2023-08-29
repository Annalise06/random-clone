module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#202094",
        "roman-red": "#e20935",
        "roman-grey": '#727272'
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

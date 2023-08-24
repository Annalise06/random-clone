module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roman: ["Plus Jakarta Sans", 'sans - serif'],
      },
      strokeWidth: {
        5: "5px",
      },
    },
  },
  plugins: [require("daisyui")],
};

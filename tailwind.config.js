module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "other": {'min': '340px', 'max': '1200px'},
      },
      colors: {
        darkbg: "#1E293B",
        blue: {
          850: "#1e40af"
        }
      }
    },
  },
  plugins: [],
}

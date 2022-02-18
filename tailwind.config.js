module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "280px",
      },
      colors: {
        primary: "#F9C933",
        "light-primary": "#FEF6DF",
        "dark-gray": "#343A40",
        "light-gray": "#495057",
      },
    },
  },
  plugins: [],
};

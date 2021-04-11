module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        tiny: ".5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

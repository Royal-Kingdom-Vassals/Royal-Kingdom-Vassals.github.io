module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "icarus-navy": "#424874",
      "icarus-lavender": "#DCD6F7",
      "icarus-periwinkle": "#A6B1E1",
      "icarus-gray": "#CACFD6",
      "icarus-azure": "#D6E5E3",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

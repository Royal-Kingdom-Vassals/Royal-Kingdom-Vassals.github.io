module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        icarusNavy: "#424874",
        icarusLavender: "#DCD6F7",
        icarusPeriwinkle: "#A6B1E1",
        icarusGray: "#CACFD6",
        icarusAzure: "#D6E5E3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

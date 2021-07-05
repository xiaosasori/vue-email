module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "12p": "12%",
        "24p": "24%",
        "42p": "42%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

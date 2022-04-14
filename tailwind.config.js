const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  purge: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  presets: [],
  plugins: [require("tw-elements/dist/plugin")],
};

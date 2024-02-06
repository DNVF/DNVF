/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./ecommerce/*.html", "./assets/**/*.js", "./node_modules/flowbite/**/*.js",  'node_modules/preline/dist/*.js',],

  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f09098",
          100: "#e00000",
          200: "#e82028",
        },

        muted: "#888888",

        whites: "#fff",
        white: "#201820",
      },
    },
    plugins: [
      require("kutty"),
       require('flowbite/plugin'),
      require("@tailwindcss/forms"),
    require("preline/plugin"),
    require("tailgrids/plugin"),
  ],
  },
};

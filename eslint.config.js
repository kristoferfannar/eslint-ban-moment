"use strict";
const banMoment = require("./eslint-ban-moment");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
    },
    plugins: { "ban-moment": banMoment },
    rules: {
      "ban-moment/ban-moment": "error",
    },
  },
];

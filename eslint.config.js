// IMPORTANT:
// For some reason, it's necessary to include the .js suffix to this import.
// Otherwise, an `Error [ERR_MODULE_NOT_FOUND]` occurs.
import banMoment from "./eslint-ban-moment.js";

export default {
  files: ["**/*.js"],
  languageOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  plugins: { kristo: banMoment },
  rules: {
    "kristo/eslint-plugin-ban-moment": "error",
  },
};

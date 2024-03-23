// IMPORTANT:
// For some reason, it's necessary to include the .js suffix to this import.
// Otherwise, an `Error [ERR_MODULE_NOT_FOUND]` occurs.
import banMoment from "./ban-moment.js";
const plugin = { rules: { "eslint-ban-moment": banMoment } };
export default plugin;

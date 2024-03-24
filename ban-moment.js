// @ts-check
/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  create(context) {
    return {
      ImportDeclaration: function (node) {
        if (node.source.value === "moment")
          return context.report({
            node,
            message: "Please use 'date-fns' instead of 'moment'",
          });
      },
    };
  },
};

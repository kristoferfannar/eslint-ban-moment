const banMoment = require("./ban-moment");
const { RuleTester } = require("eslint");
const parser = require("@typescript-eslint/parser");
const { describe, it } = require("vitest");

RuleTester.describe = function (text, method) {
  describe(text, method);
};

RuleTester.it = function (text, method) {
  it(text, method);
};

const ruleTester = new RuleTester({
  parser: parser,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
});

const errors = [{ message: "Please use 'date-fns' instead of 'moment'" }];

ruleTester.run("no-moment-import", banMoment, {
  valid: [{ code: `import React from "react";` }],
  invalid: [{ code: `import moment from "moment";`, errors }],
});

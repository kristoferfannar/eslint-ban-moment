import banMoment from "./ban-moment";
import { RuleTester } from "eslint";
import parser from "@typescript-eslint/parser";
import { describe, it } from "vitest";

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

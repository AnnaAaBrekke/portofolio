import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    ignores: ["dist", "node_modules"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      ...prettier.rules,
      "prettier/prettier": "error",
    },
    plugins: {
      prettier: prettierPlugin,
    },
  },
];

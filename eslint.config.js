import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      import: require("eslint-plugin-import"),
    },
    rules: {
      // Enforce extensions for local imports
      "import/extensions": [
        "error",
        "always",
        {
          js: "always",
          jsx: "ignorePackages",
          ts: "ignorePackages",
          tsx: "ignorePackages",
        },
      ],
    },
  },
];

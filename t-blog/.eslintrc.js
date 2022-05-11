module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/tsx-runtime",
    "prettier",
  ],
  ignorePatterns: [".eslintrc.js", "vite.config.js"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "simple-import-sort"],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "spaced-comment": "error",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
}

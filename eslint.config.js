import { nextJsConfig } from "@workspace/eslint-config/next-js";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
  ...nextJsConfig, // Spread the imported config array
  eslintConfigPrettier, // Add prettier config to disable conflicting rules
];

export default config;

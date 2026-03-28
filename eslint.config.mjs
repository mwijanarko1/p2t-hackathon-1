import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

/** Flat config from eslint-config-next (avoids FlatCompat circular-config issues). */
const coreWebVitals = require("eslint-config-next/core-web-vitals");
const typescript = require("eslint-config-next/typescript");

const eslintConfig = [
  {
    ignores: ["coverage/**"],
  },
  ...coreWebVitals,
  ...typescript,
];

export default eslintConfig;

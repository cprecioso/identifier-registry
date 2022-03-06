// @ts-check

import { builtinModules } from "module"
import { defineConfig } from "rollup"
import ts from "rollup-plugin-ts"
import pkg from "./package.json"

const external = [...builtinModules, ...Object.keys(pkg.dependencies)]

export default defineConfig({
  input: "src/index.ts",
  output: { dir: "dist", format: "esm", entryFileNames: "[name].mjs" },
  plugins: [ts({ typescript: require("typescript") })],
  external,
})

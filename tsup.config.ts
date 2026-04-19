import { defineConfig } from "tsup";
//import { minify } from "terser";
//import fs from "fs/promises";
//import { promises as fs } from "fs";

export default defineConfig([
    {
        entry: { "orak-util-node": "src/index.ts" },
        format: ["cjs", "esm"],
        dts: true,
        minify: true, // `tsup`'un minify işlemini kullanıyoruz.
        clean: true,
        outDir: "dist"
    },
]);
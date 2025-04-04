// @ts-check
import { defineConfig, envField } from "astro/config";
import { getEnv } from "astro/env/runtime";
const dev = getEnv("IN_DEV") == "TRUE";
// https://astro.build/config
export default defineConfig(
    dev ? {} : {
        "site": "https://bethelightministries.github.io",
    },
);

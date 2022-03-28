// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  exclude: [
    "**/node_modules/**/*",
    "**/.git/**/*",
  ],
  plugins: [
    ["snowpack-flow-remove-types"],
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: "es6",
  },
  buildOptions: {
    sourcemap: "inline",
    // Output builds to a folder that GitHub Pages can serve
    out: "docs",
  },
};

module.exports = {
  exclude: [
    "**/node_modules/**/*",
    "**/.git/**/*"
  ],
  plugins: [
    ["snowpack-flow-remove-types"]
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: "es6"
  },
  buildOptions: {
    sourcemap: "inline",
    out: "docs"
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL0Jlbi93b3Jrc3BhY2UvZGFsYm96b2ZndXJ0aC5naXRodWIuaW8vc25vd3BhY2suY29uZmlnLmpzIl0sCiAgIm1hcHBpbmdzIjogIkFBSUEsT0FBTyxVQUFVO0FBQUEsRUFDZixTQUFTO0FBQUEsSUFDUDtBQUFBLElBQ0E7QUFBQTtBQUFBLEVBRUYsU0FBUztBQUFBLElBQ1AsQ0FBQztBQUFBO0FBQUEsRUFFSCxVQUFVO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUE7QUFBQSxFQUVWLGNBQWM7QUFBQSxJQUNaLFdBQVc7QUFBQSxJQUVYLEtBQUs7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=

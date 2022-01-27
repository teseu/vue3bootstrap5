
module.exports = {
  pages: {
    index: {
      entry: "./src/js/index.js",
      template: "./src/templates/index.html",
      filename: "index.html",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    }
  }
}
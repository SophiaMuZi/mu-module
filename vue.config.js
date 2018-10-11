exports.modules = {
  baseUrl: "/",
  outputDir: "mobile",
  assetsDir: "FrontStatic",
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true
      },
      "/static": {
        target: "http://localhost:4000",
        changeOrigin: true
      }
    }
  }
};

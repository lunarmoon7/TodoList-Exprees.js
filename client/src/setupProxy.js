const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api/insert", {
      target: "http://localhost:3002",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/delete", {
      target: "http://localhost:3002",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:3002",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/update", {
      target: "http://localhost:3002",
      changeOrigin: true,
    })
  );
};

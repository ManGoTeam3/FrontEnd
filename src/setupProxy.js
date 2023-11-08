const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/login', {
            target: '"proxy": "http://34.83.15.61:8080"',
            changeOrigin: true,
        }),
    );
};

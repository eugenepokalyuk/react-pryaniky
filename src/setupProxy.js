const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://test.v5.pryaniky.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            },
        })
    );
};
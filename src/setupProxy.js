const {createProxyMiddleware} = require('http-proxy-middleware');

if (process.env.REACT_APP_MODE == "DEV") {
    module.exports = function (app) {
        app.use(
            '/api/v1',
            createProxyMiddleware({
                target: 'http://localhost:9090',
                changeOrigin: true,
            })
        );
    };
}

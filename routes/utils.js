const path = require('node:path');

const PROXY_PATH_PREFIX = process.env.PROXY_PATH_PREFIX || '/';

module.exports.proxyPath = (enpointPath) => {
    return path.join(PROXY_PATH_PREFIX, enpointPath);
}
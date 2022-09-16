import path from 'node:path';

const PROXY_PATH_PREFIX = process.env.PROXY_PATH_PREFIX || '/';

export function proxyPath(enpointPath) {
    return path.join(PROXY_PATH_PREFIX, enpointPath);
}
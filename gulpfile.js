const browsersync = require("browser-sync");
const gulp = require("gulp");
const connect = require("gulp-connect-php");
const fs = require('fs');
const path = require('path');
const compression = require('compression');

function connectSync() {
    connect.server({
        port: 8010,
        keepalive: true,
        base: 'docs',
        bin: '/usr/bin/php',
    }, function () {
        browsersync({
            proxy: '127.0.0.1:8010',
            notify: false,
            reloadDelay: 1000,
            middleware: [
                compression(),
                (req, res, next) => {
                    const url = req.url;

                    if (url.length > 1 && url.endsWith('/')) {
                        req.url = url.slice(0, -1);
                    }

                    if (!path.extname(req.url) && req.url !== '/') {
                        req.url += '.html';
                    }

                    next();
                },
                (req, res, next) => {
                    const filePath = path.join(__dirname, 'docs', req.url);

                    if (!fs.existsSync(filePath) && !req.url.includes('browser-sync')) {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        fs.createReadStream(path.join(__dirname, 'docs', '404.html')).pipe(res);
                    } else {
                        next();
                    }
                },                
                (req, res, next) => {
                    const ext = path.extname(req.url);

                    if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.eot', '.ttf', '.otf', '.woff', '.woff2', '.mp4', '.webm'].includes(ext)) {
                        res.setHeader('Cache-Control', 'public, max-age=31536000');
                    }

                    next();
                }
            ]
        });
    });
}

function browserSyncReload(done) {
    browsersync.reload();
    done();
}

function watchFiles() {
    gulp.watch('docs/**/*', browserSyncReload);
}

const watch = gulp.parallel([watchFiles, connectSync]);

exports.default = watch;
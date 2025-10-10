var fs = require('fs');
var UglifyJS = require('uglify-js');

fs.readdirSync('./src/pages', {withFileTypes: true})
    .filter(item => !item.isDirectory())
    .map(item => item.name)
    .forEach((file) => {
        (async(file) => {
            const static_file = './dist/' + file.replace('php', 'html');
            fs.truncate(static_file, 0, function() {});

            const spawn = require('child_process').spawn;
            const stream = fs.createWriteStream(static_file, {flags: 'a'});
            const child = spawn('/usr/bin/php', ['./create_static_files.php', 'tmpl=./pages/' + file]);

            child.stdout.pipe(stream);
        })(file);
    });

fs.truncate('./dist/script.js', 0, function() {
    fs.readdirSync('./src/js/').forEach((file) => {
        if (fs.lstatSync('./src/js/' + file).isFile()) {
            fs.appendFileSync('./dist/script.js', UglifyJS.minify({
                file: fs.readFileSync('./src/js/' + file, 'utf8')
            }).code, 'utf8');
        }
    });
});
const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'styles'), (err, data) => {
    data.forEach((style) => {
        if (path.extname(style) === '.css') {
            fs.readFile(path.join(__dirname, 'styles', style), (err, data) => {
                if (err) return console.error(err);
                fs.appendFile(
                    path.join(__dirname, 'project-dist', 'bundle.css'),
                    data,
                    (err) => {
                        if (err) return console.error(err);
                    }
                );
            });
        }
    });
});

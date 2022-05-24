const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

function copyDir() {
    fs.writeFile(
        path.join(__dirname, 'project-dist', 'index.html'),
        '',
        function (err) {
            if (err) throw err;
        }
    );

    fs.writeFile(
        path.join(__dirname, 'project-dist', 'style.css'),
        '',
        (err) => {
            if (err) throw err;
        }
    );
    fs.readdir(path.join(__dirname, 'styles'), (err, data) => {
        data.forEach((style) => {
            fs.readFile(path.join(__dirname, 'styles', style), (err, data) => {
                fs.appendFile(
                    path.join(__dirname, 'project-dist', 'style.css'),
                    data
                );
            });
        });
    });

    fs.mkdir(
        path.join(__dirname, 'project-dist'),
        { recursive: false },
        (err) => {
            if (err) throw err;
        }
    );

    fs.mkdir(
        path.join(__dirname, 'project-dist', 'assets'),
        { recursive: false },
        (err) => {
            if (err) throw err;
            console.log('New folder is created');
        }
    );

    fs.mkdir(
        path.join(__dirname, 'project-dist', 'assets', 'fonts'),
        { recursive: true },
        (err) => {
            if (err) throw err;
            console.log('New folder is created');
        }
    );

    fs.mkdir(
        path.join(__dirname, 'project-dist', 'assets', 'img'),
        { recursive: true },
        (err) => {
            if (err) throw err;
            console.log('New folder is created');
        }
    );

    fs.mkdir(
        path.join(__dirname, 'project-dist', 'assets', 'svg'),
        { recursive: false },
        (err) => {
            if (err) throw err;
            console.log('New folder is created');
        }
    );
}

function copyAssets() {
    fs.readdir(path.join(__dirname, 'assets', 'fonts'), (err, data) => {
        copyDir();
        data.forEach((file) => {
            fs.copyFile(
                path.join(__dirname, 'assets', 'fonts', file),
                path.join(__dirname, 'project-dist', 'assets', 'fonts', file),
                (err) => {
                    if (err) {
                        throw err;
                    } else {
                        console.log(
                            'All files are copied to new folder "files-copy"'
                        );
                    }
                }
            );
        });
    });

    fs.readdir(path.join(__dirname, 'assets', 'img'), (err, data) => {
        copyDir();
        data.forEach((file) => {
            fs.copyFile(
                path.join(__dirname, 'assets', 'img', file),
                path.join(__dirname, 'project-dist', 'assets', 'img', file),
                (err) => {
                    if (err) {
                        throw err;
                    } else {
                        console.log(
                            'All files are copied to new folder "files-copy"'
                        );
                    }
                }
            );
        });
    });

    fs.readdir(path.join(__dirname, 'assets', 'svg'), (err, data) => {
        copyDir();
        data.forEach((file) => {
            fs.copyFile(
                path.join(__dirname, 'assets', 'svg', file),
                path.join(__dirname, 'project-dist', 'assets', 'svg', file),
                (err) => {
                    if (err) {
                        throw err;
                    } else {
                        console.log(
                            'All files are copied to new folder "files-copy"'
                        );
                    }
                }
            );
        });
    });
}

copyAssets();

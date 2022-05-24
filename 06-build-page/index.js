const fs = require('fs');
const path = require('path');

function copyFonts() {
    fs.mkdir(
        path.join(
            __dirname,
            'project-dist',
            'assets',
            'fonts' && 'img' && 'svg'
        ),
        { recursive: true },
        (err) => {
            if (err) throw err;
            console.log('New folder is created');
        }
    );

    fs.readdir(path.join(__dirname, 'assets', 'fonts'), (err, data) => {
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

copyFonts();

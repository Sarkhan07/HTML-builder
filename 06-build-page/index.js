const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

function copyDir() {
    fs.mkdir(
        path.join(__dirname, 'project-dist'),
        { recursive: false },
        (err) => {
            if (err) throw err;
            console.log('New folder is created');
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

// fs.readdir(path.join(__dirname, 'styles'), (err, data) => {
//     data.forEach((style) => {
//         if (path.extname(style) === '.css') {
//             fs.readFile(path.join(__dirname, 'styles', style), (err, data) => {
//                 if (err) return console.error(err);
//                 fs.appendFile(
//                     path.join(__dirname, 'project-dist', 'bundle.css'),
//                     data,
//                     (err) => {
//                         if (err) return console.error(err);
//                     }
//                 );
//             });
//         }
//     });
// });

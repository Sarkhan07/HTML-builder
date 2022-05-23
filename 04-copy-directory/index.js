const fs = require('fs');
const path = require('path');

function copyDir() {
    fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
        if (err) throw err;
        console.log('New folder is created');
    });

    fs.readdir(path.join(__dirname, 'files'), (err, data) => {
        data.forEach((file) => {
            fs.copyFile(
                path.join(__dirname, 'files', file),
                path.join(__dirname, 'files-copy', file),
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

copyDir();

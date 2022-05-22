const fs = require('fs');
const path = require('path');

fs.readdir(
    path.join(__dirname, 'secret-folder'),
    { withFileTypes: true },
    (err, dirEntryList) => {
        if (err) throw err;
        dirEntryList.forEach((dirEntry) => {
            fs.stat(
                path.join(__dirname, 'secret-folder', dirEntry.name),
                (err, stats) => {
                    if (err) throw err;
                    if (stats.isFile()) {
                        const extname = path.extname(dirEntry.name).slice(1);
                        console.log(
                            path.parse(dirEntry.name).name +
                                ' ' +
                                ' - ' +
                                extname +
                                ' ' +
                                ' - ' +
                                stats.size +
                                'b'
                        );
                    }
                }
            );
        });
    }
);

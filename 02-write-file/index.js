const fs = require('fs');
const path = require('path');

const readline = require('readline');

const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

fs.writeFile(path.join(__dirname, 'text.txt'), '', function (err) {
    if (err) throw err;
});

let close = () => {
    console.log('I hope you liked it, see you soon');
    rl.close();
};

rl.on('SIGINT', () => {
    close();
});

rl.question('Hi, write down anything please', (input) => {
    if (input == 'exit') {
        close();
        return;
    }

    fs.appendFile(path.join(__dirname, 'text.txt'), input, (err) => {
        if (err) throw err;
        console.log('saved');
    });

    rl.on('line', (input) => {
        if (input == 'exit') {
            close();
            return;
        }

        fs.appendFile(path.join(__dirname, 'text.txt'), `\n${input}`, (err) => {
            if (err) throw err;
            console.log('saved new line');
        });
    });
});

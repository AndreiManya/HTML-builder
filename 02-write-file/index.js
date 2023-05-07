const fs = require('fs');
const { stdin, stdout } = process;
const path = require('path');
const readline = require('readline');

const note = path.join(__dirname, 'note.txt');
let writeableStream = fs.createWriteStream(note);

stdout.write('Добрый день, введите текс для сохранения: ');

stdin.on('data', data => stdout.write(data));
readline.emitKeypressEvents(stdin);

stdin.on("keypress", (str) => { 
    writeableStream.write(str);
})

process.on('SIGINT', data => {
    stdout.write('\nУдачи! До свидания!');
    process.exit();
});

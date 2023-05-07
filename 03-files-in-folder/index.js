const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const folderPath = path.join(__dirname, 'secret-folder');
fs.readdir(folderPath, {withFileTypes: true}, (err, files) => { 
    files.forEach(file => {
        if(!file.isDirectory()) {
            fs.stat(path.join(__dirname, 'secret-folder', file.name), (err, stats) => {
                console.log(path.parse(file.name).name + ' - ' +  path.parse(file.name).ext.split('.').join('') + ' - ' + (stats.size / 1024) + 'kb');
            })
        };
    });
});

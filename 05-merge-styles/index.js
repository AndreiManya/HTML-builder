const fs = require('fs');
const path = require('path');

const styles = path.join(__dirname, 'styles'),
      distFolder = path.join(__dirname, 'project-dist', 'bundle.css');

fs.readdir(styles, {withFileTypes: true}, (err, files) => { 
    files.forEach(file => {
        if(!file.isDirectory() && path.parse(file.name).ext === '.css') {
            const writeableStream = fs.createWriteStream(distFolder);
            const readableStream = fs.createReadStream(path.join(styles, file.name), 'utf-8');
            readableStream.on('data', chunk => {
                writeableStream.write(`\n${chunk}`)
            });        
        };
    });
});

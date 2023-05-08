const fs = require('fs');
const path = require('path');

const filesPath = path.join(__dirname, 'files'),
filesCopy = path.join(__dirname, 'files-copy');
const copyDir = async () => { 
    await fs.promises.mkdir(filesCopy, { recursive: true });
    fs.readdir(filesPath, (err, files) => { 
        files.forEach(file => {
            fs.promises.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file));
        });
    });
}
copyDir();
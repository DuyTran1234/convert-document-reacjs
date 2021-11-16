const path = require('path');

const checkExtension = (fileName, extensions) => {
    if(!fileName) {
        return false;
    }
    const extFileName = path.extname(fileName);
    const found = extensions.find((item) => {
        return item === extFileName;
    });
    if(!found) {
        return false;
    }
    return true;
}

module.exports = {checkExtension};
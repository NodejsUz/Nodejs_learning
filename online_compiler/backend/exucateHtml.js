// const {execFile} = require("child_process");
const   path  = require('path');
const fs = require('fs');

function exucateHtml(filepath) {
    filepath = path.join("codes", path.basename(filepath));

    return new Promise((res, rej) => {
        fs.readFile(filepath, 'utf-8', (err, data) => {
            if (err) rej(err);
            res(data);
        })
    })
}

module.exports = {
    exucateHtml
}
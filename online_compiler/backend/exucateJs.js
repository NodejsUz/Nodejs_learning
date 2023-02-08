const {exec} = require("child_process");
const path = require("path");
const fs = require("fs");

function exucateJs (filepath) {
    filepath = path.join("codes", path.basename(filepath));

    return new Promise((res, rej) => {
        exec(`node ${filepath}`, (error, stdout, stderr) => {
            error && rej(error)
            stderr && rej(stderr)
            fs.unlink(filepath, (err) => err);
            res(stdout)
        })
    })
}

module.exports = {
    exucateJs
}
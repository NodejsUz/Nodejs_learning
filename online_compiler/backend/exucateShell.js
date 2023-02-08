const {exec} = require("child_process");
const path = require("path")
const fs = require("fs");

function executeShell(filepath) {
    filepath = path.join("codes", path.basename(filepath));

    return new Promise((res, rej) => {
        exec(`bash ${filepath}`, (error, stdout, stderr) => {
            if (error) {
                console.log(error);
                rej(error)
            };
            if (stderr) {
                console.log(stderr);
                rej(stderr);
            }
            fs.unlink(path.join("codes", path.basename(filepath)), (err) => err);
            res(stdout);
        })
    })
}

module.exports = {
    executeShell
}
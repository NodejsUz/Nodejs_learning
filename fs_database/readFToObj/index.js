const fs = require("fs");

const {parseBuffer} = require("./parse");
const filepath = "./.env";

function readFile(filepath) {
    fs.readFile(filepath, (err, data) => {
        if (err) return err;
        let result = parseBuffer(data)
        console.log(result);
    })
}

readFile(filepath);


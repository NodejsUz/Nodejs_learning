const { execFile } = require("child_process");
const fs = require("fs");

let commnand = '';

const res = fs.readFileSync("text.sh", {encoding: "utf-8"})

console.log(res);


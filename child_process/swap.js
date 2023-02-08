const {spawn} = require("child_process")

const child = spawn("pwd", []);

child.stdout.on("data", (data) => {
    console.log(data);
})

child.stderr.on("data", (data) => {
    console.log(data);
})

child.on("error", (err) => {
    console.log(err);
})
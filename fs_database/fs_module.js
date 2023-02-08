const fs = require("fs");

// check file dir
// const test = fs.existsSync("lorem", (err) => console.log(err));
// console.log(test);

// file deleted only
fs.unlink("lorem", (err) => {
    if (err) throw err;
    console.log("success deleted");
})

fs.rmdir("filepath", (err) => {
    if (err) return err
    console.log("success deleted");
})
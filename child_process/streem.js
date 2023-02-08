// stream bizga katta hajimdagi ma'lumotlarni
// bo'lib compyetga og'irligi tushmasdan
// bo'laklarga bo'lib olish streamlash

// nodejsning o'zida bir qancha streamni qo'laydigan modulelar bor
// fs, http, crypto, zlib, tcp, child process va boshqalar

// example
// write to file data
// const file = fs.createWriteStream("./streamF.txt");

// for (let i = 0; i < 1e5; i++) {
//     file.write("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur\n");
// }

// file.end();

const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req,res) => {
    fs.readFile("./streamF.txt", (err, data) => {
        if (err) throw err;

        res.end(data);
    })
})

// server.on("request", (req,res) => {
//     const fls = fs.createReadStream("./streamF.txt");
//     fls.pipe(res);
// })

server.listen(5000);
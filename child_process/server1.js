// process pid bu processning unikal idsi bu orqali uni boshqarish mimkin bo'ladi
// agar process yangilansa eski id o'chiriladi va yangi id beriladi
// almashib turishining sababi ikkita bir xil process bo'lib qolmaslik uchun

const http = require("http");
const {fork} = require("child_process");

const server = http.createServer((req, res) => {
    
    if (req.url === "/") {
        res.end("Hello world");

    } else if (req.url.match(/\/([0-9]+)/)) {
        const num = parseInt(req.url.split("/")[1]);
        // no-child-process
        // const result = isprime(num);
        // this loading working
        const child = fork("child_process.js");
        child.send(num);

        child.on("message", (message) => {
            res.end(JSON.stringify(message));
        })

        child.on("exit", (code) => {
            console.log("child exited with a code of ", code);
        })


    }
})

server.listen(5000, () => {
    console.log("server listern on 5000 port");
})

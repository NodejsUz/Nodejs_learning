const {createServer} = require("http");
const {fork} = require('child_process');

const headers = {
    "Content-type": "application/json"
}

const server = createServer((req, res) => {
    if (req.url === "/one") {
        res.writeHead( 200, "", headers);
        res.end(JSON.stringify(longloading()))

    } else if (req.url === "/two") {
        let result = longLoading().then(res => res)
        res.writeHead( 200, "", headers);
        res.end(JSON.stringify(result));
    }else if (req.url === "/three") {
        const child = fork("./example.js");

        child.send("child");

        child.on("message", (message) => {
            res.end(JSON.stringify(message))
        })

        child.on("error", (err) => {
            console.log(err);
        })

    }
})

server.listen(5000, () => {
    console.log("server listen on 5000 port");
})

function longloading() {
    let count = 0
    for (let i=0;i<1e7; i++){
        count += i
    }
    return {count}
}

function longLoading(){
    return new Promise((res, rej) => {
        let sum =0;
        for (let i=0; i<1e7; i++){
            sum += 0;
        }
        res(sum)
    })
}
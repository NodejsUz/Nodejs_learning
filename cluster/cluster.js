const express = require("express");
const port = 5000;
const cluster = require("cluster");
const { time, timeEnd } = require("console");
// prosesorlarning sonini bilish mumkin
const totalCpus = require("os").cpus().length;
console.log(process.env.NODE_UNIQUE_ID);

if (cluster.isMaster) {
  console.log(`working is PID ${process.pid}`);
  console.log(`total CPus ${totalCpus}`);

  for (let i = 0; i < totalCpus; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("Let's fork another worker!");
    cluster.fork();
  });
console.log(process.env.NODE_UNIQUE_ID);

}else {
    const app = express();

    app.get("/api/:n", (req, res) => {
        time("cluster");
        let n = parseInt(req.params.n);
        let count = 0;

        for (let i=0; i<n; i++){
            count+=i;
        }
        timeEnd("cluster");
        console.log("final is count", count);
        res.send(`final is count ${count}`)
    })

    app.listen(port, () => {
        console.log("listen server on 3000 port");
    })

}

// endi clusterlardan foydalaning yomon tomoni ham bor 
// kichik so'rovlar uchun clusterlarni oshlatish yaxshi ish emas
// ya'ni ketadigan vaqt bir xil bo'lib qoladi va bu yomon 
// bunda ko'p xarajatga tushish mumkin bo'ladi
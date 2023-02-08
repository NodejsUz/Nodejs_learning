const express = require("express");
const psql = require("./module/pg");
const routers = require("./router/routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

async function server(){
    try {
        let db = await psql();
        app.use((req, res, next) => {
            req.db = db;
            next();
        })
    } finally {
        app.use('/v1', routers)
    }
}

server();

app.listen(5000, () => {
    console.log("server listen 5000 port");
})
require("dotenv").config();

const express = require("express");
const dbSqlz = require("./module/db");
const routers = require("./router/router");

const PORT = process.env.PORT

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

async function server() {
    try {
        let db = await dbSqlz();
        app.use((req, res, next) => {
            req.db = db;
            next()
        })
    } finally {
        app.use("/v1", routers)
    }
}

server()

app.listen(PORT, () => {
    console.log(`Server listen on ${PORT} port`);
})

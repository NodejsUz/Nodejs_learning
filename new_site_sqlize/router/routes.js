const routers = require("express").Router();

routers.use("/", require("./homeRoute"))

module.exports = routers
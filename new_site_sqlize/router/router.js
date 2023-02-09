const routers = require("express").Router();

routers.use('/', require("./HomeRoute"));
routers.use("/categories", require("./CategoryRoute"));
routers.use("/news", require("./NewsRoute"));

module.exports = routers;
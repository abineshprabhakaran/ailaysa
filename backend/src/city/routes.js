module.exports = app => {
    const city = require("./controller");
    var router = require("express").Router();
    router.get("/", city.findAll);
    router.post("/", city.create);
    app.use('/api/cities', router);
};
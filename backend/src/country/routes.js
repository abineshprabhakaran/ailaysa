module.exports = app => {
    const countries = require("./controller");
    var router = require("express").Router();
    router.get("/", countries.findAll);
    router.post("/", countries.create);
    app.use('/api/countries', router);
};
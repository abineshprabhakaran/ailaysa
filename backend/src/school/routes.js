module.exports = app => {
    const school = require("./controller");
    var router = require("express").Router();
    router.get("/", school.findAll);
    router.post("/", school.create);
    app.use('/api/schools', router);
};
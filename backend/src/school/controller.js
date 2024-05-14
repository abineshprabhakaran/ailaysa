const db = require("../models");
const school = db.school;


// Find all school 

exports.findAll = (req, res) => {
    school.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error retriving school"
            });
        });
};

//   Add country 

exports.create = (req, res) => {
    if (!req.body.name || !req.body.cityId) {
        res.status(400).send({
            message: "School name / city  cannot be empty"
        });
        return;
    }
    const addSchool = {
        name: req.body.name,
        cityId:req.body.cityId
    };

    school.create(addSchool)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error creating school"
            });
        });
};
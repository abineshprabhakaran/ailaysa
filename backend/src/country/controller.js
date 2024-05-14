const db = require("../models/");
const countries = db.country;


// Find all countries 

exports.findAll = (req, res) => {
    countries.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error retriving countries"
            });
        });
};

//   Add country 

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Country name cannot be empty"
        });
        return;
    }
    const addCountry = {
        name: req.body.name
    };

    countries.create(addCountry)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error creating country"
            });
        });
};
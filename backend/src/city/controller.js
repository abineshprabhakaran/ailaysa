const db = require("../models");
const city = db.city;


// Find all city 

exports.findAll = (req, res) => {
    city.findAll({where : {
        countryId: req.query.countryId
    } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error retriving city"
            });
        });
};

//   Add country 

exports.create = (req, res) => {
    if (!req.body.name || !req.body.countryId) {
        res.status(400).send({
            message: "City name / country cannot be empty"
        });
        return;
    }
    const addcity = {
        name: req.body.name,
        countryId:req.body.countryId
    };

    city.create(addcity)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error creating city"
            });
        });
};
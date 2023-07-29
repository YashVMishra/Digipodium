const express = require('express');
const router = express.Router();
const Model = require('../models/contactModel');

router.post('/add', (req, res) => {
    console.log(req.body);

    // saving the data to mongoDB
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

// colon denotes a URL parameter.
router.get('/getbytitle/:title', (req, res) => {
    console.log(req.params.id);
    Model.find({title : req.params.title})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;
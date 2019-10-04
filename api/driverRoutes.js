var express = require('express');
var router = express.Router();
var { schedules } = require('./data/schedules');

router.get('/schedules', (req, res) => {
    return res.status(200).send({
        schedules
    });
})

module.exports = router;
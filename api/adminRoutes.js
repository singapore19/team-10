var express = require('express');
var router = express.Router();

router
.get('/requests', (req, res) => {
    return res.status(200).send({
        requests: global.requests
    })
})
.post('/requests', (req, res) => {
    var date = new Date();
    var request = {
        "request_id": Math.floor(Math.random() * 900),
        "request_date": String(date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()),
        "request_type": req.body.request_type,
        "preferred_timeslot": req.body.preferred_timeslot,
        "location_from": req.body.location_from,
        "location_to": req.body.location_to,
        "request_status": req.body.request_status,
        "telegram_chat_id": req.body.telegram_chat_id,
        "emergency_contact_no": "92130612"
    };
    global.requests.push(request);

    return res.status(200).send({
        "message": "Request created"
    });
})
.put('/requests', (req, res) => {
    global.requests = global.requests.map((request) => {
        if(request.request_id == req.body.request_id) {
            return {
                "request_id": request.request_id,
                "request_date": request.request_date,
                "request_type": (req.body.request_type != null && req.body.request_type != undefined) ? req.body.request_type : request.request_type,
                "preferred_timeslot": (req.body.preferred_timeslot != null && req.body.preferred_timeslot != undefined) ? req.body.preferred_timeslot : request.preferred_timeslot,
                "location_from": (req.body.location_from != null && req.body.location_from != undefined) ? req.body.location_from : request.location_from,
                "location_to": (req.body.location_to != null && req.body.location_to != undefined) ? req.body.location_to : request.location_to,
                "request_status": (req.body.request_status != null && req.body.request_status != undefined) ? req.body.request_status : request.request_status,
                "telegram_chat_id": request.telegram_chat_id,
                "emergency_contact_no": "92130612"
            }
        } else {
            return request
        }
    });

    return res.status(200).send({
        "message": "Request updated"
    })
})
.delete('/requests', (req, res) => {
    global.requests = global.requests.filter((request) => {
        return request.request_id != req.body.request_id
    });

    return res.status(200).send({
        "message": "Request deleted"
    })
});

router
.get('/schedules', (req, res) => {
    res.status(200).send({
        schedules: global.schedules
    })
})
.post('/schedules', (req, res) => {
    var request = {
        "request_id": 124,
        "request_date": "12/09/2019",
        "request_type": "Document Delivery",
        "preferred_timeslot": "Afternoon",
        "location_from": "70 Barker Rd, #05-01, Singapore 309936",
        "location_to": "25 Geylang East Ave 1, #01-05, Singapore 381125",
        "request_status": "Completed",
        "telegram_chat_id": "rogerlee12",
        "emergency_contact_no": "92130612"
    };
    global.schedules[0].scheduled_requests.push(request);

    return res.status(200).send({
        "message": "Request scheduled"
    });
})
.delete('/schedules', (req, res) => {
    global.schedules = global.schedules.map((schedule) => {
        schedule = schedule.scheduled_requests.filter( (request) => {
            return request.request_id != req.body.request_id
        });
        return schedule
    });

    return res.status(200).send({
        "message": "Request deleted"
    });
})

module.exports = router;
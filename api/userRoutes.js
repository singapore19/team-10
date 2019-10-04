var express = require('express');
var router = express.Router();

router.get('/requests', (req, res) => {
    return res.status(200).send({
        requests : global.requests
    })
})

router.post('/requests', (req, res) => {
    var date = new Date();
    var request_timing = "06:00 PM";
    switch(req.body.preferred_timeslot){
        case("Noon"):
            request_timing = "12:00 PM"
            break
        case("Morning"):
            request_timing = "09:00 AM"
            break
        case("Afternoon"):
            request_timing = "04:00 PM"
            break
    }
    var newRequest = {
        "request_id": Math.floor(Math.random() * 900),
        "request_date": req.body.request_date,
        "request_type": req.body.request_type,
        "preferred_timeslot": req.body.preferred_timeslot,
        request_timing,
        "location_from": req.body.location_from,
        "location_to": req.body.location_to,
        "request_status": req.body.request_status,
        "telegram_chat_id": req.body.telegram_chat_id,
        "emergency_contact_no": "92130612"
    }
    global.requests.push(newRequest)
    return res.status(200).send({
        message: "Request added"
    })
})


module.exports = router;
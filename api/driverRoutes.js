var express = require('express');
var router = express.Router();

router.get('/requests', (req, res) => {
    return res.status(200).send({
        requests : global.requests
    })
})

router.put('/completed', (req, res) => {
    global.requests = global.requests.map((request) => {
        if(request.request_id == req.body.request_id) {
            return {
                "request_id": request.request_id,
                "request_date": request.request_date,
                "request_type": request.request_type,
                "preferred_timeslot": request.preferred_timeslot,
                "location_from": request.location_from,
                "location_to": request.location_to,
                "request_status": "Completed",
                "telegram_chat_id": request.telegram_chat_id,
                "emergency_contact_no": request.emergency_contact_no
            }
        } else {
            return request
        }
    })
    return res.status(200).send({
        message: "Request marked as completed"
    })
})

module.exports = router;
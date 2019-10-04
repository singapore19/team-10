const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")
const PORT = 8081;

global.requests = require("./data/requests")
global.schedules = require("./data/schedules")

app.use(cors());
app.use(bodyParser.json());

var userRoutes = require('./userRoutes');
var adminRoutes = require('./adminRoutes');
var driverRoutes = require('./driverRoutes');

app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/driver', driverRoutes)

app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`);
});
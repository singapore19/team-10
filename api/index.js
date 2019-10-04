const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 8081;

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
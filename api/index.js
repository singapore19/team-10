const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

var routes = require('./routes/database');

app.use('', routes);

app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`);
});
//Dependecies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const indexRouter = require("./routes/index");

const PORT = 8080 || process.env.PORT;

//Express app
const app = express();
//not parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse requests of content-type - application/json
app.use(bodyParser.json());
//allows overrides http methods
app.use(methodOverride());
//Use route from routes/index
app.use(indexRouter);

app.listen(PORT, () => {
    console.log(`Server Listening in port ${PORT}`);
});
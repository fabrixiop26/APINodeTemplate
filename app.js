//Dependecies
const express = require("express");
//para parsear json y otros formatos en la reques
const bodyParser = require("body-parser");
//MongoDB
const mongoose = require("mongoose");
//para sobrescribir metodos
const methodOverride = require("method-override");
const PORT = 5000 || process.env.PORT;
//File with DB URL
const dbConfig = require("./database.config");
//Function to route all request made
const router = require("./routes/allRoutes");
//Express app
const app = express();
//not parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse requests of content-type - application/json
app.use(bodyParser.json());
//allows overrides http methods
app.use(methodOverride());

//Configure all routes with the express app
router(app);

//database conecctions
mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Success when connecting to the database");
    })
    .catch(() => {
        console.error("Couldnt connect to the database. Exiting...");
        process.exit();
    })

app.listen(PORT, () => {
    console.log("Listening in port: " + PORT);
});
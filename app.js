//Dependecies
const express = require("express");
//para parsear json y otros formatos en la reques
const bodyParser = require("body-parser");
//MongoDB
const mongoose = require("mongoose");
//para sobrescribir metodos
const methodOverride = require("method-override");
const PORT = 5000;
//Function to route all request made
const router = require("./allRoutes");
const cors = require("cors");
//Express app
const app = express();
//not parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse requests of content-type - application/json
app.use(bodyParser.json());
//allows overrides http methods
app.use(methodOverride());

app.use(cors());
//Configure all routes with the express app
router(app);


//Database connection
if(process.env.NODE_ENV == "production"){
    console.log("Estamos en heroku"); 
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Success when connecting to the database");
    })
    .catch(() => {
        console.error("Couldnt connect to the database. Exiting...");
        process.exit();
    })
    
    app.listen(process.env.PORT, () => {
    console.log("Listening in port: " + process.env.PORT);
});
}else{
    mongoose.connect("mongodb://localhost/ProyectoFinal", { useNewUrlParser: true, useUnifiedTopology: true })
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
}
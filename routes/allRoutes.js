const person = require("./person");
const index = require("./index");

const routes = (app) => {
    app.use("/", index);
    app.use("/person", person);
};

module.exports = routes;
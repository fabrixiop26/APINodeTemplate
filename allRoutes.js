const Combo = require("./components/combos/route");
const Product = require("./components/products/route");
const Purchase = require("./components/purchase/route");
const index = require("./index");

const config = (app) => {
    app.use("/api/combos", Combo);
    app.use("/api/products", Product);
    app.use("/api/purchases", Purchase);

    app.use("/", index);
    app.use("/api", index);

}

module.exports = config;
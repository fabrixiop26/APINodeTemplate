const Product = require("./model");

const getAll = () => {
    return Product.find();
};

const getById = (id) => {
    return Product.find({
        id: id
    });
};

module.exports = {
    getAll,
    getById
}

const Combo = require("./model");

const getAll = () => {
    return Combo.find();
};

const getById = (id) => {
    return Combo.find({
        id: id
    });
};

module.exports = {
    getAll,
    getById
}
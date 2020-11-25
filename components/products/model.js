const moongose = require("mongoose");
var Schema = moongose.Schema;

const ProductSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    tipo : {
        type: String,
        required: true
    },
    presentacion : {
        type: Array,
        required: true
    },
    precio : {
        type: Array,
        required: true
    },
    img: String,
    descripcion: String
});

module.exports = moongose.model("Product", ProductSchema);
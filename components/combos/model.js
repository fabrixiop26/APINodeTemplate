const moongose = require("mongoose");
var Schema = moongose.Schema;

const ComboSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion : {
        type: String,
        required: true
    },
    totalProductos : {
        type: Number,
        required: true
    },
    precio : {
        type: Number,
        required: true
    },
    condiciones : {
        type: Object,
        required: true
    }
});

module.exports = moongose.model("Combo", ComboSchema);
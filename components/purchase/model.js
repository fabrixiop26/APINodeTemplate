const moongose = require("mongoose");
var Schema = moongose.Schema;

const PurchaseSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    fecha : {
        type: Date,
        required: true
    },
    nombreCliente : {
        type: String,
        required: true
    },
    apellidoCliente : {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    correo: String,
    productos : {
        type: Array,
        required: true
    }
});

module.exports = moongose.model("Purchase", PurchaseSchema);
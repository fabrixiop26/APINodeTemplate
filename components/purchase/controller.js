const Purchase = require("./model");

const savePurchase = (data) => {
    const p = new Purchase({
        id : data.id,
        total: data.total,
        productos: data.productos,
        fecha: new Date(),
        nombreCliente: data.nombreCliente,
        apellidoCliente: data.apellidoCliente,
        direccion: data.direccion,
        telefono: data.telefono,
        correo: data.correo
    })

    return p.save();
}



module.exports = {
    savePurchase
}
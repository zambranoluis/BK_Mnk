const mongoose = require('mongoose');

const bebidaEsquema = new mongoose.Schema({
    // nombre:{
    //     type: String,
    //     required: true
    // },
    // descripcion:{
    //     type: String,
    //     required: true
    // },
    // precio: {
    //     type: Number,
    //     required: true
    // },
    // foto:{
    //     type: String,
    //     required: true
    // },
    // fecha_registro:{
    //     type: Date,
    //     default: Date.now
    // },
    // fecha_modificacion:{
    //     type: Date,
    //     default: Date.now
    // }
});

const Bebida = mongoose.model("bebidas", bebidaEsquema);

module.exports = Bebida;

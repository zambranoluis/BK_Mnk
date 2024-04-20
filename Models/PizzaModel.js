const mongoose = require('mongoose');

const pizzaEsquema = new mongoose.Schema({
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

const Pizza = mongoose.model("pizzas", pizzaEsquema);

module.exports = Pizza;

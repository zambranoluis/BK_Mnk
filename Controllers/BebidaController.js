const Bebida = require('../Models/BebidaModel');


exports.ObtenerBebidas = async (req, res) => {
    try {
        console.log(`\n1. Obteniendo Bebidas...`);
        const bebidas = await Bebida.find();
        if (bebidas.length > 0) {
            console.log(`1.1. Si hay bebidas.`);
            res.status(200).json({ datos: bebidas, mensaje: "Si hay bebidas" });
        } else {
            console.log(`1.1. No hay bebidas`);
            res.status(404).json({ datos: [], mensaje: "No hay bebidas" });
        }
    } catch (error) {
        console.error(`Error al obtener bebidas:`, error);
        res.status(500).json({ datos: [], mensaje: "Error al obtener bebidas" });
    }
};

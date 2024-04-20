const Pizza = require('../Models/PizzaModel');


exports.ObtenerPizzas = async (req, res) => {
    try {
        console.log(`\n1. Obteniendo Pizzas...`);
        const pizzas = await Pizza.find();
        if (pizzas.length > 0) {
            console.log(`1.1. Si hay pizzas.`);
            res.status(200).json({ datos: pizzas, mensaje: "Si hay pizzas" });
        } else {
            console.log(`1.1. No hay pizzas`);
            res.status(404).json({ datos: [], mensaje: "No hay pizzas" });
        }
    } catch (error) {
        console.error(`Error al obtener pizzas:`, error);
        res.status(500).json({ datos: [], mensaje: "Error al obtener pizzas" });
    }
};

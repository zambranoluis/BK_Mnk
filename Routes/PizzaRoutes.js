const router = require('express').Router();

const {
    ObtenerPizzas
} = require('../Controllers/PizzaControlles');

router.get("/pizzas", ObtenerPizzas);

module.exports = router;
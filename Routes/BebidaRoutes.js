const router = require('express').Router();

const {
    ObtenerBebidas
} = require('../Controllers/BebidaController');

router.get("/bebidas", ObtenerBebidas);

module.exports = router;
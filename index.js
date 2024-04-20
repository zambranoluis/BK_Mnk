const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const cowsay = require('cowsay');

const app = express();

const puerto = process.env.PORT;
const baseDeDatos = process.env.MONGODB_URI;

const rutasPizza = require('./Routes/PizzaRoutes');
const rutasBebidas = require('./Routes/BebidaRoutes');


async function conectarBD(URI){
    await mongoose.connect(URI)
    .then( (URI === process.env.MONGODB_URI) ? console.log("Conexión establecida a MongoDB Atlas") : console.log("Conexión establecida a la BD local") )
    .catch(error => console.log("Error de conexión a la base de datos", error))
};
conectarBD(baseDeDatos);


app.use(express.json());
app.use(cors({origin: "*"}));

app.use(
    rutasPizza,
    rutasBebidas
);

app.get("/", (req, res)=>{
    res.redirect("http://localhost:3000");
});

app.listen(puerto, ()=>{
    console.log(cowsay.say({
        text: puerto === 8001 
            ? `Servidor corriendo en el puerto secundario ${puerto}\nIngresa a: http://localhost:${puerto}/` 
            : `Servidor corriendo en el puerto principal ${puerto}\nIngresa a: http://localhost:${puerto}/`,
        e: "nn"
    }))
});
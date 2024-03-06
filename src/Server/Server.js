const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')

//Lamado para las variables de ambientes
require("dotenv").config({path: "./db.env"});
//Constante de conexion
const port = process.env.PORT || 3000;
//Para encontrar los origenes de conexion
app.use(cors(port));
//Para que use las librerias de conexion
app.use(express.json());
//Ruta del documento que se va hacer en MongoDB ATLAS
//app.use('/', require("./Eventroutes.js"));
//Conexion al Driver
const dbo = require("./db.connection.js");
//Funcion para escuchar y realizar conexion con el driver del cluster
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/eventos', require("./Eventroutes.js"));
app.use('/eventos/comentarios', require("./Commentroutes.js"));
app.use('/eventos/participantes', require("./Participantroutes.js"));
app.use(express.static(__dirname + "/public"));


mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://Erick:ProyectoLenguaje4@lp4.nza8gvi.mongodb.net/DBA_Eventos?retryWrites=true&w=majority&appName=LP4')
.then(() => {
    console.log('Conectado a MongoDB')
    app.listen(port, () => {
        console.log('Node API app esta ejecutandose en el puerto 3000')
    });
}).catch( () => {
    console.log(error)
})

        //app.listen(port, () => {
            //console.log('servidor a su servicio en el puerto', port)
        //})
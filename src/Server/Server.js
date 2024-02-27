const express = require('express');
const app = express();
const cors = require('cors');


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

app.use('/', require("./Eventroutes.js"));
app.use('/eventos', require("./Commentroutes.js"));

app.use(express.static(__dirname + "/public"));


//app.listen(port, () => {
            //Realiza la conexion a la base de datos
           // dbo.connectToServer(async function (err) {
                //if (err) 
                  //  console.error(err);
             //}); 
             //console.log("Conectado a la base de datos");
        //});

        app.listen(port, () => {
            console.log('servidor a su servicio en el puerto', port)
        })
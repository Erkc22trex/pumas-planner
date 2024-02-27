const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(cors(port));
app.use(express.json());
// motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

//Rutas web
app.use('/', require('./Eventroutes'));

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Título del sitio web"
    })
})

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port)
})
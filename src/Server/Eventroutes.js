const express = require("express");
const router = express.Router();
const Product = require('../Models/Eventmodel')
const app = express()

app.use(express.json())
// Ruta para crear un nuevo evento (POST)
router.post('/crear', async(req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json(Product);
} catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
}
  //res.send("Evento creado con exito");
});

// Ruta para filtrar un nuevo evento (POST)
router.get('/filtrar/:filter', (req, res) => {
  res.send(`Evento con ID ${req.params.filter} filtrados  `);
});

// Ruta para editar un evento existente (PUT/PATCH)
router.put('/editar/:id', (req, res) => {
  // Lógica para editar un evento por su ID
  res.send(`Evento con ID ${req.params.id} editado`);
});

// Ruta para mostrar detalles de un evento (GET)
router.get('/detalles/:id', (req, res) => {
  // Lógica para obtener detalles de un evento por su ID
  res.send(`Detalles del evento con ID ${req.params.id}`);
});

// Ruta para eliminar un evento (DELETE)
router.delete('/eliminar/:id', (req, res) => {
  // Lógica para eliminar un evento por su ID
  res.send(`Evento con ID ${req.params.id} eliminado`);
});

module.exports = router;
// Iniciar el servidor
//app.listen(3000, () => {
 // console.log('Servidor en funcionamiento en el puerto 3000');
//});
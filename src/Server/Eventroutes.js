const express = require("express");
const router = express.Router();
const Evento = require('../Models/Eventmodel')
const app = express()

app.use(express.json())
// Ruta para crear un nuevo evento (POST)
router.post('/crear', async(req, res) => {
  try {
    const evento = await Evento.create(req.body)
    res.status(200).json(evento);
} catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
}
  //res.send("Evento creado con exito");
});

// Ruta para filtrar un nuevo evento (POST)
router.get ('/filtrar', async (req, res) => {
  try {
      const evento = await Evento.find({});
      res.status(200).json(evento);
  } catch (error) {
      res.status(500).json({message: error, message})
  }
});
router.get('/filtrar/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const evento = await Evento.findById(id);
    res.status(200).json(evento);
} catch (error) {
    res.status(500).json({message: error, message})
}
});

// Ruta para editar un comentario existente (PUT/PATCH)
router.put('/editar/:id', async(req, res) => {
  // Lógica para editar un evento por su ID
  try {
    const {id} = req.params;
    const evento = await Evento.findByIdAndUpdate(id, req.body);
    //No se puede encontrar el producto en la base de datos
    if (!evento){
        return res.status(404).json({message: `No se puede encontrar ningun evento con el ID ${id}`});
    }
    res.status(200).json(evento);
}catch (error) {
    res.status(500).json({message: error, message})
}
});
router.delete('/eliminar/:id', async(req, res) => {
  // Lógica para eliminar un evento por su ID
  try {
    const {id} = req.params;
    const evento = await Evento.findByIdAndDelete(id);
    if (!evento){
        return res.status(404).json({message: `No se puede encontrar ningun evento con el ID ${id}`});
    }
    res.status(200).json(evento);
} catch (error) {
    res.status(500).json({message: error, message})
}
});

module.exports = router;
// Iniciar el servidor
//app.listen(3000, () => {
 // console.log('Servidor en funcionamiento en el puerto 3000');
//});
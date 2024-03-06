const express = require("express");
const router = express.Router();
const Comentario = require('../Models/Commentmodel');
const app = express()

// Ruta para crear un nuevo comentario (POST)
router.post('/crear', async(req, res) => {
  try {
    const comentario = await Comentario.create(req.body)
    res.status(200).json(comentario);
} catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
}
  //res.send("Evento creado con exito");
});

// Ruta para filtrar un nuevo comentario (POST)
router.get ('/filtrar', async (req, res) => {
  try {
      const comentario = await Comentario.find({});
      res.status(200).json(comentario);
  } catch (error) {
      res.status(500).json({message: error, message})
  }
});
router.get('/filtrar/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const comentario = await Comentario.findById(id);
    res.status(200).json(comentario);
} catch (error) {
    res.status(500).json({message: error, message})
}
});

// Ruta para editar un comentario existente (PUT/PATCH)
router.put('/editar/:id', async(req, res) => {
  // Lógica para editar un evento por su ID
  try {
    const {id} = req.params;
    const comentario = await Comentario.findByIdAndUpdate(id, req.body);
    //No se puede encontrar el producto en la base de datos
    if (!comentario){
        return res.status(404).json({message: `No se puede encontrar ningun comentario con el ID ${id}`});
    }
    res.status(200).json(product);
}catch (error) {
    res.status(500).json({message: error, message})
}
});
router.delete('/eliminar/:id', async(req, res) => {
  // Lógica para eliminar un evento por su ID
  try {
    const {id} = req.params;
    const comentario = await Comentario.findByIdAndDelete(id);
    if (!comentario){
        return res.status(404).json({message: `No se puede encontrar ningun comentario con el ID ${id}`});
    }
    res.status(200).json(comentario);
} catch (error) {
    res.status(500).json({message: error, message})
}
});

module.exports = router;
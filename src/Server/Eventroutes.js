const express = require("express");
const router = express.Router();
const Evento = require('../Models/Eventmodel')
const app = express()

app.use(express.json())


// Ruta para traer todos los eventos (GET)
router.get('/alls', async (req, res) => {
  try {
    const evento = await Evento.find({});
    res.status(200).json(evento);
  } catch (error) {
    res.status(500).json({ message: error, message })
  }
});

// Ruta para crear un nuevo evento (POST)
router.post('/crear', async (req, res) => {
  try {
    const { nombre, fecha, hora, lugar, descripcion, image, id_usr } = req.body

    const evento = new Evento({
      nombre,
      fecha,
      hora,
      lugar,
      descripcion,
      image,
      id_usr
    })

    evento.save()

    res.status(200).json({
      message: "Evento creado con exito"
    });

  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
});

// Ruta para filtrar un nuevo evento (POST)
router.get('/filtrar/:id', async (req, res) => {
  try {
    const { id } = req.params
    const eventos = await Evento.find({ id_usr: id})
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).json({
      message: "Error"
    })
  }
});

router.get('/buscar', async (req, res) => {
  try {
    const { nombre } = req.query; // Cambiamos a req.query para obtener el parámetro de consulta 'nombre'
    let eventos;

    if (nombre) {
      // Si se proporciona un nombre en la consulta, buscar eventos por nombre
      eventos = await Evento.find({ nombre: { $regex: new RegExp(nombre, 'i') } });
    } else {
      // Si no se proporciona un nombre, obtener todos los eventos
      eventos = await Evento.find();
    }

    if (eventos.length === 0) {
      // Si no se encuentran eventos, enviar una respuesta indicando que no se encontraron resultados
      return res.status(404).json({ message: "No se encontraron eventos para el nombre proporcionado" });
    }

    // Enviar los eventos encontrados en formato JSON
    res.status(200).json(eventos);
  } catch (error) {
    console.error('Error al obtener eventos:', error);
    res.status(500).json({ message: "Error al obtener eventos" });
  }
});

// Ruta para editar un comentario existente (PUT/PATCH)
router.put('/editar/:id', async (req, res) => {
  // Lógica para editar un evento por su ID
  try {
    const { id } = req.params;

    const evento = await Evento.findByIdAndUpdate(id, req.body);
    //No se puede encontrar el producto en la base de datos
    if (!evento) {
      return res.status(404).json({ message: `No se puede encontrar ningun evento con el ID ${id}` });
    }
    res.status(200).json(evento);
  } catch (error) {
    res.status(500).json({ message: error, message })
  }
});
router.delete('/eliminar/:id', async (req, res) => {
  // Lógica para eliminar un evento por su ID
  try {
    const { id } = req.params;
    const evento = await Evento.findByIdAndDelete(id);
    if (!evento) {
      return res.status(404).json({ message: `No se puede encontrar ningun evento con el ID ${id}` });
    }
    res.status(200).json(evento);
  } catch (error) {
    res.status(500).json({ message: error, message })
  }
});

module.exports = router;
// Iniciar el servidor
//app.listen(3000, () => {
// console.log('Servidor en funcionamiento en el puerto 3000');
//});
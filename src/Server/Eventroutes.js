const express = require("express");
const router = express.Router();
const Evento = require('../Models/Eventmodel')
const app = express()

app.use(express.json())


// Ruta para traer todos los eventos (GET)
router.get('/alls', async (req, res) => {
    try {
        console.log("ALLS")
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

// Ruta para filtrar un nuevo evento (GET)
router.get('/filtrar/:id', async (req, res) => {
    try {
        const { id } = req.params
        console.log("Filtrar", id)
        const events1 = await Evento.find({ id_usr: id }) // eventos Creados Por Mi
        const events2 = await Evento.find({ usrs_registrados: { $in: [id] } }); // Eventos en los que estás registrado

        res.status(200).json([...events1, ...events2]);
    } catch (error) {
        res.status(500).json({
            message: "Error"
        })
    }
});

router.get('/filtrarMisEventos/:id', async (req, res) => {
    try {
        const { id } = req.params
        console.log("Filtrar", id)
        const events = await Evento.find({ id_usr: id }) // eventos Creados Por Mi
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({
            message: "Error"
        })
    }
});

router.get('/filtrarNo/:id', async (req, res) => {
    try {
        const { id } = req.params
        console.log("Filtrar no ", id)
        // const events = await Evento.find({ usrs_registrados: { $nin: [id] } }); // Eventos en los que no estás registrado
        const events = await Evento.find({ 
            $and: [
                { id_usr: { $ne: id } }, // Eventos cuyo id_usr no es el tuyo
                { usrs_registrados: { $nin: [id] } } // Eventos en los que no estás registrado
            ]
         }); // Eventos en los que no estás registrado

        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({
            message: "Error"
        })
    }
});


router.put('/registrar/:id', async (req, res) => {
    const eventId = req.params.id;
    const { userId } = req.body;

    try {
        const evento = await Evento.findById(eventId);
        if (!evento) {
            return res.status(404).json({ message: 'Evento no encontrado' });
        }

        evento.usrs_registrados.push(userId);
        await evento.save();

        res.json({ message: 'Usr_id asignado correctamente al evento' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un error al asignar usr_id al evento' });
    }
})

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
    try {
        const { id } = req.params;
        console.log(id)
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
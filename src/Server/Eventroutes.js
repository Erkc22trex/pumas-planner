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

router.put('/registrar/:eventoId', async (req, res) => {
    const { eventoId } = req.params;
    const { userId } = req.body;

    try {
        // Verificar si el evento existe
        const evento = await Evento.findById({
            _id: eventoId
        });
        if (!evento) {
            return res.status(200).json({ message: 'Evento no encontrado' });
        }

        // Verificar si el usuario ya está registrado en el evento
        if (evento.usrs_registrados.includes(userId)) {
            return res.status(200).json({ message: 'El usuario ya está registrado en este evento' });
        }

        // verificar que el usuario no sea el creador del evento
        if (evento.id_usr === userId) {
            return res.status(200).json({ message: 'No puedes registrar a ti mismo' });
        }

        // Agregar el usuario al arreglo de usrs_registrados
        evento.usrs_registrados.push(userId);
        await evento.save();

        res.status(200).json({ message: 'Usuario agregado al evento correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Ruta para filtrar un nuevo evento (GET)
router.get('/filtrar/:id', async (req, res) => {
    try {
        const { id } = req.params
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
        const events1 = await Evento.find({ id_usr: { $ne: id } })
        const events2 = await Evento.find({ usrs_registrados: { $nin: [id] } });
        res.status(200).json([...events1, ...events2]);
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
router.put('/eliminar/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { usr_id } = req.body;
        console.log(usr_id)
        // const evento = await Evento.findByIdAndDelete(id);
        const evento = await Evento.findById(id);
        if (!evento) {
            return res.status(404).json({ message: `No se puede encontrar ningún evento con el ID ${id}` });
        }

        // Verificar si el usr_id coincide con el id del evento
        if (evento.id_usr === usr_id) {
            // Si coincide, eliminar completamente el evento
            await Evento.findByIdAndDelete(id);
            return res.status(200).json({ message: `Evento con ID ${id} eliminado correctamente` });
        } else {
            // Si no coincide, eliminar solo el usr_id del arreglo usrs_registrados
            const index = evento.usrs_registrados.indexOf(usr_id);
            if (index !== -1) {
                evento.usrs_registrados.splice(index, 1);
                await evento.save();
                return res.status(200).json({ message: `Usuario con ID ${usr_id} eliminado del evento ${id}` });
            }
            return res.status(200).json({ message: `El usuario con ID ${usr_id} no está registrado en el evento ${id}` });
        }
    } catch (error) {
        res.status(500).json({ message: error, message })
    }
});

module.exports = router;
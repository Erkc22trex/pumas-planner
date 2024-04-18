const express = require("express");
const router = express.Router();
const participante = require('../Models/sendEmail');
require('dotenv').config();

// Ruta para añadir un nuevo participante (POST)
router.post('/invitar/:email', async(req, res) => {
    try {
      const { email } = req.params;
        await participante({
            //the client email 
            to: email,
            //sendGrid sender id 
            from: 'pumas.planner24@gmail.com',
            templateId: process.env.TEMPLATE_ID,
        });
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Ruta para traer un nuevo participante (GET)
router.get('/filtrar/:filter', (req, res) => {
    res.send('Ruta de para obtener un participante con id: ${req.params.filter}');
  });
  
  // Ruta para eliminar un participante (DELETE)
router.delete('/eliminar/:id', (req, res) => {
    // Lógica para eliminar un evento por su ID
    res.send(`Participante con ID ${req.params.id} eliminado`);
  });
  
  module.exports = router;
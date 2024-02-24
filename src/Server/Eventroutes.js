const express = require("express");
const app = express();
const port = 3000;
// Ruta para crear un nuevo evento (POST)
app.post('/eventos', (req, res) => {
  console.log(reqle)
  res.send('Evento creado con éxito');
});

// Ruta para editar un evento existente (PUT/PATCH)
app.put('/eventos/:id', (req, res) => {
  // Lógica para editar un evento por su ID
  res.send(`Evento con ID ${req.params.id} editado`);
});

// Ruta para mostrar detalles de un evento (GET)
app.get('/eventos/:id', (req, res) => {
  // Lógica para obtener detalles de un evento por su ID
  res.send(`Detalles del evento con ID ${req.params.id}`);
});

// Ruta para eliminar un evento (DELETE)
app.delete('/eventos/:id', (req, res) => {
  // Lógica para eliminar un evento por su ID
  res.send(`Evento con ID ${req.params.id} eliminado`);
});

// Iniciar el servidor
//app.listen(3000, () => {
 // console.log('Servidor en funcionamiento en el puerto 3000');
//});
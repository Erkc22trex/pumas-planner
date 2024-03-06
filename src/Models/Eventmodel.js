const mongoose = require('mongoose')

const eventoSchema = mongoose.Schema(
    {
        Titulo: {
            type: String,
            required: [true,"Porfavor ingrese un producto"]
        },
        Fecha: {
            type: String,
            required: true,
            default: 0
        },
        Hora: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            requiered: false,
        }
    },
    {
        timestamps: true
    }
)

const Eventos = mongoose.model('/crear', eventoSchema);

module.exports = Eventos;
const mongoose = require('mongoose')

const eventoSchema = mongoose.Schema(
    {
        event_name: {
            type: String,
            required: [true,"POr favor ingrese un nombre"]
        },
        place: {
            type: String,
            required: true,
            default: 0
        },
        schedule_date: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
        participants:{
            type: String,
            required: false,
        },
        duration:{
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)

const Eventos = mongoose.model('Eventos', eventoSchema);

module.exports = Eventos;
const mongoose = require('mongoose')

// const eventoSchema = mongoose.Schema(
//     {
//         event_name: {
//             type: String,
//             required: [true,"POr favor ingrese un nombre"]
//         },
//         place: {
//             type: String,
//             required: true,
//             default: 0
//         },
//         schedule_date: {
//             type: String,
//             required: false,
//         },
//         description: {
//             type: String,
//             required: false,
//         },
//         participants:{
//             type: String,
//             required: false,
//         },
//         duration:{
//             type: String,
//             required: false,
//         }
//     },
//     {
//         timestamps: true
//     }
// )

const eventoSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
        },
        lugar: {
            type: String,
        },
        fecha: {
            type: Date,
        },
        hora: {
            type: Date,
        },
        lugar: {
            type: String,
        },
        descripcion: {
            type: String,
        },
        image: {
            type: String,
        },
        id_usr: {
            type: String,
        }
    },
    {
        timestamps: true
    }
)

const Eventos = mongoose.model('Eventos', eventoSchema);

module.exports = Eventos;
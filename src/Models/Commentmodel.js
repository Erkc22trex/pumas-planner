const mongoose = require('mongoose')

const commentSchema = mongoose.Schema(
    {
        Comentario: {
            type: String,
            required: [true,"Debe de ingresar un mensaje"]
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
        Usuario: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)

const Comentarios = mongoose.model('Comentarios', commentSchema);

module.exports = Comentarios;
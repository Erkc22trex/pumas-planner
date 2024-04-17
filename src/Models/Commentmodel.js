const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    Comentario: {
        type: String,
    }
});

const Comentarios = mongoose.model('Comentarios', commentSchema);

module.exports = Comentarios;

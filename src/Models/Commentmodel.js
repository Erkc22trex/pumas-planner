const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    Comentario: {
        type: String,
    }
});

const Comentario = mongoose.model('Comentario', commentSchema);

module.exports = Comentario;

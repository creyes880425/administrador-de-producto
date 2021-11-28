const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, 'El título es requerido'],
        minlength: [3, 'El título debe tener al menos 3 caracteres']
    },
    precio: {
        type: Number,
        min:[1, 'No puede ser menor a 1 años'],
        max: [120, 'No puede tener mas de 120 años']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es requerida'],
        minlength: [3, 'La descripción debe tener al menos 3 caracteres']
    }
}, { timestamps: true });

const Producto = mongoose.model("Producto", ProductoSchema);

module.exports = Producto;
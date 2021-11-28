const Producto = require('../models/producto.model');


module.exports.create = (req, resp) => {
    const producto = req.body;
    Producto.create(producto)
        .then(data => resp.status(200).json({ ok: true, message: 'Se agregó el producto', data: data}))
        .catch(error => {
            console.log('CREATE', error);
            if(error.name === 'ValidationError'){
                resp.status(500).json({ok: false, message: error.message, error: error})
            } else{
                resp.status(500).json({ok: false, message: 'Error al guardar el producto'})
            }
        });
}

module.exports.edit = (req, resp) => {
    const producto = req.body;
    Producto.findOneAndUpdate({_id: req.params.id }, producto)
        .then(data => resp.status(200).json({ ok: true, message: 'Se actualizó el producto', data: producto}))
        .catch(error => {
            console.log('EDIT', error);
            if(error.name === 'ValidationError'){
                resp.status(500).json({ok: false, message: error.message, error: error})
            } else{
                resp.status(500).json({ok: false, message: 'Error al guardar el producto'})
            }
        });
}

module.exports.get = (req, resp) => {
    Producto.findById(req.params.id)
        .then(data => resp.status(200).json({ ok: true, message: 'Producto', data: data}))
        .catch(error => {
            console.log('GET', error);
            resp.status(500).json({ok: false, message: 'Error al obtener el producto'})
        });
}

module.exports.list = (req, resp) => {
    Producto.find()
        .then(data => resp.status(200).json({ ok: true, message: 'Productos', data: data}))
        .catch(error => {
            console.log('LIST', error);
            resp.status(500).json({ok: false, message: 'Error al obtener els productos'})
        });
}

module.exports.del = (req, resp) => {
    Producto.findByIdAndRemove(req.params.id)
        .then(data => resp.status(200).json({ ok: true, message: 'Se eliminó  el producto', data: data}))
        .catch(error => {
            console.log('DELETE', error);
            resp.status(500).json({ok: false, message: 'Error al eliminar el producto'})
        });
}
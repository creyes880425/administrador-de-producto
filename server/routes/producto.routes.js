const ProductoController = require('../controllers/producto.controller');

module.exports = app => {
    app.get('/api/productos', ProductoController.list);
    app.get('/api/productos/:id', ProductoController.get);
    app.post('/api/productos', ProductoController.create);
    app.put('/api/productos/:id', ProductoController.edit);
    app.delete('/api/productos/:id', ProductoController.del);
}
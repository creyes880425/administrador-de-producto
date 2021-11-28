import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import ProductoForm from './form';

const ProductoAdmin = (props) => {

    const [list, setList] = useState([]);

    const agregar = (data) => {
        axios.post('/api/productos', data)
            .then(resp => {
                // Se agrega elemento creado al listado directamente evitando realizar una llamada al backend para recargar el listado
                setList([
                    ...list,
                    resp.data.data
                ]);
            }).catch(error => {
                console.log(error); // Revisar el mensaje de error
                Swal.fire('Error al crear el producto', error?.message, 'error')
            });
    }

    return (
        <>
            <ProductoForm accion={ agregar }/>
        </>
    );
}

export default ProductoAdmin;
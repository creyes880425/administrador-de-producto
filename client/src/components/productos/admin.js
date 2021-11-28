import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ProductoForm from './form';
import ProductoList from './list';
import ProductoView from './view';

const ProductoAdmin = (props) => {

    const [list, setList] = useState([]);
    const [actualizar, setActualizar] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('/api/productos')
            .then(resp => {
                setList(resp.data.data);
                setLoaded(true);
            })
            .catch(error =>
                Swal.fire('Error', error.message, 'error'));
    }, [actualizar]);

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
            <ProductoForm accion={agregar} />
            <hr/>
            {loaded && <ProductoList list={list}/>}
            {/* <Routes>
                <Route index element={<ProductoForm accion={agregar} />} />
                
                <Route index element={<ProductoList list={list} /> } />
                <Route path="view/:id" element={<ProductoView />} />
            </Routes> */}
        </>
    )
}

export default ProductoAdmin;
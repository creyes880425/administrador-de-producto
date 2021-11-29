import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProductoForm from './form';
import ProductoList from './list';
import ProductoView from './view';

const ProductoAdmin = (props) => {

    const [list, setList] = useState([]);
    const [actualizar, setActualizar] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/productos')
            .then(resp => {
                setList(resp.data.data);
                setLoaded(true);
            })
            .catch(error =>
                console.log('Error', error.message));
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
                console.log('Error al crear el producto', error?.message)
            });
    }

    const editar = (data) => {
        axios.put(`/api/productos/${data._id}`, data)
            .then(resp => {
                setActualizar(!actualizar)
                navigate('./');
            })
            .catch(error => console.log('Error al actualizar el producto', error));
    }

    const eliminar = id => {
        axios.delete(`/api/productos/${id}`)
            .then(resp => {
                const lista = [...list];
                lista.splice(lista.findIndex(e => e._id === id), 1);
                setList(lista);
            }).catch(error => console.log('Error al eliminar el producto', error?.message));
    }

    return (
        <>
            {/* <ProductoForm accion={agregar} />*/}

            <Routes>
                <Route index element={
                        <>
                            <ProductoForm accion={agregar} />
                            <hr/>
                            {loaded && <ProductoList list={list} eliminar={eliminar} />}
                        </>
                    } />
                <Route path="view/:id" element={<ProductoView eliminar={eliminar} />} />
                <Route path="/:id/edit" element={<ProductoForm accion={editar} edicion={true}/>} />
            </Routes>
        </>
    )
}

export default ProductoAdmin;
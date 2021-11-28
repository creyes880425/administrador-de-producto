import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap';

export const ProductoView = (props) => {

    const [producto, setProducto] = useState({});
    const { id } = useParams();

    const navigate = useNavigate();
    const volver = e => {
        e.stopPropagation();
        navigate('../')
    }

    useEffect(() => {
        console.log(id);
        axios.get("/api/productos/" + id)
            .then(res => setProducto({
                ...res.data.data
            }))
    }, [])

    return (
        <Col md={{ offset: 3, size: 6 }} sm="12">
            <Card color="light">
                <CardBody>
                    <CardTitle tag="h5">
                        Título: {producto.titulo}
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Precio: {producto.precio}
                    </CardSubtitle>
                    <CardText>
                        Descripción: {producto.descripcion}
                    </CardText>
                    <Button type="button" onClick={volver}>Volver</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ProductoView;
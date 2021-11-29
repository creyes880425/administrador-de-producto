import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Row, Form, Col, FormGroup, Label, Input, Button } from 'reactstrap';

const initialState = {
    titulo: '',
    precio: 0,
    descripcion: ''
}

const ProductoForm = (props) => {

    const [inputs, setInputs] = useState(initialState);
    const { id } = useParams();
    const navigate = useNavigate();

    const volver = e => {
        e.stopPropagation();
        setInputs(initialState);
        navigate('../')
    }

    const actualizarValor = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const guardar = e => {
        e.preventDefault();
        const data = { ...inputs };
        data._id = id;
        props.accion(data);
        setInputs(initialState);
    }

    useEffect(() => {
        if (id) {
            axios.get(`/api/productos/${id}`)
                .then(resp => setInputs(resp.data.data))
                .catch(error => console.log('Error al obtener producto'));
        }
    }, [id])

    return (
        <>
            <Col md={{ offset: 4, size: 4 }} sm="12">
                <Row>
                    <h3>Administrador de Productos</h3>
                </Row>
                <Row>
                    <Form onSubmit={guardar}>
                        <Row>
                            <Col xs={12}>
                                <FormGroup>
                                    <Label>Título:</Label>
                                    <Input type="text" minLength={3} required name="titulo" value={inputs.titulo} onChange={actualizarValor} />
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup>
                                    <Label>Precio:</Label>
                                    <Input type="number" min={1} max={120} required name="precio" value={inputs.precio} onChange={actualizarValor} />
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup>
                                    <Label>Descripción:</Label>
                                    <Input type="text" minLength={3} required name="descripcion" value={inputs.descripcion} onChange={actualizarValor} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3} style={{ marginRight: '10px'}}>
                                <Button type="submit" color='primary'>Guardar</Button>
                            </Col>
                            { props.edicion &&
                                <Col xs={3}>
                                    <Button type="button" onClick={volver}>Volver</Button>
                                </Col>
                            }
                        </Row>
                    </Form>
                </Row>
            </Col>
        </>
    )
}

export default ProductoForm;
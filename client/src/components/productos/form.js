import { useState } from 'react';
import { Row, Form, Col, FormGroup, Label, Input, Button } from 'reactstrap';

const initialState = {
    titulo: '',
    precio: 0,
    descripcion: ''
}

const ProductoForm = (props) => {

    const [inputs, setInputs] = useState(initialState);

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
        props.accion(data);
        setInputs(initialState);
    }

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
                            <Col>
                                <Col xs={3}>
                                    <Button type="submit">Crear</Button>
                                </Col>
                            </Col>
                        </Row>
                    </Form>
                </Row>
            </Col>
        </>
    )
}

export default ProductoForm;
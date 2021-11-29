import { Link } from 'react-router-dom';
import { Button, Col,  Table } from 'reactstrap';
import DeleteButton from './delete';

const ProductoList = (props) => {

    return (
        <Col md={{ offset: 3, size: 6 }} sm="12">
            <Table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Precio</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list && props.list.map((elem, i) => <tr key={i}>
                        <td>{elem.titulo}</td>
                        <td>{elem.precio}</td>
                        <td>{elem.descripcion}</td>
                        <td>
                            <Link to={`view/${elem._id}`} style={{ margin: '5px' }}><Button color="primary" type="button" style={{ marginRight: '5px'}}>Ver</Button></Link>
                            <Link to={`/${elem._id}/edit`} style={{ margin: '5px' }}><Button color="success" type="button" style={{ marginRight: '5px'}}>Editar</Button></Link>
                            <DeleteButton eliminar={props.eliminar} id={elem._id}/>
                        </td>
                    </tr>)}
                </tbody>
            </Table>
        </Col>
    )
}

export default ProductoList;
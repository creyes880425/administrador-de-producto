import { Link } from 'react-router-dom';
import { Col, List, Row, Table } from 'reactstrap';
import { AiFillDelete, AiFillEdit, AiFillEye } from 'react-icons/ai';
import { FaPaw } from 'react-icons/fa';

const ProductoList = (props) => {

    const eliminar = (e, id) => {
        e.stopPropagation();
        if (id) {
            props.eliminar(id);
        }
    }

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
                            <Link to={`view/${elem._id}`} style={{ margin: '5px' }}><AiFillEye /></Link>
                        </td>
                    </tr>)}
                </tbody>
            </Table>
        </Col>
    )
}

export default ProductoList;
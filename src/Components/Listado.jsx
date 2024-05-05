import Table from 'react-bootstrap/Table';

 function Listado({colaboradores, eliminar}) {
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Telefono</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {colaboradores.map((colaborador, index) => (
                    <tr key={index}>
                        <td>{colaborador.id}</td>
                        <td>{colaborador.nombre}</td>
                        <td>{colaborador.correo}</td>
                        <td>{colaborador.edad}</td>
                        <td>{colaborador.cargo}</td>
                        <td>{colaborador.telefono}</td>
                        <td><button type="button" className="btn btn-danger" onClick={() => eliminar(colaborador.id)}>Eliminar</button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
    }
    export default Listado
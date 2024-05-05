import './App.css'
import { Data } from './Components/Data';
import Listado from './Components/Listado';
import Formulario from './Components/Formulario';
import Alert from './Components/Alert';
import Buscador from './Components/Buscador';
import { useState } from 'react';

let index = Data.length
function App() {
    const [colaboradores, setColaboradores] = useState([...Data]);
    const agregarColaborador = (newColaborador) => {
        setColaboradores(colaborador => [...colaborador, { ...newColaborador, id: index++ }]);
        setAlerta({ tipo: 'success', mensaje: 'Agregado correctamente' });
    }

    const eliminarColaborador = (id) => {
        setColaboradores(colaborador => colaborador.filter(colaborador => colaborador.id !== id));
        setAlerta({ tipo: 'success', mensaje: 'Eliminado correctamente'});
    }

    const [alerta, setAlerta] = useState(null);

    const handleAlerta = ({ tipo, mensaje }) => {
        setAlerta({ tipo, mensaje });
    }

    const [buscador, setBuscador] = useState('');

    const handleBuscador = e => {
        setBuscador(e.target.value);
    }

    function filtrarColaboradores(colaboradores) {
        const filtro = buscador.toLowerCase();
        return colaboradores.filter(colaborador => {
            return colaborador.nombre.toLowerCase().includes(filtro) || colaborador.correo.toLowerCase().includes(filtro) || colaborador.cargo.toLowerCase().includes(filtro) || colaborador.edad.toString().includes(filtro) || colaborador.telefono.toString().includes(filtro) || colaborador.id.toString().includes(filtro);
        })
    }
    return (
        <div>
            <div className='d-none d-md-block'>
                <h1>Base de datos de Colaboradores</h1>
                <Buscador handleBuscador={handleBuscador} />
                <Listado colaboradores={filtrarColaboradores(colaboradores)} eliminarColaborador={eliminarColaborador} />
            </div>
            <div className='container-fluid' >
                <Formulario className="col-sm-12" agregarColaborador={agregarColaborador} handleAlerta={handleAlerta} />
                {alerta ? <Alert tipo={alerta.tipo} mensaje={alerta.mensaje} /> : null}
            </div>
        </div>
    )
}

export default App

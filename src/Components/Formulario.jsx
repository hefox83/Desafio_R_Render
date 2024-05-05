
import { useState } from 'react'
function Formulario({ agregarColaborador, handleAlerta }) {
    const [datos, setDatos] = useState({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: '',
    });

    const handleChange = e => {
        setDatos({...datos,[e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (datos.nombre.trim() === '' || datos.correo.trim() === '' || datos.edad.trim() === '' || datos.cargo.trim() === '' || datos.telefono.trim() === '') {
            handleAlerta({
                tipo: 'danger',
                mensaje: 'Completa todos los campos'
            })
            return;
        }
        if (isNaN(datos.edad)) {
            handleAlerta({
                tipo: 'danger',
                mensaje: ' ingrese su edad'
            })
            return;
        }

        if (isNaN(datos.telefono)) {
            handleAlerta({
                tipo: 'danger',
                mensaje: 'Ingrese Telefono'
            })
            return;
        }

        agregarColaborador({ ...datos });
        setDatos({
            nombre:'',
            correo: '',
            edad: '',
            cargo: '',
            telefono: '',
        })
    }

    return (
        <div>
            <h3 className="mb-5" >Agrega Colaborador</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input type="text" placeholder="Nombre y Apellido" className="nombre" name="nombre" value={datos.nombre} onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <input type="email" placeholder="Correo" className="email" name="correo" value={datos.correo} onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <input type="text" placeholder="Edad" className="edad" name="edad" value={datos.edad} onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <input type="text" placeholder="Cargo" className="cargo" name="cargo" value={datos.cargo} onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <input type="text"  pattern='[0-9]*' placeholder="Telefono" className="telefono" name="telefono" value={datos.telefono} onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <button  type="submit" className="btn btn-primary">Agregar</button>
                </div>
            </form>
        </div>
    )
}
export default Formulario
// import './AgregarItem.css';
import React, { useState } from 'react';

const AgregarItem = ({tareas, setTareas}) => {
    const [tareaInput, setTareaInput] = useState('');

    const handleInputChange = (e) => {
        setTareaInput(e.target.value);
    };

    const mandar = () => {
        if (tareaInput === "") {
            alert("No puedes enviar una tarea vacía");
        } else {
            const nuevaTarea = {
                tarea: tareaInput,
                tachada: false,
                fechaCreacion: new Date(),
                fechaTachado: null
            };
            setTareas([...tareas, nuevaTarea]);
            setTareaInput('');
        }
    };

    const tachar = (index) => {
        const nuevasTareas = [...tareas];
        nuevasTareas[index].tachada = !nuevasTareas[index].tachada;
        nuevasTareas[index].fechaTachado = new Date();
        setTareas(nuevasTareas);
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = tareas.filter((_, i) => i !== index);
        setTareas(nuevasTareas);
    };

    return (
        <div>
            <h1>To Do List</h1>
            <div id="agregar-tarea">
                <div className="input-container">
                    <input 
                        type="text" 
                        id="agregado" 
                        value={tareaInput} 
                        onChange={handleInputChange}
                    />
                    <button id="send" onClick={mandar}>Agregar Item</button>
                </div>
            </div>
            <ul id="listToDO">
                {tareas.map((t, index) => (
                    <li key={index}>
                        <span 
                            className="tarea" 
                            onClick={() => tachar(index)}
                            style={{ textDecoration: t.tachada ? 'line-through' : 'none' }}
                        >
                            {t.tarea}
                        </span>
                        <button className="bot" onClick={() => eliminarTarea(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AgregarItem;





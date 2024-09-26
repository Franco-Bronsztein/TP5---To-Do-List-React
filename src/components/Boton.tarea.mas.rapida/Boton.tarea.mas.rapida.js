// import './boton.tarea.mas.rapida.css';
import React, { useState } from 'react';

function Botontarearapida({tareas, setTareas}) {
    const [respuesta, setRespuesta] = useState("");

    function mostrarTareaMasRapida() {
        const tareasCompletadas = tareas.filter(tarea => tarea.tachada && tarea.fechaTachado);
        if (tareasCompletadas.length > 0) {
            let tareaMasRapida = tareasCompletadas.reduce((min, tarea) => {
                if (tarea.fechaTachado - tarea.fechaCreacion < min.fechaTachado - min.fechaCreacion) {
                    return tarea;
                } else {
                    return min;
                }
            }, tareasCompletadas[0]);

            setRespuesta(`La tarea más rápida fue: "${tareaMasRapida.tarea}"`);
        } else {
            setRespuesta("No hay tareas completadas aún.");
        }
    }

    return (
        <div>
            <button id="tarea-mas-rapida" onClick={mostrarTareaMasRapida}>La Tarea Mas Rapida</button>
            <div id="mostrar-respuesta">{respuesta}</div>
        </div>
    );
}

export default Botontarearapida;

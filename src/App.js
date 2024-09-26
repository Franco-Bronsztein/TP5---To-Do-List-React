import React, { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario';
import DivAgregarItem from './components/DivagregarItem/AgregarItem.js'
import Botontarearapida from './components/Boton.tarea.mas.rapida/Boton.tarea.mas.rapida.js';
import Lista from './components/Lista/Lista.js';



function App() {
  const [tareas, setTareas] = useState([]);

  return (
    <div className="App">
      <DivAgregarItem tareas={tareas} setTareas={setTareas}></DivAgregarItem>
      <Botontarearapida tareas={tareas} setTareas={setTareas}></Botontarearapida>
    </div>
  );
}

export default App;

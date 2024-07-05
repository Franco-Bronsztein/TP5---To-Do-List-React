import React, { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario';
import DivAgregarItem from './components/DivagregarItem/AgregarItem.js'
import Botontarearapida from './components/Boton.tarea.mas.rapida/Boton.tarea.mas.rapida.js';
import Lista from './components/Lista/Lista.js';



function App() {
  return (
    <div className="App">
      <DivAgregarItem></DivAgregarItem>
      <Botontarearapida></Botontarearapida>
    </div>
  );
}

export default App;

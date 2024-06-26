import './Formulario.css';

function Formulario() {
    return (
        <>
        <div id="agregar-tarea">
        <div class="input-container">
            <input type="text" id="agregado"></input>
            <button id="send" onclick="mandar()">Agregar Item</button>
        </div>
        </div>
        </>
        
    );
  }
  
  export default Formulario;
  
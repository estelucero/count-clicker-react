import '../styles/boton.css'
function Boton({ texto, esBotonClick, manejarClick }) {
    return (
        <button className={`${esBotonClick ? "boton-click" : "boton-reiniciar"} boton-juego`} onClick={manejarClick}>
            {texto}
        </button>

    );
}
export default Boton;
import '../styles/contador.css'

function Contador({ nroClicks }) {
    return (
        <div className="contador">
            {nroClicks}
        </div>
    )
}
export default Contador;